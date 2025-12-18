# TanStack Start Starter

A minimal starter template for [TanStack Start](https://tanstack.com/start) — the full-stack React framework powered by TanStack Router.

## Tech Stack

This starter leverages cutting-edge tools with a minimal configuration:

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [TanStack Start](https://tanstack.com/start) | Latest |
| Language | [TypeScript Native](https://devblogs.microsoft.com/typescript/typescript-native-port/) | 7 Preview |
| Build Tool | [Vite](https://vite.dev/) | 8 Beta |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 4 |
| Linter | [oxlint](https://oxc.rs/docs/guide/usage/linter) | Latest |
| Formatter | [oxfmt](https://oxc.rs/docs/guide/usage/formatter) | Latest |
| Runtime | [Bun](https://bun.sh/) | Latest |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/lightsound/tanstack-start-start.git
cd tanstack-start-start

# Install dependencies
bun install

# Start development server
bun run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Preview production build |
| `bun run check` | Run linter and formatter check |
| `bun run fix` | Auto-fix lint issues and format code |

## About oxlint Configuration

This starter intentionally uses **strict oxlint rules** with all categories set to `error`. This is designed to encourage best practices and catch potential issues early. Feel free to adjust these rules according to your project's needs by modifying `.oxlintrc.json`.
