'use client';

import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Briefcase,
  AlertTriangle,
  Plus,
  ChevronRight,
  Shield,
  X,
  CheckCircle,
} from 'lucide-react';
import { DEMO_AGENT_TEMPLATES } from '@/lib/demo-data';
import { AgentTemplate } from '@/lib/types';

export default function AgentsPage() {
  const [taskInput, setTaskInput] = useState(
    'I need help finding freelance clients and drafting client proposals.'
  );
  const [selectedTemplate, setSelectedTemplate] = useState<AgentTemplate | null>(null);
  const [createdAgent, setCreatedAgent] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!taskInput.trim()) return;
    setCreatedAgent(`Custom Agent: "${taskInput.slice(0, 36)}..."`);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Region (Split Left/Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Hero Card (8 cols) */}
        <div className="lg:col-span-8 p-6 md:p-8 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#172338] border border-[#263449] text-[11px] font-medium text-[#94A3B8]">
                Agents V2
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[11px] font-medium text-[#34D399] flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span>Approval-gated automation</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] tracking-tight leading-tight">
              Hire a digital worker and let it keep moving in the background.
            </h1>

            <p className="text-xs text-[#94A3B8] max-w-xl leading-relaxed">
              Create agents that collect context, remember preferences, report progress, and stop for permission before sensitive actions.
            </p>
          </div>

          {/* Prompt / Task Goal Textarea */}
          <div className="space-y-3">
            <div className="relative">
              <textarea
                rows={4}
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Describe what the agent should accomplish..."
                className="w-full bg-[#172338] border border-[#263449] rounded-xl p-4 text-xs text-[#F1F5F9] placeholder-[#64748B] focus:outline-none focus:border-[#818CF8] leading-relaxed resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div className="text-[11px] text-[#64748B] flex flex-wrap items-center gap-1">
                <span>Try:</span>
                <button
                  type="button"
                  onClick={() => setTaskInput('Find me freelance writing gigs')}
                  className="text-[#94A3B8] hover:text-[#818CF8] underline decoration-dotted"
                >
                  &ldquo;Find me freelance writing gigs&rdquo;
                </button>
                <span>or</span>
                <button
                  type="button"
                  onClick={() => setTaskInput('Compare smart-home products')}
                  className="text-[#94A3B8] hover:text-[#818CF8] underline decoration-dotted"
                >
                  &ldquo;Compare smart-home products&rdquo;
                </button>
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                className="px-5 py-2.5 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-full text-xs font-semibold transition-all shadow-sm flex items-center justify-center space-x-2 flex-shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0B1220]" />
                <span>Generate onboarding</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Hero Card (4 cols) — Workforce Pulse */}
        <div className="lg:col-span-4 p-6 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
              Workforce Pulse
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#172338] border border-[#263449]">
                <div className="text-2xl font-bold text-[#F1F5F9]">0</div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5">Agents</div>
              </div>

              <div className="p-4 rounded-xl bg-[#172338] border border-[#263449]">
                <div className="text-2xl font-bold text-[#F1F5F9]">0</div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5">Pending approvals</div>
              </div>

              <div className="p-4 rounded-xl bg-[#172338] border border-[#263449]">
                <div className="text-2xl font-bold text-[#F1F5F9]">0</div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5">Collected</div>
              </div>

              <div className="p-4 rounded-xl bg-[#172338] border border-[#263449]">
                <div className="text-2xl font-bold text-[#F1F5F9]">0</div>
                <div className="text-[11px] text-[#94A3B8] mt-0.5">Queued</div>
              </div>
            </div>
          </div>

          {/* Amber Alert Card */}
          <div className="p-4 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 space-y-1.5">
            <div className="text-xs font-semibold text-[#FBBF24] flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>No silent submissions</span>
            </div>
            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              Applications, uploads, recruiter messages, and emails become approval cards before the worker continues.
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation feedback when onboarding simulated */}
      {createdAgent && (
        <div className="p-4 bg-[#111C2E] border border-[#34D399]/40 rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-[#34D399]">
            <CheckCircle className="w-4 h-4" />
            <span className="font-semibold">{createdAgent} initialized in demo workspace.</span>
          </div>
          <button
            onClick={() => setCreatedAgent(null)}
            className="text-xs text-[#94A3B8] hover:text-white"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Agent Marketplace Section */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-[#F1F5F9]">Agent marketplace</h2>
            <p className="text-xs text-[#94A3B8]">
              Reusable workers with permissions, cost expectations, and outcomes built in. Anyone can build their own agent — teachers, students, freelancers, and more.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCreatedAgent('New Blank Agent Definition (Local Demo)')}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#172338] border border-[#263449] text-xs text-[#F1F5F9] hover:border-[#818CF8] transition-all flex-shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Blank agent</span>
          </button>
        </div>

        {/* Templates Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEMO_AGENT_TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.id}
              className="p-5 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#33455E] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#172338] border border-[#263449] flex items-center justify-center text-[#818CF8] group-hover:border-[#818CF8]/40 transition-colors">
                    {tmpl.icon === 'sparkles' ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#172338] text-[#94A3B8] border border-[#263449] text-[10px] font-medium">
                    {tmpl.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#F1F5F9] group-hover:text-[#818CF8] transition-colors">
                    {tmpl.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                    {tmpl.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#263449] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#64748B] font-mono">{tmpl.costEstimate}</span>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate(tmpl)}
                  className="text-xs font-semibold text-[#818CF8] hover:underline flex items-center space-x-1"
                >
                  <span>Use template</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Template Detail Drawer / Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedTemplate(null)}
          />
          <div className="relative w-full max-w-lg bg-[#111C2E] border border-[#263449] rounded-2xl shadow-2xl p-6 z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#263449]">
              <div className="flex items-center space-x-2.5">
                <Bot className="w-5 h-5 text-[#818CF8]" />
                <h3 className="text-sm font-bold text-[#F1F5F9]">{selectedTemplate.name}</h3>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#94A3B8]">{selectedTemplate.description}</p>

            <div className="space-y-2 text-xs bg-[#172338] p-4 rounded-xl border border-[#263449]">
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Category:</span>
                <span className="text-[#F1F5F9] font-medium">{selectedTemplate.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Estimated Spend:</span>
                <span className="text-[#818CF8] font-mono">{selectedTemplate.costEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Approval Policy:</span>
                <span className="text-[#34D399] font-medium">Requires human approval</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94A3B8]">Execution Mode:</span>
                <span className="text-[#94A3B8] font-mono">Demo simulation only</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setCreatedAgent(`Activated template: ${selectedTemplate.name}`);
                  setSelectedTemplate(null);
                }}
                className="px-5 py-2 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-lg font-semibold text-xs transition-all"
              >
                Clone into My Agents
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
