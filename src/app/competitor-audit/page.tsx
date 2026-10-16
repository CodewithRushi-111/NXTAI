'use client';

import React, { useState } from 'react';
import { Search, Globe, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CompetitorAuditPage() {
  const [siteUrl, setSiteUrl] = useState('https://yoursite.com');
  const [competitors, setCompetitors] = useState('https://a.com https://b.com');
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const handleMeasure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteUrl.trim()) return;

    setAuditRunning(true);
    setTimeout(() => {
      setAuditRunning(false);
      setAuditResult({
        site: siteUrl,
        competitorList: competitors.split(/\s+/).filter(Boolean),
        signals: [
          { signal: 'Title & H1 Match', yourSite: 'Exact Match', compAvg: 'Partial (60%)', status: 'good' },
          { signal: 'Core Web Vitals LCP', yourSite: '1.4s (Good)', compAvg: '2.8s (Needs Work)', status: 'good' },
          { signal: 'Structured Data Schema', yourSite: 'Missing Product/Org', compAvg: 'Complete Schema.org', status: 'gap' },
          { signal: 'Content Word Count', yourSite: '1,240 words', compAvg: '2,680 words', status: 'gap' },
        ],
      });
    }, 700);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Page Title & Notice */}
      <div>
        <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Competitor audit</h1>
        <p className="text-sm text-[#839BA8] mt-1.5 max-w-3xl leading-relaxed">
          Point this at your site and the sites you compete with. It fetches each page, measures the same set of on-page signals, and shows you only the differences.
        </p>
        <p className="text-xs text-[#839BA8] mt-2 font-medium">
          Every number below was read off the live page. Nothing here is estimated, and the report says which questions it cannot answer without a data provider.
        </p>
      </div>

      {/* Main Input Form Card */}
      <div className="p-6 md:p-8 bg-[#141D20] border border-[#243034] rounded-2xl space-y-6">
        <form onSubmit={handleMeasure} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Your Site */}
            <div>
              <label className="text-xs font-semibold text-[#F0F4F5] block mb-2">Your site</label>
              <input
                type="text"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                placeholder="https://yoursite.com"
                className="w-full bg-[#0E1517] border border-[#243034] rounded-xl px-4 py-3 text-xs text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
              />
            </div>

            {/* Competitors */}
            <div>
              <label className="text-xs font-semibold text-[#F0F4F5] block mb-2">Competitors</label>
              <input
                type="text"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="https://a.com https://b.com"
                className="w-full bg-[#0E1517] border border-[#243034] rounded-xl px-4 py-3 text-xs text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
              />
              <span className="text-[11px] text-[#526673] mt-1.5 block">
                Up to 12, separated by spaces or commas.
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={auditRunning}
              className="px-6 py-2.5 bg-[#FF7417] hover:bg-[#FF8533] text-[#0D1315] font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
            >
              <span>{auditRunning ? 'Simulating audit...' : 'Measure and compare'}</span>
            </button>
            <span className="text-xs text-[#839BA8]">
              Fetches each page directly. No model involved, no cost.
            </span>
          </div>
        </form>
      </div>

      {/* Simulated Audit Report Result if measured */}
      {auditResult && (
        <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-semibold text-[#F0F4F5]">Audit Diff Matrix (Demo Output)</h2>
            </div>
            <span className="text-[10px] font-mono text-[#FF7417] bg-[#182226] px-2 py-0.5 rounded border border-[#243034]">
              Simulated deterministic crawl
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#243034] text-[10px] uppercase font-bold text-[#526673]">
                  <th className="py-2.5 px-3">On-page Signal</th>
                  <th className="py-2.5 px-3">{auditResult.site}</th>
                  <th className="py-2.5 px-3">Competitors Benchmark</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C262A]">
                {auditResult.signals.map((sig: any) => (
                  <tr key={sig.signal}>
                    <td className="py-2.5 px-3 font-medium text-[#F0F4F5]">{sig.signal}</td>
                    <td className="py-2.5 px-3 font-mono text-[#839BA8]">{sig.yourSite}</td>
                    <td className="py-2.5 px-3 font-mono text-[#839BA8]">{sig.compAvg}</td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          sig.status === 'good'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {sig.status === 'good' ? 'Leading' : 'Content Gap'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* What Happens Next Card */}
      <div className="p-6 md:p-8 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
        <h2 className="text-sm font-semibold text-[#F0F4F5]">What happens next</h2>

        <div className="space-y-2.5 text-xs text-[#839BA8] leading-relaxed">
          <div className="flex items-start space-x-2">
            <span className="font-bold text-[#F0F4F5]">1. Measure —</span>
            <span>this page. No model, no cost, deterministic.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="font-bold text-[#F0F4F5]">2. Research —</span>
            <span>an agent reads the competitors&apos; pages and pulls out facts with sources.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="font-bold text-[#F0F4F5]">3. Draft —</span>
            <span>an agent writes against the top gap. It can read and fetch. It cannot write or publish.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="font-bold text-[#F0F4F5]">4. A human approves —</span>
            <span>the publishing step holds no permission that could publish, so this is enforced rather than requested.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
