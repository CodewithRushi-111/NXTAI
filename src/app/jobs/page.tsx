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
          <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Jobs</h1>
          <p className="text-sm text-[#94A3B8] mt-1.5">
            Every job, one timeline. Track agent dispatches, batch pipelines, and execution runs.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href="/pipelines"
            className="px-3.5 py-1.5 rounded-lg bg-[#111C2E] border border-[#263449] text-xs text-[#F1F5F9] hover:border-[#818CF8] transition-all flex items-center space-x-1.5"
          >
            <span>Run pipeline</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#818CF8]" />
          </Link>
        </div>
      </div>

      {/* Spacious Empty State Card (Screen 13) */}
      <div className="p-12 md:p-20 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[460px]">
        <div className="w-12 h-12 rounded-2xl bg-[#172338] border border-[#263449] flex items-center justify-center text-[#94A3B8]">
          <Layers className="w-6 h-6 text-[#818CF8]" />
        </div>

        <div className="space-y-1.5 max-w-md">
          <h2 className="text-base font-bold text-[#F1F5F9]">No jobs yet</h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            A job is created when you chat, run a command in the terminal, or dispatch an agent. Each one carries its own budget, participants and audit trail.
          </p>
        </div>

        <div className="pt-4 flex items-center space-x-3">
          <Link
            href="/chat"
            className="px-5 py-2.5 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-full font-semibold text-xs transition-all shadow-sm"
          >
            Start a chat
          </Link>
          <Link
            href="/agents"
            className="px-5 py-2.5 bg-[#172338] hover:bg-[#172338]/80 border border-[#263449] text-[#F1F5F9] rounded-full text-xs transition-all"
          >
            Dispatch an agent
          </Link>
        </div>
      </div>
    </div>
  );
}
