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
        <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">Settings</h1>
        <p className="text-sm text-[#839BA8] mt-1.5">
          Workspace, profile, provider credentials and security preferences.
        </p>
      </div>

      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-6">
        <h2 className="text-sm font-semibold text-[#F0F4F5]">Profile Information</h2>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="text-[#839BA8] block mb-1">Display Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full sm:w-80 bg-[#0E1517] border border-[#243034] rounded-xl px-3 py-2 text-[#F0F4F5] focus:outline-none focus:border-[#FF7417]"
            />
          </div>

          <div>
            <label className="text-[#839BA8] block mb-1">Email Address</label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full sm:w-80 bg-[#0E1517] border border-[#243034] rounded-xl px-3 py-2 text-[#F0F4F5] focus:outline-none focus:border-[#FF7417]"
            />
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <button
              type="submit"
              className="px-5 py-2 bg-[#FF7417] text-[#0D1315] hover:bg-[#FF8533] rounded-lg font-semibold text-xs transition-all shadow-sm flex items-center space-x-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save preferences</span>
            </button>
            {saved && <span className="text-xs text-green-400">Settings saved locally!</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
