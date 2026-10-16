'use client';

import React, { useState } from 'react';
import { GitBranch, Play, ShieldAlert, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { DEMO_PIPELINES } from '@/lib/demo-data';

export default function PipelinesPage() {
  const [selectedPipelineId, setSelectedPipelineId] = useState('competitor-seo');
  const [targetSite, setTargetSite] = useState(
    'https://yoursite.com (optional — used as the site under analysis)'
  );
  const [budget, setBudget] = useState('2.00');
  const [objective, setObjective] = useState('Analyse the site and report the measured gaps');
  const [isLaunching, setIsLaunching] = useState(false);
  const [timelineStatus, setTimelineStatus] = useState<string | null>(null);

  const selectedPipeline =
    DEMO_PIPELINES.find((p) => p.id === selectedPipelineId) || DEMO_PIPELINES[0];

  const handleLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLaunching(true);
    setTimelineStatus('Initializing pipeline in Demo Mode...');
    setTimeout(() => {
      setIsLaunching(false);
      setTimelineStatus(
        'Step 01 [seo_analyst] completed (simulated) · Step 02 [researcher] queued · Step 03 [content_writer] awaiting human approval'
      );
    }, 1000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Pipelines</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5 max-w-3xl leading-relaxed">
          A pipeline is a set of agents with a dependency order, a shared budget, and a permission ceiling. One runs it; you watch it on a single timeline.
        </p>
      </div>

      {/* Pipeline Cards Grid (Screen 10) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {DEMO_PIPELINES.map((pipeline) => {
          const isSelected = pipeline.id === selectedPipelineId;
          return (
            <div
              key={pipeline.id}
              onClick={() => setSelectedPipelineId(pipeline.id)}
              className={`p-6 bg-[#111C2E] rounded-2xl cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border border-[#818CF8]'
                  : 'border border-[#263449] hover:border-[#33455E]'
              }`}
            >
              <div className="space-y-2">
                <h2 className="text-base font-bold text-[#F1F5F9]">{pipeline.title}</h2>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {pipeline.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-[#818CF8]">
                {pipeline.stepsCount} {pipeline.stepsCount === 1 ? 'step' : 'steps'}
              </div>
            </div>
          );
        })}
      </div>

      {/* What Each Step May Do Panel */}
      <div className="p-6 md:p-8 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#818CF8]" />
            <h2 className="text-sm font-semibold text-[#F1F5F9]">What each step may do</h2>
          </div>
          <p className="text-xs text-[#94A3B8] mt-1">
            These are the actual permissions the run is capped at. A step can only ever narrow them, never widen them.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-3">
          {selectedPipeline.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-4 bg-[#172338] border border-[#263449] rounded-xl space-y-1.5"
            >
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold text-[#94A3B8]">{step.stepNumber}</span>
                <span className="font-mono text-xs font-semibold text-[#F1F5F9]">{step.name}</span>
                {step.needsApproval && (
                  <span className="px-2 py-0.5 rounded-full bg-[#FBBF24]/15 text-[#FBBF24] border border-[#FBBF24]/30 text-[10px] font-medium">
                    needs your approval
                  </span>
                )}
              </div>
              <div className="font-mono text-[11px] text-[#64748B] pl-7">
                {step.permissions}
              </div>
            </div>
          ))}
        </div>

        {/* Permission Ceiling Disclaimer */}
        <div className="pt-2 text-xs text-[#94A3B8]">
          No step in this pipeline holds <code className="text-[#F1F5F9] font-mono">write:*</code>,{' '}
          <code className="text-[#F1F5F9] font-mono">admin:*</code> or{' '}
          <code className="text-[#F1F5F9] font-mono">execute:shell</code>.
        </div>
      </div>

      {/* Screen 11: Launch It Card */}
      <div className="p-6 md:p-8 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-6">
        <h2 className="text-sm font-semibold text-[#F1F5F9]">Launch it</h2>

        <form onSubmit={handleLaunch} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-9">
              <label className="text-xs text-[#94A3B8] block mb-1.5 font-medium">
                What should it work on?
              </label>
              <input
                type="text"
                value={targetSite}
                onChange={(e) => setTargetSite(e.target.value)}
                className="w-full bg-[#172338] border border-[#263449] rounded-xl px-4 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
              />
            </div>

            <div className="lg:col-span-3">
              <label className="text-xs text-[#94A3B8] block mb-1.5 font-medium">
                Budget (USD)
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#172338] border border-[#263449] rounded-xl px-4 py-2.5 text-xs text-[#F1F5F9] font-mono focus:outline-none focus:border-[#818CF8]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-[#94A3B8] block mb-1.5 font-medium">Objective</label>
            <input
              type="text"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="w-full bg-[#172338] border border-[#263449] rounded-xl px-4 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isLaunching}
              className="px-6 py-2.5 bg-[#818CF8] hover:bg-[#6366F1] text-[#0B1220] font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 flex-shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-[#0B1220]" />
              <span>{isLaunching ? 'Starting run...' : 'Launch pipeline'}</span>
            </button>
            <span className="text-xs text-[#94A3B8]">
              Runs real model calls, capped at the budget above. (Simulated in Phase 1 demo)
            </span>
          </div>
        </form>

        {/* Timeline Status */}
        {timelineStatus && (
          <div className="p-4 rounded-xl bg-[#172338] border border-[#818CF8]/40 space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-[#818CF8] font-semibold">
              <Clock className="w-4 h-4" />
              <span>Execution Timeline (Demo State)</span>
            </div>
            <p className="text-[#F1F5F9] font-mono leading-relaxed">{timelineStatus}</p>
          </div>
        )}
      </div>

      {/* Screen 11 Lower: What Actually Happens When One Runs */}
      <div className="p-6 md:p-8 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-4">
        <h2 className="text-sm font-semibold text-[#F1F5F9]">What actually happens when one runs</h2>

        <div className="space-y-3 text-xs text-[#94A3B8] leading-relaxed">
          <p>
            Each step reads what the ones before it wrote. Nobody re-derives the same context, which is most of what makes multi-agent cheaper than one big prompt.
          </p>
          <p>
            Every model call is authorised at the moment of use against that step&apos;s permissions — not when they were assigned.
          </p>
          <p>
            All steps share one budget. A step that would exceed it is refused before it runs, not after it bills.
          </p>
          <p>
            A step marked &ldquo;needs your approval&rdquo; stops the whole pipeline until you answer. The next step does not run in the meantime.
          </p>
        </div>
      </div>
    </div>
  );
}
