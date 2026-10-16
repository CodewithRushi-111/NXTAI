'use client';

import React from 'react';
import { Building2, Users, ShieldCheck } from 'lucide-react';

export default function OrganizationPage() {
  return (
    <div className="space-y-6 pb-16 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Organization Harness</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5">
          Company agent governance, tenant isolation, approved tool connections, and shared budget policies.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-xs text-[#FBBF24]">
        Product Extension Preview (Milestone 8): Organization and tenant boundaries, role-based access, and enterprise audit trails.
      </div>

      <div className="p-12 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#172338] border border-[#263449] flex items-center justify-center text-[#818CF8]">
          <Building2 className="w-6 h-6 text-[#818CF8]" />
        </div>
        <div className="space-y-1.5 max-w-md">
          <h2 className="text-base font-bold text-[#F1F5F9]">Company Governance & Isolation</h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Multi-tenant security, member roles, approved integrations, and organization spend ceilings.
          </p>
        </div>
      </div>
    </div>
  );
}
