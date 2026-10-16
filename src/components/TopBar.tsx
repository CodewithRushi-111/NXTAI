'use client';

import React, { useState } from 'react';
import { Search, Bell, Sun, Menu, X, ShieldAlert } from 'lucide-react';

interface TopBarProps {
  onOpenMobileMenu?: () => void;
  collapsed?: boolean;
}

export function TopBar({ onOpenMobileMenu, collapsed = false }: TopBarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 h-[60px] bg-[#0B1220]/90 backdrop-blur-md border-b border-[#263449] px-4 md:px-8 flex items-center justify-between text-[#F1F5F9]">
        {/* Left: Mobile hamburger & Global search */}
        <div className="flex items-center space-x-3 w-full max-w-md">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-1.5 rounded-md text-[#94A3B8] hover:text-white hover:bg-[#172338]"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div
            onClick={() => setSearchOpen(true)}
            className="flex-1 flex items-center space-x-2.5 px-3 py-1.5 rounded-lg bg-[#111C2E] border border-[#263449] text-xs text-[#94A3B8] cursor-pointer hover:border-[#818CF8]/40 transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="flex-1 truncate">Search anything...</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] bg-[#172338] text-[#94A3B8] rounded border border-[#263449]">
              ⌘ K
            </kbd>
          </div>
        </div>

        {/* Center: Phase 1 Demo indicator */}
        <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[#111C2E] border border-[#263449] text-[11px] text-[#94A3B8]">
          <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-pulse" />
          <span className="font-medium text-[#F1F5F9]">Phase 1 Demo UI</span>
          <span className="text-[#94A3B8]">· No Live APIs</span>
        </div>

        {/* Right Utility Icons */}
        <div className="flex items-center space-x-3.5">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-[#172338] relative transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-[#111C2E] border border-[#263449] rounded-xl shadow-2xl p-3 z-50 text-xs">
                <div className="font-semibold text-[#F1F5F9] mb-2 flex items-center justify-between">
                  <span>Notifications</span>
                  <span className="text-[10px] text-[#818CF8]">Demo</span>
                </div>
                <div className="p-2.5 rounded bg-[#0B1220] border border-[#263449] text-[#94A3B8]">
                  <p className="text-[11px] text-[#F1F5F9] font-medium">Welcome to NXT AI Workspace</p>
                  <p className="text-[10px] mt-0.5">High fidelity Phase 1 prototype initialized with demo fixtures.</p>
                </div>
              </div>
            )}
          </div>

          <button
            className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-[#172338] transition-colors"
            title="Theme toggle"
            onClick={() => alert('Theme is locked to dark developer theme in Phase 1.')}
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* User profile avatar */}
          <div className="w-7 h-7 rounded-full bg-[#172338] border border-[#263449] flex items-center justify-center text-[#818CF8] text-xs font-bold cursor-pointer hover:border-[#818CF8]/60 transition-colors">
            R
          </div>
        </div>
      </header>

      {/* ⌘K Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-[#111C2E] border border-[#263449] rounded-xl shadow-2xl overflow-hidden z-10">
            <div className="flex items-center px-4 py-3 border-b border-[#263449]">
              <Search className="w-4 h-4 text-[#94A3B8] mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, models, agents, tools..."
                autoFocus
                className="w-full bg-transparent text-sm text-[#F1F5F9] placeholder-[#64748B] focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#94A3B8] hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 max-h-80 overflow-y-auto space-y-1 text-xs">
              <div className="px-2 py-1 text-[10px] font-bold text-[#64748B] uppercase">Navigation Quick Jump</div>
              {[
                { name: 'Home Dashboard', href: '/home' },
                { name: 'Unified Chat', href: '/chat' },
                { name: 'Models Registry', href: '/models' },
                { name: 'API Keys & BYOK', href: '/keys' },
                { name: 'MCP Integrations', href: '/integrations/mcp' },
                { name: 'Agents Workforce', href: '/agents' },
                { name: 'Competitor Audit', href: '/competitor-audit' },
                { name: 'Agent Pipelines', href: '/pipelines' },
                { name: 'Terminal & CLI', href: '/terminal' },
                { name: 'Jobs Timeline', href: '/jobs' },
                { name: 'Cost Analytics', href: '/costs' },
                { name: 'Work Ledger / Usage History', href: '/history' },
                { name: 'Billing & Plans', href: '/billing' },
                { name: 'Settings & Profile', href: '/settings' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-[#F1F5F9] hover:bg-[#172338] transition-colors"
                >
                  <span>{item.name}</span>
                  <span className="text-[11px] text-[#94A3B8]">{item.href}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
