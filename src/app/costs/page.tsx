'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CreditCard, Sparkles, TrendingUp, AlertCircle, BarChart2 } from 'lucide-react';

export default function CostsPage() {
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  return (
    <div className="space-y-6 pb-16">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Cost Analytics</h1>
          <p className="text-sm text-[#94A3B8] mt-1.5">
            Every dollar you spend with AI — and every dollar NXT AI saves you.
          </p>
        </div>

        <button
          onClick={() => setShowDemoPreview(!showDemoPreview)}
          className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-[#111C2E] border border-[#263449] text-xs text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#818CF8] transition-all"
        >
          {showDemoPreview ? 'Hide Demo Forecast' : 'Preview Demo Forecast'}
        </button>
      </div>

      {!showDemoPreview ? (
        /* Faithful Screen 14 Empty State */
        <div className="p-12 md:p-20 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[460px]">
          <div className="w-12 h-12 rounded-2xl bg-[#172338] border border-[#263449] flex items-center justify-center text-[#94A3B8]">
            <CreditCard className="w-6 h-6 text-[#818CF8]" />
          </div>

          <div className="space-y-1.5 max-w-md">
            <h2 className="text-base font-bold text-[#F1F5F9]">No spend yet</h2>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Start chatting with any AI model and your cost breakdown will appear here — per model, per provider, with savings tracking.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/chat"
              className="px-5 py-2.5 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-full font-semibold text-xs transition-all shadow-sm inline-block"
            >
              Start chatting
            </Link>
          </div>
        </div>
      ) : (
        /* Demo Analytics Preview */
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-xs text-[#FBBF24] flex items-center justify-between">
            <span>Illustrative spend preview (No live billing connected in Phase 1).</span>
            <button
              onClick={() => setShowDemoPreview(false)}
              className="underline text-[#FBBF24]/90 hover:text-white"
            >
              Reset to Empty State
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#111C2E] border border-[#263449] rounded-xl">
              <div className="text-xs text-[#94A3B8]">Month-to-date Spend</div>
              <div className="text-2xl font-bold text-[#818CF8] mt-1">$0.00</div>
              <div className="text-[11px] text-[#64748B] mt-1">Cap: $50.00 / mo</div>
            </div>

            <div className="p-5 bg-[#111C2E] border border-[#263449] rounded-xl">
              <div className="text-xs text-[#94A3B8]">Optimization Savings</div>
              <div className="text-2xl font-bold text-[#34D399] mt-1">$14.20</div>
              <div className="text-[11px] text-[#64748B] mt-1">Via intelligent routing</div>
            </div>

            <div className="p-5 bg-[#111C2E] border border-[#263449] rounded-xl">
              <div className="text-xs text-[#94A3B8]">Token Consumption</div>
              <div className="text-2xl font-bold text-[#F1F5F9] mt-1">0 tok</div>
              <div className="text-[11px] text-[#64748B] mt-1">Across all models</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
