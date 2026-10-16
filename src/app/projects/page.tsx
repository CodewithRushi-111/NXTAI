'use client';

import React from 'react';
import Link from 'next/link';
import { FolderGit2, Plus, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="space-y-6 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Projects</h1>
          <p className="text-sm text-[#839BA8] mt-1.5">
            Project instructions, decisions, files, and Continue Packs.
          </p>
        </div>
        <button
          onClick={() => alert('Project creation activates in Milestone 2 (Local persistence & Continue Packs)')}
          className="px-4 py-2 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full font-semibold text-xs transition-all shadow-sm flex items-center space-x-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Project</span>
        </button>
      </div>

      <div className="p-12 bg-[#141D20] border border-[#243034] rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[360px]">
        <div className="w-12 h-12 rounded-2xl bg-[#182226] border border-[#243034] flex items-center justify-center text-[#839BA8]">
          <FolderGit2 className="w-6 h-6 text-[#839BA8]" />
        </div>
        <div className="space-y-1.5 max-w-md">
          <h2 className="text-base font-bold text-[#F0F4F5]">No projects created yet</h2>
          <p className="text-xs text-[#839BA8] leading-relaxed">
            Organize chats, prompts, models, and agent tasks under dedicated project scopes with shared memory.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/chat"
            className="text-xs font-semibold text-[#FF7417] hover:underline"
          >
            Start in general workspace →
          </Link>
        </div>
      </div>
    </div>
  );
}
