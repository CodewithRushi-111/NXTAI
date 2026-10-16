'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Terminal as TerminalIcon,
  RefreshCw,
  Copy,
  Plus,
  Send,
  Laptop,
  Check,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output';
  content: string;
}

export default function TerminalPage() {
  const [terminalInput, setTerminalInput] = useState('');
  const [remoteCommand, setRemoteCommand] = useState('');
  const [copiedConsole, setCopiedConsole] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([]);

  const handleTerminalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!terminalInput.trim()) return;

    const inputCmd = terminalInput.trim();
    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', content: inputCmd },
    ];

    let reply = '';
    if (inputCmd === '/help') {
      reply = `Available demo slash commands:
  /help       - show this summary
  /models     - list supported models
  /keys       - inspect active demo keys
  /status     - display environment health
  /clear      - clear console window`;
    } else if (inputCmd === '/models') {
      reply = `Active Models (Demo):
  - GPT-4o mini (OpenAI, Recommended)
  - Claude 3.5 Sonnet (Anthropic)
  - Gemini 1.5 Pro (Google)`;
    } else if (inputCmd === '/keys') {
      reply = `API Key Status: 0 platform keys active. Demo mode enabled.`;
    } else if (inputCmd === '/status') {
      reply = `NXT AI Workspace v0.3.0
Runtime: Client-side Demo Sandbox
Connection: Mock SSE Stream (Phase 1 UI Prototype)
Status: Healthy (No live shell execution)`;
    } else if (inputCmd === '/clear') {
      setHistory([]);
      setTerminalInput('');
      return;
    } else {
      reply = `[Demo Output]: Command or prompt "${inputCmd}" received in sandbox. Live CLI execution begins in Milestone 6.`;
    }

    newLines.push({
      id: (Date.now() + 1).toString(),
      type: 'output',
      content: reply,
    });

    setHistory(newLines);
    setTerminalInput('');
  };

  const handleCopyConsole = () => {
    const text = history.map((h) => `${h.type === 'input' ? '$ ' : ''}${h.content}`).join('\n');
    navigator.clipboard.writeText(text || 'NXT AI Unified Terminal v0.3.0');
    setCopiedConsole(true);
    setTimeout(() => setCopiedConsole(false), 2000);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#818CF8]/10 border border-[#818CF8]/30 flex items-center justify-center text-[#818CF8] font-mono font-bold">
            {`>_`}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] tracking-tight">Terminal</h1>
            <p className="text-xs text-[#94A3B8]">
              Sessions synced from the lf CLI and API run history.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('CLI sessions synced (0 active devices)')}
          className="self-start sm:self-auto inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#111C2E] border border-[#263449] text-xs text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#33455E] transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Quick Nav Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="px-2.5 py-1 rounded-full bg-[#111C2E] border border-[#263449] text-[11px] text-[#94A3B8] hover:text-[#F1F5F9] cursor-pointer">
          Docs
        </span>
        <Link
          href="/keys"
          className="px-2.5 py-1 rounded-full bg-[#111C2E] border border-[#263449] text-[11px] text-[#94A3B8] hover:text-[#F1F5F9]"
        >
          API Keys · manage providers
        </Link>
        <Link
          href="/costs"
          className="px-2.5 py-1 rounded-full bg-[#111C2E] border border-[#263449] text-[11px] text-[#94A3B8] hover:text-[#F1F5F9]"
        >
          Usage · tokens & spend
        </Link>
      </div>

      {/* 4 Summary Cards Horizontal Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 bg-[#111C2E] border border-[#263449] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F1F5F9]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase mt-0.5">
            Chat Sessions
          </div>
        </div>

        <div className="p-4 bg-[#111C2E] border border-[#263449] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F1F5F9]">3/8</div>
          <div className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase mt-0.5">
            Providers Ready
          </div>
        </div>

        <div className="p-4 bg-[#111C2E] border border-[#263449] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F1F5F9]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase mt-0.5">
            Recent Runs
          </div>
        </div>

        <div className="p-4 bg-[#111C2E] border border-[#263449] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F1F5F9]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#64748B] uppercase mt-0.5">
            Sync Operations
          </div>
        </div>
      </div>

      {/* Main Terminal Box */}
      <div className="bg-[#111C2E] border border-[#263449] rounded-2xl overflow-hidden space-y-0">
        {/* Terminal Header */}
        <div className="p-4 bg-[#0F172A] border-b border-[#263449] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <span className="text-[#818CF8] font-mono font-bold text-sm">{`>_`}</span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#F1F5F9]">NXT AI Terminal</span>
                <span className="px-2 py-0.5 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[10px] text-[#34D399] font-medium flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>idle</span>
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Interactive OpenCode-grade REPL with real-time SSE streaming.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="px-2 py-1 bg-[#172338] border border-[#263449] rounded-lg text-xs text-[#F1F5F9]">
              AI Terminal
            </div>
            <div className="px-2 py-1 bg-[#172338] border border-[#263449] rounded-lg text-xs text-[#34D399] flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>Auto (best available)</span>
            </div>
            <div className="px-2 py-1 bg-[#172338] border border-[#263449] rounded-lg text-xs font-mono text-[#94A3B8]">
              $0.000 · 0 tok
            </div>
            <button
              onClick={handleCopyConsole}
              className="p-1.5 bg-[#172338] border border-[#263449] rounded-lg text-xs text-[#94A3B8] hover:text-[#F1F5F9]"
              title="Copy terminal"
            >
              {copiedConsole ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setHistory([])}
              className="px-2 py-1 bg-[#172338] border border-[#263449] rounded-lg text-xs text-[#94A3B8] hover:text-[#F1F5F9]"
            >
              + New
            </button>
          </div>
        </div>

        {/* Terminal Window Body */}
        <div className="p-5 bg-[#0B1220] font-mono text-xs text-[#94A3B8] min-h-[280px] max-h-[420px] overflow-y-auto space-y-4">
          {/* Welcome Banner */}
          <div className="space-y-1.5 pb-2 border-b border-[#263449]">
            <div className="text-[#818CF8] font-semibold flex items-center space-x-2">
              <span>◆</span>
              <span>NXT AI Unified Terminal v0.3.0</span>
            </div>
            <p className="text-[11px] text-[#64748B]">
              OpenCode & Cline compatible environment. Type any request or run built-in slash commands.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              {[
                { cmd: '/help', label: 'commands & shortcuts' },
                { cmd: '/models', label: 'model catalog' },
                { cmd: '/keys', label: 'check API keys' },
                { cmd: '/status', label: 'system health' },
              ].map((c) => (
                <button
                  key={c.cmd}
                  onClick={() => {
                    setTerminalInput(c.cmd);
                  }}
                  className="px-2 py-0.5 rounded bg-[#172338] hover:bg-[#172338]/80 border border-[#263449] text-[#94A3B8] hover:text-[#818CF8] transition-colors"
                >
                  <span className="text-[#818CF8]">{c.cmd}</span> {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lines History */}
          {history.map((line) => (
            <div key={line.id} className="space-y-1">
              {line.type === 'input' ? (
                <div className="flex items-center space-x-2 text-[#F1F5F9]">
                  <span className="text-[#818CF8]">$</span>
                  <span>{line.content}</span>
                </div>
              ) : (
                <div className="text-[#94A3B8] pl-4 whitespace-pre-wrap leading-relaxed">
                  {line.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Console Input Bar */}
        <div className="p-3 bg-[#0F172A] border-t border-[#263449]">
          <form onSubmit={handleTerminalSubmit} className="relative flex items-center">
            <span className="absolute left-3 text-[#818CF8] font-mono font-bold">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type a prompt or /help... (Enter to send, Shift+Enter for newline)"
              className="w-full bg-[#0B1220] border border-[#263449] rounded-xl pl-8 pr-12 py-2.5 text-xs font-mono text-[#F1F5F9] placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
            />
            <button
              type="submit"
              className="absolute right-2 p-1.5 bg-[#818CF8] text-[#0B1220] rounded-lg hover:bg-[#6366F1] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 px-1">
            <div className="flex items-center space-x-3">
              <span>Enter send</span>
              <span>Shift+Enter newline</span>
              <span>↑/↓ history</span>
              <span>Ctrl+L clear</span>
            </div>
            <div>Target: auto</div>
          </div>
        </div>
      </div>

      {/* Remote Control Panel */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-[#F1F5F9]">Remote control</h2>
          <p className="text-xs text-[#94A3B8]">
            Drive a connected lf CLI like a car — queues a shell command, the daemon claims it, runs it on that machine, and streams the output back here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-8">
            <label className="text-xs text-[#94A3B8] block mb-1">Command</label>
            <input
              type="text"
              value={remoteCommand}
              onChange={(e) => setRemoteCommand(e.target.value)}
              placeholder="e.g. git status && npm run typecheck"
              className="w-full bg-[#172338] border border-[#263449] rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#F1F5F9] placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
            />
          </div>

          <div className="lg:col-span-4 flex items-end gap-2">
            <div className="flex-1">
              <label className="text-xs text-[#94A3B8] block mb-1">Target device</label>
              <select className="w-full bg-[#172338] border border-[#263449] rounded-xl px-3 py-2.5 text-xs text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]">
                <option>Any available device</option>
                <option>laptop-rishi (macOS)</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => alert('Command queued in demo stream (No live daemon connected)')}
              className="px-4 py-2.5 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-[#64748B]">
          No devices synced yet. Install and log in the lf CLI on a machine, then run{' '}
          <code className="text-[#818CF8] font-mono">lf daemon start</code> to be able to run these commands.
        </p>

        <div className="p-8 rounded-xl bg-[#172338] border border-[#263449] text-center space-y-2">
          <div className="text-xs text-[#94A3B8] font-mono">{`>_`} No commands yet</div>
          <p className="text-[11px] text-[#64748B]">
            Send a command above — it will run on the first available CLI.
          </p>
        </div>
      </div>

      {/* CLI Sync Activity Panel */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-4">
        <h2 className="text-sm font-semibold text-[#F1F5F9]">CLI Sync Activity</h2>
        <div className="p-6 rounded-xl bg-[#172338] border border-[#263449] text-center text-xs text-[#64748B]">
          No terminal syncs yet
        </div>
      </div>
    </div>
  );
}
