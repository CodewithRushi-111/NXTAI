'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Key, Copy, Check, Plus, ExternalLink } from 'lucide-react';
import { DEMO_MCP_TOOLS } from '@/lib/demo-data';

export default function McpPage() {
  const [keyName, setKeyName] = useState('mcp');
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);

  const mcpConfigJson = JSON.stringify(
    {
      mcpServers: {
        nxtai: {
          type: 'http',
          url: 'https://nxtai.dev/api/mcp',
          headers: {
            Authorization: `Bearer ${generatedKey || '<lf_live_...>'}`,
          },
        },
      },
    },
    null,
    2
  );

  const cliCmd = `lf mcp nxtai --api-key=${generatedKey || '<key>'}`;

  const handleGenerateKey = () => {
    const mock = `lf_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
    setGeneratedKey(mock);
  };

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(mcpConfigJson);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCmd);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#F0F4F5] tracking-tight">MCP server</h1>
        <p className="text-sm text-[#839BA8] mt-1.5">
          Expose NXT AI spend tools to Claude Code, Cursor, or any MCP client.
        </p>
      </div>

      {/* Tools Directory Panel (Screen 06) */}
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-5">
        <div className="flex items-center space-x-2.5">
          <Zap className="w-4 h-4 text-[#FF7417]" />
          <div>
            <h2 className="text-sm font-semibold text-[#F0F4F5]">Model Context Protocol</h2>
            <p className="text-xs text-[#839BA8]">
              Let an agent read this month&apos;s spend and raise the cap from the chat.
            </p>
          </div>
        </div>

        {/* Tools List */}
        <div className="space-y-2.5 pt-1">
          {DEMO_MCP_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="p-3.5 bg-[#0E1517] border border-[#1E282C] rounded-xl flex items-center justify-between hover:border-[#2E3D43] transition-colors"
            >
              <div>
                <div className="font-mono text-xs font-semibold text-[#F0F4F5]">{tool.name}</div>
                <div className="text-[11px] text-[#839BA8] mt-0.5">{tool.description}</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#182226] text-[#839BA8] border border-[#243034] text-[10px] font-mono">
                tool
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Create an API key (Screen 06 bottom / Screen 07 top) */}
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
        <div className="flex items-center space-x-2.5">
          <Key className="w-4 h-4 text-[#FF7417]" />
          <div>
            <h2 className="text-sm font-semibold text-[#F0F4F5]">1. Create an API key</h2>
            <p className="text-xs text-[#839BA8]">
              The MCP client authenticates with a NXT AI platform key (lf_live_...).
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-1">
          <div>
            <label className="text-xs text-[#839BA8] block mb-1">Key name</label>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                value={keyName}
                onChange={(e) => setKeyName(e.target.value)}
                className="w-full sm:w-64 bg-[#0E1517] border border-[#243034] rounded-xl px-3.5 py-2 text-xs text-[#F0F4F5] focus:outline-none focus:border-[#FF7417]"
              />
              <button
                type="button"
                onClick={handleGenerateKey}
                className="w-full sm:w-auto px-5 py-2 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full text-xs font-semibold transition-all shadow-sm flex items-center justify-center space-x-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Generate key</span>
              </button>
            </div>
            <span className="text-[10px] text-[#526673] mt-1 block">Optional</span>
          </div>

          {generatedKey && (
            <div className="p-2.5 rounded-lg bg-[#0A0E10] border border-[#00D26A]/40 text-xs font-mono text-[#00D26A] flex items-center justify-between">
              <span>{generatedKey}</span>
              <span className="text-[10px] text-[#839BA8]">Key injected into config</span>
            </div>
          )}

          <div className="pt-2 text-xs text-[#839BA8]">
            Need an existing key? Manage them on the{' '}
            <Link href="/keys" className="text-[#FF7417] hover:underline font-medium">
              API keys
            </Link>{' '}
            page.
          </div>
        </div>
      </div>

      {/* Step 2: Add the server (Screen 07) */}
      <div className="p-6 bg-[#141D20] border border-[#243034] rounded-2xl space-y-4">
        <div className="flex items-center space-x-2.5">
          <Zap className="w-4 h-4 text-[#FF7417]" />
          <div>
            <h2 className="text-sm font-semibold text-[#F0F4F5]">2. Add the server</h2>
            <p className="text-xs text-[#839BA8]">
              Paste into Claude Code (~/.claude.json) or Cursor as an HTTP MCP server.
            </p>
          </div>
        </div>

        {/* JSON Code Snippet */}
        <div className="p-4 rounded-xl bg-[#0E1517] border border-[#1E282C] space-y-3">
          <pre className="font-mono text-xs text-[#839BA8] overflow-x-auto leading-relaxed">
            {mcpConfigJson}
          </pre>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#1C262A] text-xs">
            <span className="text-[11px] text-[#526673]">
              Endpoint https://nxtai.dev/api/mcp · same-origin, cookie-free (Bearer auth).
            </span>
            <button
              onClick={handleCopyConfig}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#182226] border border-[#243034] text-xs text-[#F0F4F5] hover:border-[#FF7417] transition-all flex-shrink-0"
            >
              {copiedConfig ? (
                <Check className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copiedConfig ? 'Copied' : 'Copy config'}</span>
            </button>
          </div>
        </div>

        {/* CLI Command alternative */}
        <div className="text-center pt-2 text-xs text-[#839BA8]">
          <span>Or from the terminal: </span>
          <code className="text-[#F0F4F5] bg-[#0E1517] px-2 py-1 rounded border border-[#243034] font-mono text-[11px]">
            {cliCmd}
          </code>
          <button
            onClick={handleCopyCli}
            className="ml-2 text-xs text-[#FF7417] hover:underline"
          >
            {copiedCli ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
