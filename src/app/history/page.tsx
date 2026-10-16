'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { History as HistoryIcon, Plus, Clock, Brain, Bookmark, X, Check } from 'lucide-react';

interface SavedPrompt {
  id: string;
  title: string;
  body: string;
  tag: string;
}

export default function HistoryPage() {
  const [prompts, setPrompts] = useState<SavedPrompt[]>([]);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('Coding');

  const handleSavePrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newPrompt: SavedPrompt = {
      id: Date.now().toString(),
      title,
      body,
      tag,
    };

    setPrompts([newPrompt, ...prompts]);
    setTitle('');
    setBody('');
    setShowPromptModal(false);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[#F1F5F9] tracking-tight">Work Ledger</h1>
        <p className="text-sm text-[#94A3B8] mt-1.5">
          Every session, saved prompt, learning, decision and cost — one time-ordered record of your AI work.
        </p>
      </div>

      {/* Upper Split Row: Recent activity (7 cols) + Learning Memory (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Recent Activity */}
        <div className="lg:col-span-8 p-6 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">Recent activity</h2>
            <p className="text-xs text-[#94A3B8]">Most recent first</p>
          </div>

          <div className="p-8 rounded-xl bg-[#172338] border border-[#263449] flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#111C2E] flex items-center justify-center text-[#94A3B8]">
              <Clock className="w-4 h-4 text-[#818CF8]" />
            </div>
            <div className="text-xs font-semibold text-[#F1F5F9]">No activity yet</div>
            <p className="text-[11px] text-[#64748B]">
              Start a chat or run a prompt and it will show up here.
            </p>
          </div>

          <div />
        </div>

        {/* Learning Memory */}
        <div className="lg:col-span-4 p-6 bg-[#111C2E] border border-[#263449] rounded-2xl flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">Learning Memory</h2>
            <p className="text-xs text-[#94A3B8]">What NXT AI remembered</p>
          </div>

          <div className="p-8 rounded-xl bg-[#172338] border border-[#263449] flex flex-col items-center justify-center text-center">
            <div className="text-xs text-[#64748B]">Nothing learned yet.</div>
          </div>

          <div />
        </div>
      </div>

      {/* Lower Full-width Card: Saved Prompts */}
      <div className="p-6 md:p-8 bg-[#111C2E] border border-[#263449] rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-[#F1F5F9]">Saved Prompts</h2>
            <p className="text-xs text-[#94A3B8]">Your reusable prompt library</p>
          </div>

          <button
            onClick={() => setShowPromptModal(true)}
            className="px-4 py-2 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-full font-semibold text-xs transition-all shadow-sm flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <Plus className="w-3.5 h-3.5 text-[#0B1220]" />
            <span>Save a prompt</span>
          </button>
        </div>

        <p className="text-xs text-[#94A3B8]">
          Your personal prompt library — store a reusable prompt once and reuse it in chat.
        </p>

        {prompts.length === 0 ? (
          <div className="p-8 rounded-xl bg-[#172338] border border-[#263449] text-center text-xs text-[#64748B]">
            No prompts saved yet — hit “Save a prompt” to store your first reusable prompt.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {prompts.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl bg-[#172338] border border-[#263449] space-y-2 hover:border-[#33455E] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F1F5F9]">{p.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0F172A] text-[#818CF8] border border-[#263449]">
                    {p.tag}
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] line-clamp-2">{p.body}</p>
                <div className="pt-1 flex items-center justify-between text-[11px]">
                  <Link href="/chat" className="text-[#818CF8] hover:underline">
                    Use in Chat →
                  </Link>
                  <button
                    onClick={() => setPrompts(prompts.filter((x) => x.id !== p.id))}
                    className="text-[#64748B] hover:text-[#F87171]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Save Prompt Modal */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowPromptModal(false)}
          />
          <div className="relative w-full max-w-lg bg-[#111C2E] border border-[#263449] rounded-2xl shadow-2xl p-6 z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#263449]">
              <div className="flex items-center space-x-2">
                <Bookmark className="w-4 h-4 text-[#818CF8]" />
                <h3 className="text-sm font-bold text-[#F1F5F9]">Save a reusable prompt</h3>
              </div>
              <button
                onClick={() => setShowPromptModal(false)}
                className="text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSavePrompt} className="space-y-4 text-xs">
              <div>
                <label className="text-[#94A3B8] block mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Code Review Checklist"
                  className="w-full bg-[#172338] border border-[#263449] rounded-xl px-3 py-2 text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
                  required
                />
              </div>

              <div>
                <label className="text-[#94A3B8] block mb-1">Tag / Category</label>
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="e.g. Coding, Architecture, Summary"
                  className="w-full bg-[#172338] border border-[#263449] rounded-xl px-3 py-2 text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
                />
              </div>

              <div>
                <label className="text-[#94A3B8] block mb-1">Prompt Body</label>
                <textarea
                  rows={4}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter the template or prompt text..."
                  className="w-full bg-[#172338] border border-[#263449] rounded-xl p-3 text-[#F1F5F9] focus:outline-none focus:border-[#818CF8]"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPromptModal(false)}
                  className="px-4 py-2 bg-[#172338] text-[#94A3B8] hover:text-white rounded-lg border border-[#263449]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#818CF8] text-[#0B1220] hover:bg-[#6366F1] rounded-lg font-semibold"
                >
                  Save Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
