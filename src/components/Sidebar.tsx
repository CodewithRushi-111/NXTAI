'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MessageSquare,
  Cpu,
  Key,
  Zap,
  Bot,
  Search,
  GitBranch,
  Terminal,
  Layers,
  BarChart3,
  History,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronLeft,
  LogOut,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({
  collapsed = false,
  onToggleCollapse,
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();

  const navSections = [
    {
      title: 'START',
      items: [
        { label: 'Home', href: '/home', icon: LayoutDashboard },
        { label: 'Chat', href: '/chat', icon: MessageSquare },
      ],
    },
    {
      title: 'CONNECT',
      items: [
        { label: 'Models', href: '/models', icon: Cpu },
        { label: 'Keys', href: '/keys', icon: Key },
        { label: 'MCP', href: '/integrations/mcp', icon: Zap },
      ],
    },
    {
      title: 'BUILD',
      items: [
        { label: 'Agents', href: '/agents', icon: Bot },
        { label: 'Competitor audit', href: '/competitor-audit', icon: Search },
        { label: 'Pipelines', href: '/pipelines', icon: GitBranch },
        { label: 'Terminal', href: '/terminal', icon: Terminal },
      ],
    },
    {
      title: 'SPEND',
      items: [
        { label: 'Jobs', href: '/jobs', icon: Layers },
        { label: 'Costs', href: '/costs', icon: BarChart3 },
        { label: 'Usage History', href: '/history', icon: History },
      ],
    },
    {
      title: 'MANAGE',
      items: [
        { label: 'Billing', href: '/billing', icon: CreditCard },
        { label: 'Settings', href: '/settings', icon: Settings },
      ],
    },
  ];

  const isActive = (href: string) => {
    if (href === '/home' && (pathname === '/' || pathname === '/home')) return true;
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#101719] border-r border-[#243034] text-[#F0F4F5] select-none">
      {/* Workspace Switcher Header */}
      <div className="p-4 border-b border-[#243034] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-md bg-[#00D26A] text-[#0D1315] flex items-center justify-center font-bold text-lg shadow-sm">
            N
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5 cursor-pointer hover:text-white">
                <span className="font-semibold text-sm leading-tight text-[#F0F4F5]">Personal</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#839BA8]" />
              </div>
              <span className="text-[11px] text-[#839BA8] font-normal leading-tight">Free plan</span>
            </div>
          )}
        </div>
      </div>

      {/* Nav List - Scrollable */}
      <div className="flex-1 overflow-y-auto py-3 px-3 space-y-5">
        {navSections.map((section) => (
          <div key={section.title} className="space-y-1">
            {!collapsed && (
              <div className="px-3 text-[10px] font-bold tracking-wider text-[#526673] uppercase">
                {section.title}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onCloseMobile}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                      active
                        ? 'bg-[#182327] text-white border border-[#FF7417]'
                        : 'text-[#839BA8] hover:text-[#F0F4F5] hover:bg-[#151E22]'
                    }`}
                    title={item.label}
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${
                        active ? 'text-[#FF7417]' : 'text-[#839BA8]'
                      }`}
                    />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Pinned User Info & Collapse Button */}
      <div className="p-3 border-t border-[#243034] space-y-2 bg-[#0E1517]">
        {/* User Card */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#151E22] transition-colors cursor-pointer">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] flex-shrink-0 text-xs font-semibold">
              🟢
            </div>
            {!collapsed && (
              <div className="flex flex-col truncate">
                <span className="text-xs font-semibold text-[#F0F4F5] truncate leading-tight">aman</span>
                <span className="text-[11px] text-[#839BA8] truncate leading-tight">amangrp@gmail.com</span>
              </div>
            )}
          </div>
          {!collapsed && (
            <LogOut className="w-3.5 h-3.5 text-[#526673] hover:text-[#839BA8] flex-shrink-0" />
          )}
        </div>

        {/* Collapse Toggle */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center space-x-2 px-2.5 py-1.5 text-xs text-[#839BA8] hover:text-[#F0F4F5] hover:bg-[#151E22] rounded-md transition-colors"
          >
            <ChevronLeft className={`w-3.5 h-3.5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
            {!collapsed && <span>Collapse</span>}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside
        className={`hidden md:block fixed top-0 left-0 bottom-0 z-30 transition-all duration-200 ${
          collapsed ? 'w-[68px]' : 'w-[280px]'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-[280px] max-w-[80vw] h-full z-10">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
