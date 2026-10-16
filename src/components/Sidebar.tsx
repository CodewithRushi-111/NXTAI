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
    <div className="flex flex-col h-full bg-[#0F172A] border-r border-[#263449] text-[#F1F5F9] select-none">
      {/* Top Header: Logo + Workspace Selector */}
      <div className="p-3.5 border-b border-[#263449] flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#818CF8] text-[#0F172A] flex items-center justify-center font-bold text-base shadow-sm">
            N
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5 cursor-pointer hover:text-white group">
                <span className="font-semibold text-sm leading-tight text-[#F1F5F9] group-hover:text-white">
                  Personal
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
              </div>
              <span className="text-[11px] text-[#94A3B8] font-normal leading-tight">Free Developer</span>
            </div>
          )}
        </div>
      </div>

      {/* Nav List - Top-aligned, natural vertical sequence */}
      <div className="flex-1 overflow-y-auto pt-3 pb-4 px-3 space-y-4">
        {navSections.map((section) => (
          <div key={section.title} className="space-y-1">
            {!collapsed && (
              <div className="px-3 text-[10px] font-bold tracking-wider text-[#64748B] uppercase">
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
                        ? 'bg-[#172338] text-[#F1F5F9] border border-[#818CF8]'
                        : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#111C2E]'
                    }`}
                    title={item.label}
                  >
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${
                        active ? 'text-[#818CF8]' : 'text-[#94A3B8]'
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
      <div className="shrink-0 p-3 border-t border-[#263449] space-y-2 bg-[#111C2E]">
        {/* User Card */}
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#172338] transition-colors cursor-pointer">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-[#172338] border border-[#263449] flex items-center justify-center text-[#818CF8] flex-shrink-0 text-xs font-semibold">
              R
            </div>
            {!collapsed && (
              <div className="flex flex-col truncate">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-semibold text-[#F1F5F9] truncate leading-tight">aman</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" title="Connected" />
                </div>
                <span className="text-[11px] text-[#94A3B8] truncate leading-tight">amangrp@gmail.com</span>
              </div>
            )}
          </div>
          {!collapsed && (
            <LogOut className="w-3.5 h-3.5 text-[#64748B] hover:text-[#94A3B8] flex-shrink-0" />
          )}
        </div>

        {/* Collapse Toggle */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center space-x-2 px-2.5 py-1.5 text-xs text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#172338] rounded-md transition-colors"
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
          <div className="relative w-[280px] max-w-[80vw] h-full z-10 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
