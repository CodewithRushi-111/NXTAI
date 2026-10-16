export interface ModelItem {
  id: string;
  provider: string;
  name: string;
  tierClass: 'Flagship' | 'Cheap & fast' | 'Balanced';
  quality: number;
  inputPrice: string; // e.g. "$2.50"
  outputPrice: string; // e.g. "$10.00"
  speed: string; // e.g. "6/10"
  bestFor: string;
}

export interface AgentTemplate {
  id: string;
  name: string;
  category: 'General' | 'Freelancing' | 'Career';
  icon: string;
  description: string;
  costEstimate: string;
}

export interface PipelineStep {
  stepNumber: string;
  name: string;
  permissions: string;
  needsApproval?: boolean;
}

export interface PipelineItem {
  id: string;
  title: string;
  description: string;
  stepsCount: number;
  steps: PipelineStep[];
}

export interface McpToolItem {
  name: string;
  description: string;
}

export interface ApiKeyItem {
  id: string;
  name: string;
  prefix: string;
  type: 'platform' | 'byok';
  createdAt: string;
  lastUsed: string;
}
