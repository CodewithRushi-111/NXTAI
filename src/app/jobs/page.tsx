'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Plus, Filter, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function JobsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6 pb-16">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Jobs</h1>
          <p className="text-sm text-[#839BA8] mt-1.5">
            Every job, one timeline. Track agent dispatches, batch pipelines, and execution runs.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href="/pipelines"
            className="px-3.5 py-1.5 rounded-lg bg-[#141D20] border border-[#243034] text-xs text-[#F0F4F5] hover:border-[#FF7417] transition-all flex items-center space-x-1.5"
          >
            <span>Run pipeline</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF7417]" />
          </Link>
        </div>
      </div>

      {/* Spacious Empty State Card (Screen 13) */}
      <div className="p-12 md:p-20 bg-[#141D20] border border-[#243034] rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[460px]">
        <div className="w-12 h-12 rounded-2xl bg-[#182226] border border-[#243034] flex items-center justify-center text-[#839BA8]">
          <Layers className="w-6 h-6 text-[#839BA8]" />
        </div>

        <div className="space-y-1.5 max-w-md">
          <h2 className="text-base font-bold text-[#F0F4F5]">No jobs yet</h2>
          <p className="text-xs text-[#839BA8] leading-relaxed">
            A job is created when you chat, run a command in the terminal, or dispatch an agent. Each one carries its own budget, participants and audit trail.
          </p>
        </div>

        <div className="pt-4 flex items-center space-x-3">
          <Link
            href="/chat"
            className="px-4 py-2 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full font-semibold text-xs transition-all shadow-sm"
          >
            Start a chat
          </Link>
          <Link
            href="/agents"
            className="px-4 py-2 bg-[#182226] hover:bg-[#1E2B30] border border-[#243034] text-[#F0F4F5] rounded-full text-xs transition-all"
          >
            Dispatch an agent
          </Link>
        </div>
      </div>
    </div>
  );
}
