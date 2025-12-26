import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

// search paramsのスキーマ定義
type UserSearchParams = {
  q: string;
  page: number;
};

export const Route = createFileRoute("/user/")({
  // validateSearchでsearch paramsのバリデーション & デフォルト値を設定
  validateSearch: (search: Record<string, unknown>): UserSearchParams => ({
    q: (search.q as string) || "",
    page: Number(search.page) || 1,
  }),
  component: UserIndex,
});

// サンプルユーザーデータ
const allUsers = [
  { id: "1", name: "田中太郎" },
  { id: "2", name: "鈴木花子" },
  { id: "3", name: "佐藤次郎" },
  { id: "4", name: "山田花子" },
  { id: "5", name: "伊藤健太" },
  { id: "6", name: "渡辺美咲" },
];

const PAGE_SIZE = 3;

function UserIndex() {
  // search paramsを取得（型安全）
  const { q, page } = Route.useSearch();
  const navigate = useNavigate();

  // 検索フィルタリング
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(q.toLowerCase()),
  );

  // ページネーション
  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  // 検索入力ハンドラ
  const handleSearch = (value: string) => {
    navigate({
      to: "/user",
      search: { q: value, page: 1 }, // 検索時は1ページ目にリセット
    });
  };

  // ページ変更ハンドラ
  const handlePageChange = (newPage: number) => {
    navigate({
      to: "/user",
      search: { q, page: newPage },
    });
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">ユーザー一覧</h1>

      {/* 検索フォーム */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="名前で検索..."
          value={q}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2"
        />
      </div>

      {/* ユーザーリスト */}
      <ul className="mt-6 space-y-2">
        {paginatedUsers.map((user) => (
          <li key={user.id}>
            <Link
              to="/user/$id"
              params={{ id: user.id }}
              className="text-blue-600 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
        {paginatedUsers.length === 0 && (
          <li className="text-gray-500">該当するユーザーがいません</li>
        )}
      </ul>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
          >
            前へ
          </button>
          <span className="px-3 py-1">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages}
            className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
          >
            次へ
          </button>
        </div>
      )}

      {/* 現在のsearch params表示 */}
      <div className="mt-8 rounded bg-gray-100 p-4 font-mono text-sm">
        <p>
          現在のURL: /user?q={q}&page={page}
        </p>
      </div>
    </main>
  );
}
