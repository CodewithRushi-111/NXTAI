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
          <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Cost Analytics</h1>
          <p className="text-sm text-[#839BA8] mt-1.5">
            Every dollar you spend with AI — and every dollar NXT AI saves you.
          </p>
        </div>

        <button
          onClick={() => setShowDemoPreview(!showDemoPreview)}
          className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#141D20] border border-[#243034] text-xs text-[#839BA8] hover:text-[#F0F4F5] transition-all"
        >
          {showDemoPreview ? 'Hide Demo Forecast' : 'Preview Demo Forecast'}
        </button>
      </div>

      {!showDemoPreview ? (
        /* Faithful Screen 14 Empty State */
        <div className="p-12 md:p-20 bg-[#141D20] border border-[#243034] rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[460px]">
          <div className="w-12 h-12 rounded-2xl bg-[#182226] border border-[#243034] flex items-center justify-center text-[#839BA8]">
            <CreditCard className="w-6 h-6 text-[#839BA8]" />
          </div>

          <div className="space-y-1.5 max-w-md">
            <h2 className="text-base font-bold text-[#F0F4F5]">No spend yet</h2>
            <p className="text-xs text-[#839BA8] leading-relaxed">
              Start chatting with any AI model and your cost breakdown will appear here — per model, per provider, with savings tracking.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/chat"
              className="px-5 py-2.5 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full font-semibold text-xs transition-all shadow-sm inline-block"
            >
              Start chatting
            </Link>
          </div>
        </div>
      ) : (
        /* Demo Analytics Preview */
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between">
            <span>Illustrative spend preview (No live billing connected in Phase 1).</span>
            <button
              onClick={() => setShowDemoPreview(false)}
              className="underline text-amber-200"
            >
              Reset to Empty State
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl">
              <div className="text-xs text-[#839BA8]">Month-to-date Spend</div>
              <div className="text-2xl font-bold text-[#FF7417] mt-1">$0.00</div>
              <div className="text-[11px] text-[#526673] mt-1">Cap: $50.00 / mo</div>
            </div>

            <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl">
              <div className="text-xs text-[#839BA8]">Optimization Savings</div>
              <div className="text-2xl font-bold text-[#00D26A] mt-1">$14.20</div>
              <div className="text-[11px] text-[#526673] mt-1">Via intelligent routing</div>
            </div>

            <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl">
              <div className="text-xs text-[#839BA8]">Token Consumption</div>
              <div className="text-2xl font-bold text-[#F0F4F5] mt-1">0 tok</div>
              <div className="text-[11px] text-[#526673] mt-1">Across all models</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
