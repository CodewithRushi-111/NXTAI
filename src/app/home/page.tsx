'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Terminal,
  Layers,
  Bot,
  Search,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  Cpu,
  Key,
  Zap,
  GitBranch,
  BarChart3,
  History,
  CreditCard,
  Settings,
  LayoutDashboard,
} from 'lucide-react';

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const installCmd = 'curl -fsSL https://nxtai.dev/install | bash';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const featureCards = [
    { title: 'Home', desc: 'Your work hub', href: '/home', icon: LayoutDashboard },
    { title: 'Chat', desc: 'One thread, any model', href: '/chat', icon: MessageSquare },
    { title: 'Models', desc: 'Gateway models + BYOK', href: '/models', icon: Cpu },
    { title: 'Keys', desc: 'Gateway keys + provider keys', href: '/keys', icon: Key },
    { title: 'MCP', desc: 'Spend tools for agents', href: '/integrations/mcp', icon: Zap },
    { title: 'Agents', desc: 'Hire a digital worker', href: '/agents', icon: Bot },
    { title: 'Competitor audit', desc: 'Measured SEO gap report', href: '/competitor-audit', icon: Search },
    { title: 'Pipelines', desc: 'Run an agent pipeline', href: '/pipelines', icon: GitBranch },
    { title: 'Terminal', desc: 'AI terminal + remote commands', href: '/terminal', icon: Terminal },
    { title: 'Jobs', desc: 'Every job, one timeline', href: '/jobs', icon: Layers },
    { title: 'Costs', desc: 'Spend, budgets and alerts', href: '/costs', icon: BarChart3 },
    { title: 'Usage History', desc: 'Request and usage history', href: '/history', icon: History },
    { title: 'Billing', desc: 'Plan and invoices', href: '/billing', icon: CreditCard },
    { title: 'Settings', desc: 'Workspace and profile', href: '/settings', icon: Settings },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-widest text-[#839BA8] uppercase mb-1">
            Friday, October 16
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F0F4F5] tracking-tight">
            Good morning, there
          </h1>
          <p className="text-sm text-[#839BA8] mt-1.5">
            Pick up where you left off — chat, agents and terminal sessions are one click away.
          </p>
        </div>

        {/* In-page search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#526673]" />
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search prompts and conversations..."
            className="w-full bg-[#141D20] border border-[#243034] rounded-lg pl-9 pr-3 py-2 text-xs text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
          />
        </div>
      </div>

      {/* Row 1: 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Continue Chatting */}
        <Link
          href="/chat"
          className="group p-5 bg-[#141D20] border border-[#243034] rounded-xl hover:border-[#2E3D43] transition-all flex flex-col justify-between h-[160px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-[#FF7417]/10 border border-[#FF7417]/30 flex items-center justify-center text-[#FF7417]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <ChevronRight className="w-4 h-4 text-[#526673] group-hover:text-[#FF7417] group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-wider text-[#FF7417] uppercase mb-1">
              Continue Chatting
            </div>
            <div className="text-sm font-semibold text-[#F0F4F5]">Start a new conversation</div>
            <div className="text-xs text-[#839BA8] mt-0.5">Most recent session</div>
          </div>
        </Link>

        {/* Card 2: Continue Terminal */}
        <Link
          href="/terminal"
          className="group p-5 bg-[#141D20] border border-[#243034] rounded-xl hover:border-[#2E3D43] transition-all flex flex-col justify-between h-[160px]"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-lg bg-[#FF7417]/10 border border-[#FF7417]/30 flex items-center justify-center text-[#FF7417]">
              <Terminal className="w-4 h-4" />
            </div>
            <ChevronRight className="w-4 h-4 text-[#526673] group-hover:text-[#FF7417] group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-wider text-[#FF7417] uppercase mb-1">
              Continue Terminal Session
            </div>
            <div className="text-sm font-semibold text-[#F0F4F5]">A fresh session awaits</div>
            <div className="text-xs text-[#839BA8] mt-0.5">Syncs your CLI sessions</div>
          </div>
        </Link>

        {/* Card 3: Recent Conversations */}
        <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between h-[160px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#F0F4F5]">Recent Conversations</span>
            <Link href="/chat" className="text-xs font-medium text-[#FF7417] hover:underline">
              Open
            </Link>
          </div>
          <div className="text-xs text-[#839BA8]">
            No conversations yet — start one above.
          </div>
        </div>

        {/* Card 4: Active Agents */}
        <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between h-[160px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#F0F4F5]">Active Agents</span>
            <Link href="/agents" className="text-xs font-medium text-[#FF7417] hover:underline">
              Open
            </Link>
          </div>
          <div className="text-xs text-[#839BA8]">
            No agents yet — create one from the Agents page.
          </div>
        </div>
      </div>

      {/* Row 2: Terminal Activity Panel */}
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2.5">
            <span className="text-[#FF7417] font-mono text-base font-bold">{`>_`}</span>
            <div>
              <h2 className="text-sm font-semibold text-[#F0F4F5]">Terminal Activity</h2>
              <p className="text-xs text-[#839BA8]">
                Real sessions synced from the lf CLI on your devices — every command you run lands here.
              </p>
            </div>
          </div>
          <Link
            href="/terminal"
            className="text-xs font-medium text-[#FF7417] hover:underline flex items-center space-x-1"
          >
            <span>Open terminal</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-4 rounded-lg bg-[#0E1517] border border-[#1E282C] space-y-2">
          <div className="text-xs font-semibold text-[#F0F4F5]">Your terminal sessions will live here</div>
          <p className="text-xs text-[#839BA8] leading-relaxed">
            Run{' '}
            <code className="text-[#FF7417] bg-[#182226] px-1.5 py-0.5 rounded font-mono text-[11px]">
              curl -fsSL https://layerflow.dev/install | bash
            </code>{' '}
            (Windows:{' '}
            <code className="text-[#FF7417] bg-[#182226] px-1.5 py-0.5 rounded font-mono text-[11px]">
              irm https://layerflow.dev/install.ps1 | iex
            </code>
            ) to connect your machine&apos;s CLI — commands you type there appear here in real time.
          </p>
          <div className="pt-2 flex items-center space-x-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#182226] border border-[#243034] text-xs text-[#F0F4F5] hover:border-[#FF7417] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy install command'}</span>
            </button>
            <span className="text-[10px] text-[#526673]">· Demo command fixture</span>
          </div>
        </div>
      </div>

      {/* Row 3: Memory Highlights, Notifications, Team Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between h-[130px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#F0F4F5]">Memory Highlights</span>
            <span className="text-xs text-[#FF7417] cursor-pointer hover:underline">Search</span>
          </div>
          <div className="text-xs text-[#839BA8]">No memories recorded yet.</div>
        </div>

        <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between h-[130px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#F0F4F5]">Notifications</span>
          </div>
          <div className="text-xs text-[#839BA8]">All caught up.</div>
        </div>

        <div className="p-5 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between h-[130px]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#F0F4F5]">Team Activity</span>
            <span className="text-xs text-[#FF7417] cursor-pointer hover:underline">View all</span>
          </div>
          <div className="text-xs text-[#839BA8]">No team events recorded.</div>
        </div>
      </div>

      {/* Screen 02: Lower Section / Feature Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        {/* Left: Saved Prompts (4 cols) */}
        <div className="lg:col-span-4 p-6 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#F0F4F5]">Saved Prompts</h2>
              <Link href="/history" className="text-xs font-medium text-[#FF7417] hover:underline">
                Open
              </Link>
            </div>
            <p className="text-xs text-[#839BA8] leading-relaxed">
              Save prompts from History and they show up here.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#0E1517] border border-[#1E282C] text-center text-xs text-[#526673]">
            No saved prompts yet.
          </div>
        </div>

        {/* Right: Everything in NXT AI (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#839BA8]">
            Everything in NXT AI
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featureCards.map((feat) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={feat.title}
                  href={feat.href}
                  className="p-3.5 bg-[#141D20] border border-[#243034] rounded-xl hover:border-[#2E3D43] transition-all flex items-center space-x-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#182327] border border-[#243034] flex items-center justify-center text-[#839BA8] group-hover:text-[#FF7417] group-hover:border-[#FF7417]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-[#F0F4F5] truncate group-hover:text-[#FF7417] transition-colors">
                      {feat.title}
                    </div>
                    <div className="text-[11px] text-[#839BA8] truncate">{feat.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Spend Strip (Screen 02 bottom) */}
      <div className="p-4 bg-[#141D20] border border-[#243034] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#00D26A]" />
          <span className="font-semibold text-[#F0F4F5]">This month:</span>
          <span className="font-bold text-[#FF7417]">$0.00</span>
          <span className="text-[#839BA8]">monthly spend — saving — this cycle</span>
        </div>
        <Link href="/costs" className="text-xs text-[#FF7417] hover:underline font-medium">
          View cost breakdown →
        </Link>
      </div>
    </div>
  );
}
