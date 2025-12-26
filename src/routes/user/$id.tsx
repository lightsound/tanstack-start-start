import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$id")({
  component: UserDetail,
});

function UserDetail() {
  const { id } = Route.useParams();

  return (
    <main className="min-h-screen p-8">
      <Link
        to="/user"
        search={{ q: "", page: 1 }}
        className="text-blue-600 hover:underline"
      >
        ← ユーザー一覧に戻る
      </Link>
      <h1 className="mt-4 text-4xl font-bold">ユーザー詳細</h1>
      <p className="mt-4 text-lg">
        ユーザーID: <span className="font-mono">{id}</span>
      </p>
    </main>
  );
}
