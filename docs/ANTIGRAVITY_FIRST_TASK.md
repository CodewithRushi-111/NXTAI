# Antigravity — First Task: Phase 1 UI Only

Read `PRD.md` fully. Inspect all screenshots in `reference-screens/` (open the contact sheet first, then inspect each full image) before writing code.

Implement **Phase 1 only** from the PRD: the responsive application shell and the screenshot-faithful UI pages, using mock fixtures only. Match the navigation order, panel layout, relative widths, alignments, spacing, typography, density, and dark theme from the reference images, while using original branding. Do not use LayerFlow's logo, copy its private source, or present this as the official LayerFlow product.

Important constraints:
- Inspect existing files and Git status first. Preserve scaffold and user work.
- Do not touch `briefproof`.
- Keep the existing Next.js/TypeScript/Tailwind stack and minimize dependencies.
- All 15 pages listed in PRD Section 7 must have real routes or intentional in-app navigation, including Home, Chat, Models, Keys, MCP, Agents, Competitor Audit, Pipelines, Terminal, Jobs, Costs, and Usage History.
- Make navigation, tabs, local forms, copy controls, and quick actions actually work or clearly label them demo/coming later.
- Label fixture usage/cost/model information as DEMO. Do not fake provider connections, agent execution, costs, API keys or terminal commands as real.
- Do not add provider keys, call AI APIs, execute shell commands from the app, add database/auth/billing/cloud execution, deploy, or push.
- Validate desktop at 1600x900 and mobile around 390x844; avoid accidental overflow and keep controls touch-friendly.
- Run available non-billable tests, `npx tsc --noEmit`, lint and build. Report actual outcomes and any failures.

Stop after Phase 1 and report changed files, actual page coverage/interactions, demo-only areas, check results and the next recommended milestone. Do not start Phase 2 automatically.
