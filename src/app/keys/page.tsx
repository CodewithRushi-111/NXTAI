'use client';

import React, { useState } from 'react';
import { Key, Copy, Check, Plus, ShieldCheck, AlertTriangle, Trash2 } from 'lucide-react';
import { ApiKeyItem } from '@/lib/types';

export default function ApiKeysPage() {
  const [activeTab, setActiveTab] = useState<'platform' | 'byok'>('platform');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [keyName, setKeyName] = useState('');
  const [keysList, setKeysList] = useState<ApiKeyItem[]>([]);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const snippets = [
    {
      title: 'Gateway · curl',
      desc: 'Platform key as Bearer · x-lf-project tags the spend',
      code: `curl https://nxtai.dev/v1/chat/completions \\
  -H "Authorization: Bearer lf_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -H "x-lf-project: my-app" \\
  -d '{"model":"gpt-4o-mini","messages":[{"role":"user","content":"Say ready"}]}'`,
    },
    {
      title: 'Gateway · Python',
      desc: 'OpenAI-compatible base_url — works with any SDK',
      code: `from openai import OpenAI
client = OpenAI(base_url="https://nxtai.dev/v1", api_key="lf_live_YOUR_KEY")
reply = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Say ready"}],
)
print(reply.choices[0].message.content)`,
    },
    {
      title: 'CLI · direct mode',
      desc: 'BYOK — your own key, nothing metered by NXT AI',
      code: `export OPENAI_API_KEY="sk-..."  # bring your own, no platform fees
# or store it:  lf config key openai sk-...
lf chat --provider openai        # direct mode -> your provider`,
    },
  ];

  const handleCopySnippet = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyName.trim()) return;

    const mockKey = `lf_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 10)}`;
    const newItem: ApiKeyItem = {
      id: Date.now().toString(),
      name: keyName,
      prefix: mockKey.substring(0, 12) + '...',
      type: activeTab,
      createdAt: 'Just now',
      lastUsed: 'Never',
    };

    setKeysList([newItem, ...keysList]);
    setGeneratedKey(mockKey);
    setKeyName('');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">API Keys</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5 max-w-3xl">
          Two kinds of keys: platform keys let the CLI talk to NXT AI&apos;s hosted gateway (like opencode), and private own keys bring your own provider accounts.
        </p>
      </div>

      {/* Try it in 2 minutes Section */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-xl space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-[#F1F5F9]">Try it in 2 minutes</h2>
          <p className="text-xs text-[#94A3B8]">
            Drop your key in, hit the gateway. Every request is capped by your budget and attributed to a project automatically.
          </p>
        </div>

        {/* 3 Columns Snippets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {snippets.map((snip, idx) => (
            <div
              key={snip.title}
              className="p-4 rounded-xl bg-[#172338] border border-[#263449] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-[#F1F5F9]">{snip.title}</span>
                  <button
                    onClick={() => handleCopySnippet(snip.code, idx)}
                    className="p-1 rounded text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#111C2E] text-xs flex items-center space-x-1"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span className="text-[10px]">{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="text-[11px] text-[#64748B] mb-3">{snip.desc}</div>
              </div>

              <pre className="p-3 rounded-lg bg-[#0F172A] text-[#94A3B8] text-[11px] font-mono overflow-x-auto whitespace-pre leading-relaxed border border-[#263449]">
                {snip.code}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Segmented Tabs */}
      <div className="flex border-b border-[#263449] space-x-8">
        <button
          onClick={() => setActiveTab('platform')}
          className={`pb-3 text-xs font-medium flex items-center space-x-2 transition-all relative ${
            activeTab === 'platform'
              ? 'text-[#F1F5F9] font-semibold border-b-2 border-[#818CF8]'
              : 'text-[#94A3B8] hover:text-[#F1F5F9]'
          }`}
        >
          <Key className="w-3.5 h-3.5" />
          <span>Platform keys</span>
          <span className="font-mono text-[10px] text-[#818CF8]">lf_live_...</span>
        </button>

        <button
          onClick={() => setActiveTab('byok')}
          className={`pb-3 text-xs font-medium flex items-center space-x-2 transition-all relative ${
            activeTab === 'byok'
              ? 'text-[#F1F5F9] font-semibold border-b-2 border-[#818CF8]'
              : 'text-[#94A3B8] hover:text-[#F1F5F9]'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Private own keys</span>
          <span className="text-[10px] text-[#94A3B8] font-mono">BYOK</span>
        </button>
      </div>

      {/* Tab Content Panel */}
      <div className="p-6 bg-[#111C2E] border border-[#263449] rounded-xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">
              {activeTab === 'platform' ? 'Platform keys' : 'Private own keys (BYOK)'}
            </h2>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              {activeTab === 'platform'
                ? 'NXT AI-hosted keys (lf_live_...) for the CLI and gateway — like opencode\'s own key. Paste into \'lf login\' or use as a Bearer token. No provider account needed.'
                : 'Direct BYOK credentials for OpenAI, Anthropic, or Google. Keys remain server-side and never touch browser localStorage.'}
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full border border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399] text-[11px] font-mono">
            {keysList.filter((k) => k.type === activeTab).length} active
          </span>
        </div>

        {/* Create Key Form */}
        <form onSubmit={handleCreateKey} className="space-y-3 pt-2">
          <div className="text-xs font-semibold text-[#F1F5F9]">
            + Create a {activeTab === 'platform' ? 'platform key' : 'BYOK provider key'}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
              placeholder="Key name, e.g. cli-laptop or mcp-agent"
              className="w-full sm:w-80 bg-[#172338] border border-[#263449] rounded-lg px-3 py-2 text-xs text-[#F1F5F9] placeholder-[#64748B] focus:outline-none focus:border-[#818CF8]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-lg text-xs font-semibold transition-all shadow-sm flex items-center justify-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create key</span>
            </button>
          </div>
        </form>

        {/* Modal / Toast for freshly created key */}
        {generatedKey && (
          <div className="p-4 rounded-xl bg-[#172338] border border-[#818CF8]/50 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#818CF8]">
              <AlertTriangle className="w-4 h-4 text-[#818CF8]" />
              <span>Copy this demo key now — it won&apos;t be shown again</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-[#0F172A] border border-[#263449] font-mono text-xs text-[#34D399]">
              <span>{generatedKey}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedKey);
                  alert('Copied demo key to clipboard');
                }}
                className="text-xs text-[#94A3B8] hover:text-white"
              >
                Copy
              </button>
            </div>
            <p className="text-[10px] text-[#64748B]">
              Demo notice: This key is mock-generated client side for layout testing. Live provider keys are not accepted in Phase 1.
            </p>
          </div>
        )}

        {/* Active Keys List */}
        {keysList.filter((k) => k.type === activeTab).length > 0 ? (
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#263449] text-[10px] uppercase font-bold text-[#64748B]">
                  <th className="py-2.5 px-3">Name</th>
                  <th className="py-2.5 px-3">Key Prefix</th>
                  <th className="py-2.5 px-3">Created</th>
                  <th className="py-2.5 px-3">Last Used</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#263449]">
                {keysList
                  .filter((k) => k.type === activeTab)
                  .map((k) => (
                    <tr key={k.id}>
                      <td className="py-2.5 px-3 font-medium text-[#F1F5F9]">{k.name}</td>
                      <td className="py-2.5 px-3 font-mono text-[#94A3B8]">{k.prefix}</td>
                      <td className="py-2.5 px-3 text-[#64748B]">{k.createdAt}</td>
                      <td className="py-2.5 px-3 text-[#64748B]">{k.lastUsed}</td>
                      <td className="py-2.5 px-3 text-right">
                        <button
                          onClick={() => setKeysList(keysList.filter((x) => x.id !== k.id))}
                          className="p-1 text-[#64748B] hover:text-[#F87171]"
                          title="Revoke key"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-[#64748B] border-t border-[#263449]">
            No {activeTab} keys configured yet.
          </div>
        )}
      </div>
    </div>
  );
}
