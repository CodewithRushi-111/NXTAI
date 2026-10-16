import { describe, it, expect } from 'vitest';
import { DEMO_MODELS, DEMO_PIPELINES, DEMO_MCP_TOOLS, DEMO_AGENT_TEMPLATES } from '../demo-data';

describe('Phase 1 Baseline & Data Integrity Validation', () => {
  it('should verify all demo models have valid tiers and pricing metadata', () => {
    expect(DEMO_MODELS.length).toBeGreaterThanOrEqual(4);
    DEMO_MODELS.forEach((model) => {
      expect(model.id).toBeDefined();
      expect(model.provider).toBeDefined();
      expect(['Flagship', 'Cheap & fast', 'Balanced']).toContain(model.tierClass);
      expect(model.quality).toBeGreaterThan(0);
      expect(model.inputPrice).toMatch(/^\$\d+(\.\d+)?$/);
      expect(model.outputPrice).toMatch(/^\$\d+(\.\d+)?$/);
    });
  });

  it('should enforce pipeline permission ceilings: no step may hold write:*, admin:*, or execute:shell', () => {
    DEMO_PIPELINES.forEach((pipeline) => {
      pipeline.steps.forEach((step) => {
        expect(step.permissions).not.toContain('write:*');
        expect(step.permissions).not.toContain('admin:*');
        expect(step.permissions).not.toContain('execute:shell');
      });
    });
  });

  it('should verify MCP spend tools identifiers', () => {
    const toolNames = DEMO_MCP_TOOLS.map((t) => t.name);
    expect(toolNames).toContain('layerflow_get_budget');
    expect(toolNames).toContain('layerflow_set_monthly_budget');
    expect(toolNames).toContain('layerflow_get_spend_summary');
    expect(toolNames).toContain('layerflow_list_projects');
  });

  it('should verify agent templates have defined cost expectations and categories', () => {
    expect(DEMO_AGENT_TEMPLATES.length).toBeGreaterThanOrEqual(3);
    DEMO_AGENT_TEMPLATES.forEach((template) => {
      expect(template.name).toBeDefined();
      expect(template.description).toBeDefined();
      expect(template.costEstimate).toBeDefined();
      expect(['General', 'Freelancing', 'Career']).toContain(template.category);
    });
  });
});
