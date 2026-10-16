import { ModelItem, AgentTemplate, PipelineItem, McpToolItem } from './types';

export const DEMO_MODELS: ModelItem[] = [
  {
    id: 'gpt-4o',
    provider: 'OpenAI',
    name: 'GPT-4o',
    tierClass: 'Flagship',
    quality: 96,
    inputPrice: '$2.50',
    outputPrice: '$10.00',
    speed: '6/10',
    bestFor: 'General-purpose reasoning with tools and vision',
  },
  {
    id: 'gpt-4o-mini',
    provider: 'OpenAI',
    name: 'GPT-4o mini',
    tierClass: 'Cheap & fast',
    quality: 84,
    inputPrice: '$0.15',
    outputPrice: '$0.60',
    speed: '9/10',
    bestFor: 'High-volume everyday tasks at low cost',
  },
  {
    id: 'gpt-4.1',
    provider: 'OpenAI',
    name: 'GPT-4.1',
    tierClass: 'Flagship',
    quality: 96,
    inputPrice: '$2.00',
    outputPrice: '$8.00',
    speed: '6/10',
    bestFor: 'Long-context coding and agentic work',
  },
  {
    id: 'gpt-4.1-mini',
    provider: 'OpenAI',
    name: 'GPT-4.1 mini',
    tierClass: 'Balanced',
    quality: 90,
    inputPrice: '$0.40',
    outputPrice: '$1.60',
    speed: '8/10',
    bestFor: 'Cheap long-context coding',
  },
  {
    id: 'claude-3-5-sonnet',
    provider: 'Anthropic',
    name: 'Claude 3.5 Sonnet',
    tierClass: 'Flagship',
    quality: 98,
    inputPrice: '$3.00',
    outputPrice: '$15.00',
    speed: '7/10',
    bestFor: 'Complex code generation and high-precision reasoning',
  },
  {
    id: 'gemini-1-5-pro',
    provider: 'Google',
    name: 'Gemini 1.5 Pro',
    tierClass: 'Flagship',
    quality: 94,
    inputPrice: '$1.25',
    outputPrice: '$5.00',
    speed: '7/10',
    bestFor: 'Massive 2M context and multimodal document understanding',
  },
];

export const DEMO_MCP_TOOLS: McpToolItem[] = [
  {
    name: 'layerflow_get_budget',
    description: 'Current monthly budget, spend, and % used in USD.',
  },
  {
    name: 'layerflow_set_monthly_budget',
    description: 'Raise or lower the monthly cap and hard-block behavior.',
  },
  {
    name: 'layerflow_get_spend_summary',
    description: 'Request/token/cost totals over any window, grouped as needed.',
  },
  {
    name: 'layerflow_list_projects',
    description: 'List workspace projects to scope spend queries.',
  },
];

export const DEMO_AGENT_TEMPLATES: AgentTemplate[] = [
  {
    id: 'common-assistant',
    name: 'Common Assistant',
    category: 'General',
    icon: 'sparkles',
    description: 'The everyday helper — research, drafting, summaries, and quick tasks for anyone. Start here.',
    costEstimate: '~$0.50 per task',
  },
  {
    id: 'freelance-prospector',
    name: 'Freelance Prospector',
    category: 'Freelancing',
    icon: 'briefcase',
    description: 'Finds freelance gigs and clients, drafts tailored proposals, and tracks follow-ups — built for freelancing, not job boards.',
    costEstimate: '$2-$8 per active week',
  },
  {
    id: 'job-finder',
    name: 'Job Finder',
    category: 'Career',
    icon: 'briefcase',
    description: 'Searches job listings, scores fit against your resume, and prepares applications that always wait for your approval.',
    costEstimate: '$3-$12 per active search week',
  },
];

export const DEMO_PIPELINES: PipelineItem[] = [
  {
    id: 'competitor-seo',
    title: 'Competitor SEO report → content draft',
    description: 'Measures your site against named competitors, researches the gaps, drafts content to close them, and stops for a human to approve. The gap report a business owner would otherwise spend a week producing, plus a draft that closes the top gap.',
    stepsCount: 4,
    steps: [
      {
        stepNumber: '01',
        name: 'seo_analyst',
        permissions: 'execute:audit_page · execute:compare_sites · execute:fetch_url · read:files',
      },
      {
        stepNumber: '02',
        name: 'researcher',
        permissions: 'execute:fetch_url',
      },
      {
        stepNumber: '03',
        name: 'content_writer',
        permissions: 'execute:fetch_url · read:files',
        needsApproval: true,
      },
      {
        stepNumber: '04',
        name: 'approver',
        permissions: 'no tools at all',
      },
    ],
  },
  {
    id: 'single-site-audit',
    title: 'Single-site on-page audit',
    description: 'Measures one site end to end and returns a prioritised on-page findings list. No content produced. A full on-page audit of any site, with every number traceable to the page it came from.',
    stepsCount: 1,
    steps: [
      {
        stepNumber: '01',
        name: 'site_auditor',
        permissions: 'execute:audit_page · execute:fetch_url',
      },
    ],
  },
];
