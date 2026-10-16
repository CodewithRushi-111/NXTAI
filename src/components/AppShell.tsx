'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F1F5F9] flex flex-col antialiased selection:bg-[#818CF8] selection:text-[#0B1220]">
      {/* Sidebar (Desktop fixed + Mobile drawer) */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        isMobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-200 ${
          collapsed ? 'md:ml-[68px]' : 'md:ml-[280px]'
        }`}
      >
        <TopBar
          collapsed={collapsed}
          onOpenMobileMenu={() => setMobileOpen(true)}
        />

        <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
