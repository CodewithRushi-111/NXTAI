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
          <div className="w-8 h-8 rounded-lg bg-[#FF7417]/10 border border-[#FF7417]/30 flex items-center justify-center text-[#FF7417] font-mono font-bold">
            {`>_`}
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#F0F4F5] tracking-tight">Terminal</h1>
            <p className="text-xs text-[#839BA8]">
              Sessions synced from the lf CLI and API run history.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('CLI sessions synced (0 active devices)')}
          className="self-start sm:self-auto inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#141D20] border border-[#243034] text-xs text-[#839BA8] hover:text-[#F0F4F5] hover:border-[#2E3D43] transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Quick Nav Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="px-2.5 py-1 rounded-full bg-[#141D20] border border-[#243034] text-[11px] text-[#839BA8] hover:text-[#F0F4F5] cursor-pointer">
          Docs
        </span>
        <Link
          href="/keys"
          className="px-2.5 py-1 rounded-full bg-[#141D20] border border-[#243034] text-[11px] text-[#839BA8] hover:text-[#F0F4F5]"
        >
          API Keys · manage providers
        </Link>
        <Link
          href="/costs"
          className="px-2.5 py-1 rounded-full bg-[#141D20] border border-[#243034] text-[11px] text-[#839BA8] hover:text-[#F0F4F5]"
        >
          Usage · tokens & spend
        </Link>
      </div>

      {/* 4 Summary Cards Horizontal Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 bg-[#141D20] border border-[#243034] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F0F4F5]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#526673] uppercase mt-0.5">
            Chat Sessions
          </div>
        </div>

        <div className="p-4 bg-[#141D20] border border-[#243034] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F0F4F5]">3/8</div>
          <div className="text-[10px] font-bold tracking-wider text-[#526673] uppercase mt-0.5">
            Providers Ready
          </div>
        </div>

        <div className="p-4 bg-[#141D20] border border-[#243034] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F0F4F5]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#526673] uppercase mt-0.5">
            Recent Runs
          </div>
        </div>

        <div className="p-4 bg-[#141D20] border border-[#243034] rounded-xl text-center">
          <div className="text-xl font-bold text-[#F0F4F5]">0</div>
          <div className="text-[10px] font-bold tracking-wider text-[#526673] uppercase mt-0.5">
            Sync Operations
          </div>
        </div>
      </div>

      {/* Main Terminal Box */}
      <div className="bg-[#141D20] border border-[#243034] rounded-2xl overflow-hidden space-y-0">
        {/* Terminal Header */}
        <div className="p-4 bg-[#101719] border-b border-[#243034] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <span className="text-[#FF7417] font-mono font-bold text-sm">{`>_`}</span>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#F0F4F5]">NXT AI Terminal</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-medium flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>idle</span>
                </span>
              </div>
              <p className="text-[11px] text-[#839BA8]">
                Interactive OpenCode-grade REPL with real-time SSE streaming.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="px-2 py-1 bg-[#182226] border border-[#243034] rounded-lg text-xs text-[#F0F4F5]">
              AI Terminal
            </div>
            <div className="px-2 py-1 bg-[#182226] border border-[#243034] rounded-lg text-xs text-[#00D26A] flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
              <span>Auto (best available)</span>
            </div>
            <div className="px-2 py-1 bg-[#0E1517] border border-[#243034] rounded-lg text-xs font-mono text-[#839BA8]">
              $0.000 · 0 tok
            </div>
            <button
              onClick={handleCopyConsole}
              className="p-1.5 bg-[#182226] border border-[#243034] rounded-lg text-xs text-[#839BA8] hover:text-[#F0F4F5]"
              title="Copy terminal"
            >
              {copiedConsole ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setHistory([])}
              className="px-2 py-1 bg-[#182226] border border-[#243034] rounded-lg text-xs text-[#839BA8] hover:text-[#F0F4F5]"
            >
              + New
            </button>
          </div>
        </div>

        {/* Terminal Window Body */}
        <div className="p-5 bg-[#090D0F] font-mono text-xs text-[#839BA8] min-h-[280px] max-h-[420px] overflow-y-auto space-y-4">
          {/* Welcome Banner */}
          <div className="space-y-1.5 pb-2 border-b border-[#1C262A]">
            <div className="text-[#FF7417] font-semibold flex items-center space-x-2">
              <span>◆</span>
              <span>NXT AI Unified Terminal v0.3.0</span>
            </div>
            <p className="text-[11px] text-[#526673]">
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
                  className="px-2 py-0.5 rounded bg-[#131B1E] hover:bg-[#1C272B] border border-[#243034] text-[#839BA8] hover:text-[#FF7417] transition-colors"
                >
                  <span className="text-[#FF7417]">{c.cmd}</span> {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lines History */}
          {history.map((line) => (
            <div key={line.id} className="space-y-1">
              {line.type === 'input' ? (
                <div className="flex items-center space-x-2 text-[#F0F4F5]">
                  <span className="text-[#FF7417]">$</span>
                  <span>{line.content}</span>
                </div>
              ) : (
                <div className="text-[#839BA8] pl-4 whitespace-pre-wrap leading-relaxed">
                  {line.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Console Input Bar */}
        <div className="p-3 bg-[#101719] border-t border-[#243034]">
          <form onSubmit={handleTerminalSubmit} className="relative flex items-center">
            <span className="absolute left-3 text-[#FF7417] font-mono font-bold">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type a prompt or /help... (Enter to send, Shift+Enter for newline)"
              className="w-full bg-[#090D0F] border border-[#243034] rounded-xl pl-8 pr-12 py-2.5 text-xs font-mono text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
            />
            <button
              type="submit"
              className="absolute right-2 p-1.5 bg-[#FF7417] text-[#0D1315] rounded-lg hover:bg-[#FF8533] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[10px] text-[#526673] pt-2 px-1">
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
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-[#F0F4F5]">Remote control</h2>
          <p className="text-xs text-[#839BA8]">
            Drive a connected lf CLI like a car — queues a shell command, the daemon claims it, runs it on that machine, and streams the output back here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-8">
            <label className="text-xs text-[#839BA8] block mb-1">Command</label>
            <input
              type="text"
              value={remoteCommand}
              onChange={(e) => setRemoteCommand(e.target.value)}
              placeholder="e.g. git status && npm run typecheck"
              className="w-full bg-[#0E1517] border border-[#243034] rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
            />
          </div>

          <div className="lg:col-span-4 flex items-end gap-2">
            <div className="flex-1">
              <label className="text-xs text-[#839BA8] block mb-1">Target device</label>
              <select className="w-full bg-[#0E1517] border border-[#243034] rounded-xl px-3 py-2.5 text-xs text-[#F0F4F5] focus:outline-none focus:border-[#FF7417]">
                <option>Any available device</option>
                <option>laptop-rishi (macOS)</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => alert('Command queued in demo stream (No live daemon connected)')}
              className="px-4 py-2.5 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-[#526673]">
          No devices synced yet. Install and log in the lf CLI on a machine, then run{' '}
          <code className="text-[#FF7417] font-mono">lf daemon start</code> to be able to run these commands.
        </p>

        <div className="p-8 rounded-xl bg-[#0E1517] border border-[#1E282C] text-center space-y-2">
          <div className="text-xs text-[#839BA8] font-mono">{`>_`} No commands yet</div>
          <p className="text-[11px] text-[#526673]">
            Send a command above — it will run on the first available CLI.
          </p>
        </div>
      </div>

      {/* CLI Sync Activity Panel */}
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
        <h2 className="text-sm font-semibold text-[#F0F4F5]">CLI Sync Activity</h2>
        <div className="p-6 rounded-xl bg-[#0E1517] border border-[#1E282C] text-center text-xs text-[#526673]">
          No terminal syncs yet
        </div>
      </div>
    </div>
  );
}
