import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="mt-4 text-lg text-gray-600">このページはサンプルです。</p>
      </div>
    </main>
  );
}
