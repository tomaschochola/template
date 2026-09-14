# template

Minimal JavaScript tooling repository template.

## Stack

- Language: JavaScript ESM on Node 24
- Runtime: GNU/Linux
- Libraries: none
- Package manager: npm

## Toolchain

- Format: prettier 3.x, trimmer
- Lint: eslint 10.x
- Test: none (template skeleton)
- Audit: npm audit

## Devcontainer

- Base: official Node
- User: node
- Sidecars: none
- Up: `make up`
- Execute: `devcontainer exec --workspace-folder . <command>`
- Down: `make down`

## Makefile

- `update` — refresh locks, only tool that may touch them
- `fix` — auto-fix, may dirty tree
- `check` — full gate: doctor + lint + analyze + audit
- `doctor` — tree and toolchain ok
- `lint` — eslint + prettier + trimmer checks
- `analyze` — npm checks
- `audit` — dependency audit
- `postcreate` — first-time setup, runs automatically on create
- `stop` — stop container, keep it
- `down` — stop and remove container
- `clean` — drop generated files
- `distclean` — drop everything rebuildable
- `rebuild` — full rebuild, only when broken

## Layout

├── Makefile
├── .editorconfig
├── .devcontainer/
├── package.json
├── eslint.config.js
├── prettier.config.js
├── LICENSE
├── AUTHORS.md
