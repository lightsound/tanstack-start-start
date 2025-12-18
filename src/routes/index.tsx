import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1 className="text-5xl font-bold">Hello World!</h1>
    </main>
  );
}
