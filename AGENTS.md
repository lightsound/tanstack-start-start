# Using Vite+ (`vp`)

**Vite+** is one CLI for dev, build, tests, lint, format, and package management—it wraps Vite and related bundled tooling. `vp dev` and `vp build` invoke Vite. Explore with `vp help`, `vp <command> --help`, and `vp --version`.

**Common commands:** `vp install`, `vp dev`, `vp check`, `vp lint`, `vp test`, `vp build`, `vp run <script>`, `vp add` / `vp remove` / `vp update`.

**Workflow:** After pulling, run `vp install` when dependencies or lockfiles may have changed. Before calling work done, run `vp check` and `vp test`.

## Common Pitfalls

- **Using the package manager directly:** Do not use pnpm, npm, or Yarn directly. Vite+ can handle all package manager operations.
- **Always use Vite commands to run tools:** Don't attempt to run `vp vitest` or `vp oxlint`. They do not exist. Use `vp test` and `vp lint` instead.
- **Running scripts:** Vite+ commands take precedence over `package.json` scripts. If there is a `test` script defined in `scripts` that conflicts with the built-in `vp test` command, run it using `vp run test`.
- **Do not install Vitest, Oxlint, Oxfmt, or tsdown directly:** Vite+ wraps these tools. They must not be installed directly. You cannot upgrade these tools by installing their latest versions. Always use Vite+ commands.
- **Use Vite+ wrappers for one-off binaries:** Use `vp dlx` instead of package-manager-specific `dlx`/`npx` commands.
- **Import JavaScript modules from `vite-plus`:** Instead of importing from `vite` or `vitest`, all modules should be imported from the project's `vite-plus` dependency. For example, `import { defineConfig } from 'vite-plus';` or `import { expect, test, vi } from 'vite-plus/test';`. You must not install `vitest` to import test utilities.
- **Type-Aware Linting:** There is no need to install `oxlint-tsgolint`, `vp lint --type-aware` works out of the box.

## Supplementary project tools

Not part of `vp check`. Use `vp run` so installs stay routed through Vite+.

- **Knip** (`vp run knip`) — unused files, dependencies, and exports. Use when trimming deps or refactoring entry points (`knip.config.ts` configures the project).
- **react-doctor** (`vp run doctor`) — React-focused health checks. The script uses `--no-lint`; keep ordinary linting on `vp lint`.

## Cursor Cloud specific instructions

### Vite+ CLI on the VM

The global `vp` command is installed via `curl -fsSL https://vite.plus | bash` and lives under `~/.vite-plus/bin`. Ensure that directory is on `PATH` before running `vp` (the installer updates `~/.bashrc`). After `vp install`, you can also use `./node_modules/.bin/vp` from the repo root.

### Services

| Service | Command | Notes |
|--------|---------|--------|
| Dev server (required for browser E2E) | `vp dev` | Default URL `http://localhost:5173`. Use `vp dev --host 0.0.0.0` when the app must be reachable outside localhost. |
| Production preview (optional) | `vp build` then `vp preview` | Same default port as Vite preview. |

No database, Docker Compose, or external APIs. A single Node process is enough.

### Lint / test / build

See the table in [README.md](README.md). Standard workflow: `vp check`, `vp test`, `vp build`. Do not run `pnpm`/`npm`/`yarn` directly for installs.

### Dev server in background

Use a tmux session (e.g. `vite-dev-server`) for long-running `vp dev`, not a one-shot background shell. The home page at `/` is the hello-world demo: red **Hello World!** heading and a **Toggle** button that switches the heading to blue and back.
