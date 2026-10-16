'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Cloud, ArrowRight } from 'lucide-react';

export default function WorkspacesPage() {
  return (
    <div className="space-y-6 pb-16 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Cloud Workspaces</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5">
          Phone-first cloud development environment: file editor, shell, tests, and preview without a laptop.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-xs text-[#FBBF24]">
        Product Extension Preview (Milestone 7): Cloud sandboxes with container isolation and mobile IDE controls.
      </div>

      <div className="p-12 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#172338] border border-[#263449] flex items-center justify-center text-[#818CF8]">
          <Smartphone className="w-6 h-6 text-[#818CF8]" />
        </div>
        <div className="space-y-1.5 max-w-md">
          <h2 className="text-base font-bold text-[#F1F5F9]">Mobile Cloud Dev Runtime</h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Create and edit code from your phone with live preview, git diffs, and verified deployment pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
