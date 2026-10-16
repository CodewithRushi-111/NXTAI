'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, Check, Sparkles } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="space-y-8 pb-16 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Billing & Plans</h1>
        <p className="text-sm text-[#839BA8] mt-1.5">
          Manage workspace subscriptions, spending caps, and invoices.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
        Demo Notice: Billing integrations are coming in a later milestone. No payment method is required.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Plan */}
        <div className="p-6 bg-[#141D20] border-2 border-[#FF7417] rounded-2xl space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FF7417] font-bold">Current Plan</span>
              <h2 className="text-xl font-bold text-[#F0F4F5] mt-1">Free Developer</h2>
            </div>
            <span className="text-2xl font-bold text-[#F0F4F5]">$0</span>
          </div>

          <p className="text-xs text-[#839BA8]">
            For individual builders and local terminal development.
          </p>

          <ul className="space-y-2 text-xs text-[#839BA8] pt-2">
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Full access to BYOK (Bring Your Own Key)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Interactive OpenCode REPL & CLI Sync</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#00D26A]" />
              <span>Chat Rescue & Continue Packs</span>
            </li>
          </ul>
        </div>

        {/* Team Plan */}
        <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#839BA8] font-bold">Upcoming</span>
              <h2 className="text-xl font-bold text-[#F0F4F5] mt-1">Team Harness</h2>
            </div>
            <span className="text-2xl font-bold text-[#839BA8]">$29<span className="text-xs text-[#526673]">/mo</span></span>
          </div>

          <p className="text-xs text-[#839BA8]">
            Shared agent budgets, permission ceilings, and cloud dev execution.
          </p>

          <ul className="space-y-2 text-xs text-[#839BA8] pt-2">
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#839BA8]" />
              <span>Shared team ledger & budget caps</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#839BA8]" />
              <span>Phone-first cloud execution sandboxes</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-3.5 h-3.5 text-[#839BA8]" />
              <span>Multi-agent background pipelines</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
