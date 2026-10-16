'use client';

import React, { useState } from 'react';
import { Cpu, Zap, Sparkles, HelpCircle, Check, Info } from 'lucide-react';
import { DEMO_MODELS } from '@/lib/demo-data';

export default function ModelsPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredModels = DEMO_MODELS.filter((m) => {
    if (filter === 'all') return true;
    return m.tierClass.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Models</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5">
          Every model NXT AI can route your work to — with costs, and your BYOK keys.
        </p>
      </div>

      {/* Best Model Suggestion Panel */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-xl space-y-5 relative">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">Best Model Suggestion</h2>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Recommended by your routing rules and workspace settings
            </p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#818CF8]/10 border border-[#818CF8]/30 flex items-center justify-center text-[#818CF8]">
            <Cpu className="w-4 h-4" />
          </div>
        </div>

        {/* Suggestion Card Content */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#172338] border border-[#263449]">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#818CF8] flex items-center justify-center text-[#0B1220] font-bold text-base">
              G
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base text-[#F1F5F9]">GPT-4o mini</span>
                <span className="px-2 py-0.5 rounded-full bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 text-[11px] font-medium flex items-center space-x-1">
                  <span>🏆</span>
                  <span>recommended</span>
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] mt-1">
                For your most common task type: summarization + continuation
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <div className="font-mono text-xs text-[#F1F5F9] font-medium">gpt-4o-mini</div>
            <div className="text-[11px] text-[#64748B]">model id</div>
          </div>
        </div>

        {/* Why Box */}
        <div className="p-3 bg-[#0F172A] border border-[#263449] rounded-lg text-xs text-[#94A3B8]">
          <span className="font-semibold text-[#F1F5F9]">Why:</span>{' '}
          <span className="text-[#94A3B8]">Heuristic:</span> Cheapest good-enough for summarization / low-latency responses based on recent prompts.
        </div>
      </div>

      {/* Model Registry Table */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">Model registry</h2>
            <p className="text-xs text-[#94A3B8]">Price sheet used by Cost Check</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="px-2.5 py-1 rounded-full bg-[#172338] border border-[#263449] text-[10px] text-[#818CF8] font-medium">
              Demo Price Sheet · Oct 2026
            </div>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#263449] text-[10px] uppercase font-bold text-[#64748B] tracking-wider">
                <th className="py-3 px-3">Model</th>
                <th className="py-3 px-3">Class</th>
                <th className="py-3 px-3">Quality</th>
                <th className="py-3 px-3">In / 1M</th>
                <th className="py-3 px-3">Out / 1M</th>
                <th className="py-3 px-3">Speed</th>
                <th className="py-3 px-3">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#263449]">
              {filteredModels.map((m) => {
                const badgeStyle =
                  m.tierClass === 'Flagship'
                    ? 'bg-[#818CF8]/15 text-[#818CF8] border-[#818CF8]/30'
                    : m.tierClass === 'Cheap & fast'
                    ? 'bg-[#34D399]/15 text-[#34D399] border-[#34D399]/30'
                    : 'bg-[#FBBF24]/15 text-[#FBBF24] border-[#FBBF24]/30';

                return (
                  <tr key={m.id} className="hover:bg-[#172338]/50 transition-colors">
                    <td className="py-3 px-3">
                      <div className="font-semibold text-[#F1F5F9]">{m.name}</div>
                      <div className="text-[11px] text-[#64748B]">{m.provider}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-medium whitespace-nowrap ${badgeStyle}`}>
                        {m.tierClass}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[#F1F5F9]">{m.quality}</td>
                    <td className="py-3 px-3 font-mono text-[#94A3B8]">{m.inputPrice}</td>
                    <td className="py-3 px-3 font-mono text-[#94A3B8]">{m.outputPrice}</td>
                    <td className="py-3 px-3">
                      <span className="flex items-center space-x-1 text-[#38BDF8] font-mono">
                        <Zap className="w-3 h-3 flex-shrink-0" />
                        <span>{m.speed}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 text-[#94A3B8] max-w-xs">{m.bestFor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="pt-2 text-[11px] text-[#64748B] flex items-center space-x-1.5">
          <Info className="w-3.5 h-3.5" />
          <span>Quality scores are heuristic estimates for demonstration only. Real costs reconcile with provider ledgers upon execution.</span>
        </div>
      </div>
    </div>
  );
}
