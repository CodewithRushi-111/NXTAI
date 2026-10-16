# AI Workspace Platform — Product Requirements Document (PRD)

**Version:** 1.0  
**Prepared:** 16 October 2026  
**Status:** Product/build baseline for Antigravity  
**Working directory:** `C:\Users\rishi\Desktop\ai-workspace`  
**Existing unrelated project:** `C:\Users\rishi\Desktop\briefproof` — preserve, do not modify.

> **Naming/IP note:** “LayerFlow” is the inspiration/reference product, not our product name. Implement an independent product with original branding and code. The supplied screenshots are authoritative visual references for information architecture, layout, alignment, density, and interaction patterns. Do not use the LayerFlow logo or imply affiliation.

---

## 1. Executive summary

We are building a unified AI developer workspace inspired by LayerFlow's publicly visible feature set. It should bring model-provider chat, project context, prompts, Chat Rescue/Continue Packs, a model gateway and BYOK, usage/cost control, browser/CLI continuity, coding agents, agent pipelines, and company-specific agent configuration into one coherent workspace.

The long-term product also has two explicit extensions:

1. **Phone-first cloud development:** a user can create/modify code, run commands/tests, preview an application, review changes, and deploy from a phone without needing a laptop.
2. **Company agent harness:** an organization can define agents using its instructions, approved knowledge, tools, permissions, approval rules, budgets, versions, and run history, without assembling an unrelated stack for each workflow.

These are related by one shared project/context model, one permission system, one run/job system, and one usage ledger. They must not become disconnected dashboards.

### Product promise

**One workspace for AI work: preserve context, choose the right supported model, organize prompts, run controlled agents, continue work across browser and terminal, and track usage and costs.**

### Important implementation boundary

The first milestone is a high-fidelity, responsive UI prototype with real navigation and honest demo states. Do **not** implement all backend infrastructure at once, and do not make live AI/API calls for the initial UI milestone. Build and validate in stages.

---

## 2. Problem and users

### Problems to solve

- AI chat and work are fragmented across providers and sessions.
- Users repeatedly recreate instructions, project decisions, prompts, and context.
- Long or interrupted conversations are hard to resume when a model/session hits a limit.
- Browser chat, local repositories, terminal work, code review, and agent execution do not naturally share state.
- API credentials, model selection, per-project usage, provider rate limits, and budgets are difficult to manage together.
- Agents are often created in separate tools and lack consistent project context, permissions, run history, and spend controls.
- Developers without reliable laptop access need a true cloud execution environment—not merely a responsive chat screen.
- Companies need a repeatable way to configure, test, govern, and run their own agents.

### Initial user segments

1. **Individual developers and builders:** use multiple models and want their work/context to survive switching sessions or interfaces.
2. **Freelancers and small teams:** need repeatable coding workflows, reusable prompts, cost visibility, and shared project context.
3. **Phone-first builders:** need a hosted development environment, file editor, terminal, preview, test and deployment workflow from a mobile browser.
4. **Small businesses/organizations:** want to configure agents that use company-approved data and actions with permissions, approvals, budgets, and logs.

These are target hypotheses. Product-market fit and willingness to pay have not been demonstrated yet.

### Initial experience to prove

A user creates/selects a project → chats with a supported model → saves project context → starts a controlled coding/agent task → inspects execution/status/changes → resumes via another supported surface → sees usage records and costs. A later cloud-dev milestone enables the same journey completely from a phone.

---

## 3. Product principles

1. **Project-first, not just chat-first.** Chats, prompts, decisions, files, Continue Packs, agents, jobs, and usage should connect to a project when relevant.
2. **Real actions, honest states.** Never make demo activity look real. Clearly label fixtures and integrations that are not connected.
3. **Progressive implementation.** Complete one vertical slice before adding many half-working features.
4. **Safe by default.** Secrets are server-side; tools have scoped permissions; shell/code execution is isolated; consequential actions require approval.
5. **Provider abstraction without false universality.** Implement only supported APIs/integrations. A consumer subscription to ChatGPT/Claude/Gemini does not automatically confer API access.
6. **Cost controls must enforce, not just display.** Usage projections/dashboards are not hard caps. Reserve budget before concurrent calls and reconcile actual usage afterward.
7. **Phone-first means real cloud execution.** Responsive UI alone does not satisfy no-laptop coding.
8. **Reference fidelity.** Follow the supplied screenshots closely for desktop composition, hierarchy, alignment, spacing, density, and active navigation while using original branding.
9. **No unjustified infrastructure.** Add database, queues, sandboxes, CLI sync and organization controls only in the stage that needs them.
10. **Keep the existing `briefproof` repository untouched.** This product has its own folder, files, and Git history.

---

## 4. Scope map

### Core workspace (reference parity)

- Home dashboard and global search.
- Unified chat sessions, model-per-message selection, stream/status states, rescued/imported context.
- Saved prompts and history/work ledger.
- Project context and portable Continue Packs.
- Models registry and suggested model.
- API Keys: platform/gateway keys versus private BYOK provider keys.
- MCP tools/integration setup.
- Agent builder/marketplace and workforce status.
- Pipelines with ordered agent steps, permissions, shared budget, approvals, launch form, and timeline.
- Terminal/CLI view and connected-device status.
- Jobs, costs, usage history, settings, billing/plan surfaces.
- Competitor audit tool from reference screenshot, separated as an optional workflow/tool; actual fetch/research must be honestly labelled and budgeted.

### Product extensions (our additional vision)

- Phone-first cloud IDE/workspace: cloud file system, shell, tests, code diff, live preview and deployment.
- Organization agent harness: tenant isolation, roles, reusable agent templates, data/tool connections, versioning, audit logs, deployment interfaces and shared budgets.

### Not part of the first UI milestone

- Live AI integrations or paid API calls.
- Real cloud shell/code execution.
- Real provider-key vault or budget enforcement.
- Production authentication, billing, organization tenancy, or deployment.
- Fake “working” agent/pipeline/terminal activity.

---

## 5. Visual design system and screenshot fidelity

The 15 supplied screenshots are the visual source of truth. They are included in `reference-screens/` with readable names and in a contact sheet. Antigravity must inspect these image assets directly before implementing the UI.

### 5.1 Overall visual language

- Dark developer-tool interface, low-glare charcoal background, slightly lighter panels, subtle thin borders, muted blue-gray supporting copy, bright orange as the main action/accent, restrained green for healthy/connected states, amber for approvals/warnings, red for errors.
- Typography: clean modern sans-serif, compact but readable. Use a consistent type scale and medium/semibold weights for titles.
- Surfaces are mostly flat with 1px borders and modest radii; avoid excessive drop shadows, gradients, giant marketing-style cards, and over-decoration.
- Icons should be consistent line icons from one library already installed, if available. Do not add dependencies without need.
- Buttons, cards, tabs, input fields, table rows, badges, dividers and empty states should share a common component system.
- Main content is dense and utility-oriented, not a landing page. Content should align to a consistent grid.
- Use a dark color system close to screenshots: background approximately `#0D1315`, sidebar/panel `#101719`, raised panel `#141D20`, border `#243034`, primary text `#F0F4F5`, secondary text `#839BA8`, accent orange approximately `#FF7417`, muted teal/green for success. Treat these as initial tokens; tune by comparing the references, not as exact sampled source colors.

### 5.2 Desktop geometry (reference at 1600×900)

Use the images to calibrate ratios rather than blindly hardcoding one viewport:

- Left sidebar approximately 290px at 1600px viewport width; fixed/sticky full height with an independently scrollable navigation area and a bottom profile/account block.
- Global top bar approximately 58–62px high across the main app area; search near the left, workspace controls/avatar and utility buttons near the right.
- Main content starts about 32px inward from the content area's left edge, with consistent 16–24px gaps between panels.
- Use a fluid CSS grid; at desktop width the main dashboard cards form 3–4 columns according to card types, while dense tables span the content width.
- Content scrolls vertically; do not position lower cards absolutely. Side navigation remains legible as the page scrolls.
- At smaller widths, sidebar collapses to a drawer or compact navigation. Do not shrink the desktop layout to unreadable sizes.

### 5.3 Screenshot-specific alignment rules

- Reproduce each page's hierarchy and card placement from its matching reference image.
- Match the sidebar section labels and ordering.
- Keep headings, section descriptions, and content panels aligned to one left edge.
- Use the same density: compact metadata, large enough main title, moderate panel padding, and subdued supporting copy.
- Do not copy browser chrome, OS overlays, voice/microphone widgets, pointer/click effects, or system notifications appearing over screenshots; those are capture overlays, not app UI.
- Do not use the screenshots as a flat background image. Build the interface with real components and interactive HTML.
- Do not make all screens copies of the Home page. Follow each screen's particular composition.

### 5.4 Responsive/mobile design

Reference screenshots are desktop captures, but phone-first is a product requirement. For mobile:
- Provide a compact top bar and accessible navigation drawer or bottom nav.
- Stack card grids; preserve table readability with horizontal scroll or a mobile-specific row/card layout.
- Make chat composer, run controls, code preview, diff review and approve/reject controls touch-friendly.
- Never require hover to discover critical actions.
- Preserve progress, cancellation, approval and error feedback at small widths.
- Cloud development and terminal work must be designed for mobile interactions—not just scaled down.

---

## 6. Information architecture and routes

Use Next.js App Router. All listed routes must be navigable and show a real page or clearly labelled “Coming in a later milestone” screen. Do not leave dead links.

| Section | Route suggestion | Purpose |
|---|---|---|
| Home | `/home` (or `/`) | Work hub, recent work and quick actions |
| Chat | `/chat` | Conversations, new chat, model choice, Chat Rescue, import rescue |
| Projects | `/projects` | Project list, instructions, context, files, history |
| Prompts | `/prompts` | Saved/reusable prompt library |
| Models | `/models` | Model registry, capabilities, prices/speed metadata, suggestion |
| API Keys | `/keys` | Gateway/platform key examples and BYOK key management UX |
| MCP | `/integrations/mcp` | Tool descriptions, generated setup configuration and setup steps |
| Agents | `/agents` | Create/configure agents, templates/marketplace, workforce pulse |
| Pipelines | `/pipelines` | Pipeline catalog, run configuration, ordered steps and permissions |
| Terminal | `/terminal` | Terminal UX, CLI session sync, remote command control |
| Jobs | `/jobs` | Agent/job runs and status timeline |
| Costs | `/costs` | Spending, budget utilization and alerts |
| Usage History | `/history` | Work ledger, model/token/cost records, learning memory, saved prompts |
| Settings | `/settings` | Workspace/profile/provider/preferences/security settings |
| Billing | `/billing` | Plan and invoice surface (later, clearly marked demo initially) |
| Phone cloud dev | `/workspaces` or `/projects/[id]/code` | Future cloud IDE for files, shell, preview, tests and deployment |
| Organization | `/organization` | Future company/team harness administration |

Choose route names consistently, and document any final route deviations.

---

## 7. Screen-by-screen UI requirements

### Screen 01 — Home dashboard (`reference-screens/01-home-dashboard.png`)

- Full-height left navigation with workspace/person label at top and account/profile block pinned to bottom.
- Top application bar with global search, utility icons and avatar.
- Main greeting/date and one search field for prompts/conversations.
- First row: four cards—continue/new conversation, continue terminal session, recent conversations, active agents. Each card has icon, title, short explanation, and arrow/Open affordance as shown.
- Next: full-width Terminal Activity panel with title, description, right-aligned Open terminal link, separator, and empty state instructing how CLI sessions would appear. Any install command is informational only during UI prototype.
- Lower row: Memory Highlights, Notifications, Team Activity panels.
- Match reference card spacing, title sizes, and subdued empty-state copy.

### Screen 02 — Home lower section / feature directory (`reference-screens/02-home-feature-directory.png`)

- Maintain the same sidebar/top bar and page scroll position.
- Left: Saved Prompts card with empty state and Open action.
- Right: “Everything in [our workspace]” directory arranged as two columns of compact navigable cards (Home, Chat, Models, Keys, MCP, Agents, Competitor Audit, Pipelines, Terminal, Jobs, Costs, Usage History, Billing, Settings).
- Bottom: slim monthly spend strip spanning the main content width.
- Every directory card must navigate to the corresponding page.

### Screen 03 — Chat empty state (`reference-screens/03-chat-empty.png`)

- Keep sidebar and top bar.
- Add a session/conversation list panel immediately left of the main content, with New chat near the top and Rescue/Import actions near the bottom.
- Center the empty-state icon/title/subtitle in the remaining area: “Continue any chat, on any AI” or equivalent original wording.
- Primary action: New chat. Secondary actions: Rescue a past chat and Import from rescue.
- A new chat should open an actual composer and model selector. In prototype mode send action may use a deterministic mock response and must show “Demo response” clearly.
- Chat Rescue accepts pasted text; build a locally validated Continue Pack preview in the UI, without a model call in the first milestone.

### Screen 04 — Models (`reference-screens/04-models.png`)

- Page title “Models” and explanatory line.
- Large bordered recommendation panel with a suggested model, recommendation badge, short “best for” explanation and reason.
- A dense model registry table below, horizontally aligned columns for provider/model, class/tier, quality/score (only if clearly labelled heuristic—not a truth score), input/output price per 1M tokens, speed (clearly defined if used), and best-for description.
- Use static demo registry entries initially and label data as demo/last verified date. Do not imply live prices or invent model capabilities as facts. Use an extensible provider/model type.

### Screen 05 — API Keys (`reference-screens/05-api-keys.png`)

- Title “API Keys”, explanatory copy distinguishes platform/gateway keys and private provider keys (BYOK).
- Three equal-width example panels: Gateway curl, Gateway Python (OpenAI-compatible SDK example), CLI direct mode. Include copy buttons; examples use placeholders only, never real keys.
- Below examples, full-width segmented tabs: Platform keys and Private own keys (BYOK).
- Show explanatory text and a form/list for creating a named key, scoped project, displayed once warning, revoke/delete controls and status badges.
- Prototype only: forms must not store real secrets or claim secure vaulting. Do not accept real keys until backend security work is implemented.

### Screen 06 — MCP tool directory (`reference-screens/06-mcp-tools.png`)

- Centered content column as in reference, with “MCP server” title and description.
- List tool cards with exact tool identifiers and one-line descriptions (initial examples: get budget, set monthly budget, get spend summary, list projects).
- Provide a setup flow below the tool list; no working key generation yet in Milestone 1.

### Screen 07 — MCP setup (`reference-screens/07-mcp-setup.png`)

- Numbered steps: create API key, add server, copy the `mcpServers` configuration for a generic MCP client, and CLI command example.
- Configuration blocks use placeholder credentials only and copy affordance.
- Clearly state setup is a demo until server endpoints and authentication are implemented.

### Screen 08 — Agents (`reference-screens/08-agents.png`)

- Wide hero region with left side: “digital worker”/agent introduction, multi-line task goal input, examples, primary “Generate onboarding”/create agent action.
- Right side: Workforce Pulse stats cards for agents, approvals pending, collected and queued, plus an amber safety note about actions requiring approval.
- Below: Agent marketplace/template grid (e.g. Common Assistant, Freelance Prospector, Job Finder) with category, description, estimated cost marked as illustrative, and Use template actions.
- Agent configuration design must include name, objective, model/provider, prompt/instructions, tools, knowledge sources, permissions, budget, approval rules, and enabled state.
- The first version only creates a local/demo definition; do not claim it runs real agent actions.

### Screen 09 — Competitor audit (`reference-screens/09-competitor-audit.png`)

- Page title/description and honest note that measurements are deterministic while research/model-based steps need a provider.
- Two aligned input areas: “Your site” and “Competitors” (up to a documented maximum such as 12).
- Orange primary action “Measure and compare”.
- “What happens next” section lists four steps: measure, research, draft and human approval.
- Validate URLs. No actual network fetch, crawling, scraping or model calls in UI milestone. Later server implementation must guard against SSRF, redirects to private networks, oversized responses, timeouts, and unauthorized publishing.

### Screen 10 — Pipelines overview and permissions (`reference-screens/10-pipelines-overview.png`)

- Title “Pipelines” and short explanation: ordered agents with dependencies, shared budget and permission ceiling.
- Two sample pipeline cards with title, description and step count; one highlighted as selected.
- Below, “What each step may do” panel with numbered steps, agent/step names, granted capabilities, and approval badge if relevant.
- Prominently show that step permissions can narrow but cannot exceed the pipeline's permission ceiling.
- Show “no write/admin/shell permissions” state explicitly when applicable.

### Screen 11 — Pipeline launch and execution contract (`reference-screens/11-pipeline-launch.png`)

- Continue pipeline details/permission list.
- Launch card with target URL/context (if relevant), budget input in USD, objective text input and primary Launch pipeline action.
- Supporting explanation: each step reads earlier outputs, uses a shared budget, is authorized at execution time and pauses on required human approval.
- In Milestone 1 launch produces a demo preview only and clearly says no real model calls are made.
- Later, add one run timeline with per-step queued/running/waiting approval/succeeded/failed/cancelled states, logs, usage/cost, retry and resume.

### Screen 12 — Terminal (`reference-screens/12-terminal.png`)

- Page header “Terminal” and refresh/session sync control.
- Small links/chips for docs/API keys/usage and summary cards such as chat sessions, providers ready, recent runs, sync operations.
- Terminal panel with session/provider/model selector, cost/token indicators, copy/new-session actions, command input and output area.
- Remote control panel for sending a command to a registered device, with target device selector and connection status.
- CLI Sync Activity panel listing connected devices and recent events.
- Prototype must not execute shell commands. The console may demonstrate typed commands against a safe mock. Real commands require an isolated execution design, authentication, scoped permissions and explicit dangerous-command policy.

### Screen 13 — Jobs (`reference-screens/13-jobs.png`)

- Minimal, spacious empty state centered in main content: no jobs yet, brief explanation that jobs appear after a chat command or agent dispatch.
- When live later, show filters, status, started/duration, project, initiator, cost and a details/timeline view. Include failed/cancelled/waiting-approval states.

### Screen 14 — Costs (`reference-screens/14-costs.png`)

- Title “Cost Analytics”, description.
- Prominent empty state with “No spend yet” and Start chatting CTA.
- Later show month-to-date and daily/weekly spend, per-provider/model/project breakdown, budget utilization, forecasts (clearly marked estimates), alert history and budget editor.
- Data must be derived from real usage records once integrated; never hardcode demo figures without a visible demo label.

### Screen 15 — Usage History / Work Ledger (`reference-screens/15-usage-history.png`)

- Title “Work Ledger” or Usage History with description about a time-ordered record of work.
- Upper split layout: Recent activity (larger left) and Learning Memory (right), both with clear empty states.
- Full-width Saved Prompts card below, with “Save a prompt” action.
- Later display one time-ordered ledger entry for each relevant event: user prompt, saved prompt, model run, decision/context, CLI command, agent step and usage record, with appropriate project references and cost.

### Cross-screen interaction rules

- Sidebar links, cards, search, tabs, buttons, copy controls, filters, and forms must work or be visibly disabled/marked “Coming later”. Never leave dead controls.
- Maintain one active nav state, one shared header geometry, and consistent content paddings.
- Mock/demo state must be explicit, especially for usage, API keys, connected providers, agents, jobs and terminal activity.
- No fabricated “connected” indicators, API calls, spend amounts or successful job runs.

---

## 8. Cross-cutting functional requirements

### Projects/context

- Create, select, rename and archive/delete projects (deletion confirmation required).
- Project fields: ID, name, summary, instructions, created/updated dates.
- Context sections: objective, constraints, technical stack, decisions, files/links, progress, open issues, next action.
- Context should be editable and versionable later; do not let automatic summaries silently overwrite user-written project instructions.
- Generate/import/export a Continue Pack with schema version, project/task summary, key decisions, relevant file references, completed work, pending work and next step. Validate imports before applying.

### Prompts and Chat Rescue

- Saved prompt: ID, title, prompt body, tags, optional project scope, created/updated timestamps.
- Copy/reuse prompt in chat.
- Chat Rescue accepts pasted content, extracts a structured handoff locally or by optional later model call, previews it, and requires confirmation before saving. Do not claim to import conversations directly from provider accounts unless an authorized integration exists.

### Multi-model chat

- Model/provider dropdown, conversation list, streaming response state, cancel button, retry for eligible errors, token/cost metadata when actually available.
- Provider adapter interface, with server-side requests only.
- Preserve provider-specific capabilities; do not pretend every provider supports identical tool calls, streaming or response semantics.

### BYOK and gateway

- Separate gateway/platform keys from provider keys.
- Keys never go to localStorage or client logs; encrypt at rest using a server-managed key/KMS in production, restrict access, mask on display, reveal once at creation where appropriate, support rotate/revoke.
- OpenAI-compatible API endpoint should support the intended subset of Chat Completions, streaming/SSE, errors, request IDs, model mapping and usage records; publish limitations clearly.
- Budget enforcement must use server-side atomic reservations/transactions and reconcile provider-reported usage; block new work at cap and account for concurrent requests/in-flight calls. Do not promise absolute hard-cap behavior if provider fees can settle after the request or provider usage is delayed.
- Pricing registry must include provider/model, effective date, source and freshness. Do not hard-code stale public prices without indication.

### Agents and pipelines

- Agent definition separates configuration from individual run.
- Definition: name, objective, instructions, model, tools, source connections, max steps, timeout, budget, permission scopes, approval policy, version.
- Run: ID, agent/pipeline version, status, inputs/reference, steps, outputs/artifacts, provider usage, costs, approvals, errors and timestamps.
- Pipeline permission ceiling is the maximum permission set; individual steps can narrow but never expand it.
- Human approval blocks continuation for the relevant action. Maintain an audit record.
- Use bounded loops, tool-call counts, timeouts and retries. Use parallelism only where tasks are independent and safe.

### CLI/browser synchronization

- CLI identity is a device credential, scoped and revocable.
- Browser and CLI use server-side task state/events, with sequence IDs/versioning to avoid silent overwrites.
- Sync project/task/context/agent run status; do not sync raw credentials into shared context.
- Offline local work should queue safe metadata changes and reconcile explicitly on reconnect.
- Remote shell commands require target-device enrollment, command authorization, visible command/actor/time and approval when needed.

### Phone-first cloud coding

- Separate cloud workspace instance per user/project/task, with CPU/memory/disk/time budgets, allowed base images, outbound network controls, no privileged container access, ephemeral credentials, filesystem isolation and cleanup.
- Build MVP using existing secure hosted execution infrastructure if practical rather than inventing a container scheduler immediately.
- UI must support editing files, a task/chat composer, run/test, logs, code diffs, rollback/checkpoint, preview URL and deploy confirmation.
- A local CLI connection is optional. Phone-only users must be able to create and access a cloud workspace.
- Deployment and public publishing must require user confirmation; never deploy directly from a natural-language request without showing the target/environment and changes.

### Company agent harness

- Organization and tenant boundary, members/roles, project-scoped agent definitions, approved integrations/credentials, data access scopes, budget policy, audit logs, run history, versioning, and deploy/disable controls.
- Organization secrets must be isolated from users/projects without authorization.
- Start with owner-only organization demo only after the core single-user flow works; production multi-tenant security must be tested before company users are invited.

---

## 9. Suggested technical architecture (staged, not all at once)

### Frontend

- Next.js App Router, React, TypeScript, Tailwind CSS.
- Reusable layout/components and typed page data.
- Local UI state for prototype; typed repository/service interfaces so persistence can move server-side.

### Backend / application services (later phases)

- Server-side application API/BFF.
- Provider adapter layer for Anthropic/OpenAI/Gemini and additional providers as explicitly tested.
- Shared project/context service.
- Gateway with auth, model routing, usage metering, budget reservation and ledger.
- Agent and pipeline orchestrator with durable job state.
- Event/stream layer for progress and approvals.
- Data persistence: PostgreSQL or managed relational database; choose after the UI/context types are proven.
- Background worker/queue only when task duration/concurrency requires it.
- Cloud execution service for isolated workspaces; do not run untrusted code in the web application process.
- CLI as separate package with versioned API contract.

### Keep the initial architecture small

Do not install LangGraph, Redis, BullMQ, vector DB, database, auth or cloud runtime solely because the reference deck mentions them. Add each only when a milestone requires it and tests justify it.

---

## 10. Suggested data model

These are target concepts. Implement only those needed for the current phase.

- `User` / `Workspace`: identity and user workspace settings.
- `Project`: name, description, instructions, settings, timestamps.
- `ProjectContextItem`: type (decision, note, goal, constraint, task, file reference), body, source, updated time, author.
- `Conversation`: project, title, provider/model metadata, status, timestamps.
- `Message`: conversation, role, content, provider metadata, attachments/artifacts, usage metadata.
- `SavedPrompt`: title, body, tags, optional project scope, timestamps.
- `ContinuePack`: version, project/task summary, decisions, completed/pending work, next step, file refs.
- `ProviderConfig`: provider/model endpoint metadata; secret material must be separated and encrypted.
- `ApiCredential`: key metadata, encrypted secret, scope, creator, created/revoked dates; never persist plaintext after ingestion.
- `ModelRegistryEntry`: provider/model ID, capabilities, prices and price effective date/source.
- `UsageEvent`: request ID, project, user, provider/model, input/output tokens, cost source/estimate, status, time.
- `Budget`: scope, period, cap, threshold settings, current/reserved usage.
- `AgentDefinition` / `AgentVersion`: instructions, model, tools, knowledge sources, permission scopes, approval and budget policies.
- `PipelineDefinition` / `PipelineStep`: dependency order, per-step permissions, shared budget, approval policy.
- `Job` / `RunStep`: durable status, events, output/artifact references, error, retry count, timestamps.
- `Device` / `SyncEvent`: CLI device metadata, revocation state and event sequence (no secret material in project context).
- `CloudWorkspace`: owner/project, runtime/image, resource quotas, status, URL, created/expiry dates.
- `Organization` / `Membership` / `Role`: later tenant isolation and access control.

---

## 11. Security, reliability and privacy requirements

- No provider/platform API keys in frontend bundles, public environment variables, Git, screenshots, prompts, project memory or logs.
- No real secrets stored in browser localStorage. Prototype localStorage may store only non-sensitive demo records.
- Never run arbitrary shell/code in the web process or a privileged container.
- Use isolated execution environments with network/CPU/memory/time/disk caps and cleanup.
- Treat prompt inputs, uploaded files, repositories, webpages, MCP responses, and tool output as untrusted content. Tool output cannot grant itself permissions.
- MCP/tools require explicit server identity, OAuth/API auth where appropriate, permission scopes, allowlists, timeout and audit logging.
- Prevent SSRF and redirect abuse for URL fetch features; block loopback/private/link-local/cloud metadata ranges unless an explicitly authorized internal connector demands them.
- Require confirmation for destructive operations, external messages, public deployment, credential changes, budget increases, and shell commands classified as consequential.
- Include cancel/timeout/error states and preserve partial output without claiming completion.
- Apply rate limits and run budgets to chat, agent, pipeline and gateway endpoints.
- Organization isolation, retention and deletion behavior must be documented and tested before multi-user release.

---

## 12. Analytics / observability

Record only data needed for reliability/cost and never expose secrets:
- Run start/end/duration/status and stage failures.
- Provider/model call counts and usage returned by providers.
- Estimated vs reported token/cost data and source of each number.
- Budget reservations, denials, reconciliation and alert events.
- Agent/pipeline step status, approvals, retries and timeout information.
- CLI sync lag/conflict/error events.
- User feedback on missing context, incorrect model choice, bad prompts and failed agent tasks.

For the beta, track: time to first useful result, task completion, context-resume success, failed runs, cost per task, repeat usage and tasks completed from mobile without a laptop.

---

## 13. Acceptance criteria

### Milestone 1 — high-fidelity UI prototype

- [ ] All 15 screenshot-reference pages are represented by real routes or intentional in-page sections.
- [ ] Home, Chat, Models, Keys, MCP, Agents, Competitor Audit, Pipelines, Terminal, Jobs, Costs and Usage History match their screenshot hierarchy and alignment closely.
- [ ] Header/sidebar geometry and navigation remain consistent across pages.
- [ ] Mobile layouts are responsive and do not produce horizontal overflow except intentionally scrollable tables/code blocks.
- [ ] All links and primary actions work or are visibly marked as demo/coming later.
- [ ] All demo numbers, connected states, costs, model pricing and agent runs are labelled as demo/illustrative.
- [ ] No provider keys, live API calls or shell execution exist in the prototype.
- [ ] TypeScript, lint and production build pass; tests exist for important pure state/validation code.
- [ ] The app can start locally using the documented command and no API credentials.

### Milestone 2 — projects, prompts and Continue Packs

- [ ] Create/select/rename/delete-with-confirmation projects.
- [ ] Project instructions/context persist through refresh and validate on load.
- [ ] Prompt save/copy/reuse works.
- [ ] Continue Pack import/export is versioned and validates fields, sizes and unsafe content.
- [ ] No secrets are packed into exported context.

### Milestone 3 — first real provider chat

- [ ] One provider works from a server route using a server-side key.
- [ ] Streaming, cancel, rate-limit and error states work.
- [ ] The UI never claims provider connection until an authenticated request succeeds.
- [ ] All model calls are optional during local UI development and tests are mocked by default.

### Milestone 4 — gateway and budget controls

- [ ] OpenAI-compatible endpoint supports documented request/response subset and streaming behavior.
- [ ] Per-request usage event is recorded with request/project/model/provider/status.
- [ ] Budget reservation prevents concurrent requests from exceeding the configured authorization ceiling in supported paths.
- [ ] Credentials are masked, scoped, revocable and never returned after initial creation.
- [ ] Alert thresholds and denied requests are auditable.

### Milestone 5 — agent harness/pipelines

- [ ] Agent definition can be created/edited/versioned.
- [ ] Pipeline step permissions cannot exceed the pipeline's permission ceiling.
- [ ] Required approval pauses execution.
- [ ] Every step has status, timeout/retry policy and cost tracking.
- [ ] Cancellation stops downstream work and records final state.

### Milestone 6 — CLI sync and cloud dev

- [ ] CLI device identity can be enrolled/revoked.
- [ ] CLI and web show matching project/task state without silent overwrites.
- [ ] Cloud workspace is isolated, bounded, and can run/build/test code.
- [ ] Phone-only workflow supports file edits, run/test, diff, preview, checkpoint and confirmed deployment.

### Milestone 7 — company harness

- [ ] Org/tenant data isolation tests pass.
- [ ] Members have roles and scoped access.
- [ ] Agent credentials/integrations are isolated and audited.
- [ ] Admin can disable/revoke agent versions and view runs/budgets.

---

## 14. Build order and rules for Antigravity

### Phase 0 — inspect and plan

Inspect the current `ai-workspace` scaffold, package scripts and Git status. Preserve all existing changes. Do not inspect or modify `briefproof`.

### Phase 1 — reference-faithful UI shell (first task)

Implement all screenshot-based pages using mock fixtures; focus on layout fidelity, alignment, reusable components, mobile adaptation and working navigation. This phase makes no live API calls.

### Phase 2 — project/context UI and local persistence

Implement project switching, instructions, prompt library, Continue Pack export/import and Chat Rescue preview. Persist non-sensitive demo state only.

### Phase 3 — one provider and real chat

Add one server-side provider adapter, SSE streaming, cancel, error handling and real token/usage fields where provider returns them. Keep all tests mocked by default.

### Phase 4 — gateway and cost control

Add model registry, BYOK credential storage, OpenAI-compatible gateway, usage ledger, budget reservation and alert logic. Security review required before real keys.

### Phase 5 — one agent and pipeline

Implement one controlled agent and one 2–3 step pipeline (for example implementation → reviewer → tests), with logs, approval, cancellation and cost ceiling. Do not build broad marketplace before one run is safe and repeatable.

### Phase 6 — CLI and synchronization

Create separate TypeScript CLI package, device enrollment, task/session sync and remote-control permissions.

### Phase 7 — phone-first cloud workspace

Implement cloud runtime/workspace isolation, mobile code editing, terminal, test logs, preview, diff, checkpoint and deployment approval.

### Phase 8 — company/organization agent harness

Add organization roles, integration scopes, shared policy/budgets, agent versions and audit views. Validate tenant isolation before release.

### Phase 9 — release hardening

Review auth/secrets, isolation, spend controls, retries, backups, data deletion, observability, responsive accessibility, rate limits and deployment rollback. Pilot with a small user group.

### Rules for every milestone

- Make one milestone at a time. Stop and report at the end; do not start the next one automatically.
- Inspect the repo and Git diff before edits; never overwrite unrelated user work.
- Do not run live/billable model tests without explicit approval.
- Do not deploy, push or perform paid actions without approval.
- Never expose secrets or ask the user to paste secrets into chat.
- Run focused mocked tests, `npx tsc --noEmit`, lint and build when available; report actual results, not assumed outcomes.
- Keep dependencies minimal and explain why any new dependency is needed.
- If any requested behavior needs a backend/service not yet implemented, show a truthful “not connected/coming later” UI instead of fake functionality.
- When finished, report files changed, actual interactions, tests, demo-only items, limitations and the next smallest milestone.

---

## 15. Antigravity first task (copy this section into the agent)

**Goal: implement Phase 1 only.** Read the complete PRD and inspect the screenshot assets in `reference-screens/` before coding.

1. Inspect the scaffold, package.json, scripts, Git status and existing source files.
2. Implement reusable app shell, design tokens, sidebar/top bar and responsive navigation.
3. Implement the 15 pages described in Section 7 with high-fidelity layout/spacing and demo-only fixtures.
4. Match screenshot content hierarchy, panel positions, widths, table density, typography and active nav. Use images only for reference, never as a background.
5. Make all navigation and basic local interactions work. Use mock data for chat/agent/job/terminal/cost content and label it clearly.
6. No API calls, API key handling, DB/auth, live shell execution, cloud runner or deployment in this phase.
7. Test at desktop 1600×900 and at phone widths ~390×844 and tablet ~768px; check for overflow and unusable controls.
8. Run available non-billable tests/typecheck/lint/build, fix failures and report actual results.
9. Stop after Phase 1 and wait for review.

---

## 16. Reference screenshot index

All images are supplied under `reference-screens/` in the companion ZIP. These names map to the supplied screenshots:

1. `01-home-dashboard.png` — main dashboard, continue chat/terminal, recent conversations, agents, terminal activity.
2. `02-home-feature-directory.png` — saved prompts, all-feature card directory, monthly spend strip.
3. `03-chat-empty.png` — chat empty state and Chat Rescue/import entry points.
4. `04-models.png` — suggested model and model registry table.
5. `05-api-keys.png` — gateway curl/Python/CLI examples and key-mode tabs.
6. `06-mcp-tools.png` — MCP tool list.
7. `07-mcp-setup.png` — create key and copy MCP client configuration.
8. `08-agents.png` — agent creation hero, workforce pulse, marketplace.
9. `09-competitor-audit.png` — URL inputs and staged competitor-audit workflow.
10. `10-pipelines-overview.png` — pipeline templates and permission list.
11. `11-pipeline-launch.png` — launch inputs, budget and execution contract.
12. `12-terminal.png` — browser terminal, remote control and CLI sync activity.
13. `13-jobs.png` — jobs empty state.
14. `14-costs.png` — cost analytics empty state.
15. `15-usage-history.png` — work ledger, learning memory and saved prompts.

`contact-sheet.png` is for quick overview; inspect each full-sized image when building individual pages.

---

## 17. Notes on competitive and technical boundaries

- Reproduce the capabilities and public-facing interaction patterns as an independent implementation, not private source code or proprietary visual assets.
- The screenshots document the reference UI and advertised surface; they do not prove its internal behavior or security.
- Model capabilities, API pricing, provider limits, and external product features change. Verify vendor docs when implementing each integration and record the verification date.
- Do not promise that API budgets can absolutely cap final billing under all conditions; describe precisely which routed calls are controlled and how reservations/reconciliation work.
- Phone-based coding requires hosted execution infrastructure; browser responsiveness alone is insufficient.
- A BYOK gateway generally routes API calls; it does not combine or transfer a user's consumer ChatGPT/Claude/Gemini subscription quota.
- Fine-tuning is not needed for the MVP. Specialize behavior with prompts, shared context, tools and workflow control first.

**End of PRD.**
