'use client';

import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Shield, Bell, Save } from 'lucide-react';

export default function SettingsPage() {
  const [userName, setUserName] = useState('aman');
  const [userEmail, setUserEmail] = useState('amangrp@gmail.com');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Settings</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5">
          Workspace, profile, provider credentials and security preferences.
        </p>
      </div>

      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-6">
        <h2 className="text-sm font-semibold text-[#F1F5F9]">Profile Information</h2>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="text-[#94A3B8] block mb-1">Display Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full sm:w-80 bg-[#172338] border border-[#263449] rounded-xl px-3 py-2 text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
            />
          </div>

          <div>
            <label className="text-[#94A3B8] block mb-1">Email Address</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full sm:w-80 bg-[#172338] border border-[#263449] rounded-xl px-3 py-2 text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
            />
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <button
              type="submit"
              className="px-5 py-2 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-lg font-semibold text-xs transition-all shadow-sm flex items-center space-x-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save preferences</span>
            </button>
            {saved && <span className="text-xs text-[#34D399]">Settings saved locally!</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
