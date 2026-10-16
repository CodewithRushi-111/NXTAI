'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Sparkles,
  Plus,
  Send,
  LifeBuoy,
  Download,
  Bot,
  ChevronDown,
  X,
  FileText,
  AlertCircle,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  model: string;
  timestamp: string;
  isDemo?: boolean;
}

export default function ChatPage() {
  const [inChat, setInChat] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [selectedModel, setSelectedModel] = useState('GPT-4o mini');
  const [showRescueModal, setShowRescueModal] = useState(false);
  const [rescueInput, setRescueInput] = useState('');
  const [rescueParsed, setRescueParsed] = useState<any | null>(null);

  const startNewChat = () => {
    setInChat(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: 'Hello! I am ready to help you with code, project architecture, or continuing an existing thread. (Note: Demo simulation mode in Milestone 1)',
          model: selectedModel,
          timestamp: 'Just now',
          isDemo: true,
        },
      ]);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputVal,
      model: selectedModel,
      timestamp: 'Just now',
    };

    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInputVal('');

    // Mock deterministic assistant response
    setTimeout(() => {
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `[DEMO RESPONSE · ${selectedModel}]\nThis is a simulated response in Milestone 1. Live model routing with provider keys will activate in Milestone 3.\n\nYour prompt: "${userMsg.content}"`,
        model: selectedModel,
        timestamp: 'Just now',
        isDemo: true,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    }, 600);
  };

  const handleRescueParse = () => {
    if (!rescueInput.trim()) return;
    setRescueParsed({
      summary: 'Project handoff extracted from pasted conversation',
      decisions: ['Keep Next.js + Tailwind stack', 'Zero external runtime dependencies in Phase 1'],
      nextSteps: ['Complete screen-by-screen fidelity review', 'Validate 1600x900 and mobile viewports'],
      sourceLength: `${rescueInput.length} characters parsed`,
    });
  };

  const handleApplyRescue = () => {
    setInChat(true);
    setMessages([
      {
        id: 'rescued-1',
        role: 'assistant',
        content: `[RESCUED CONTINUATION PACK APPLIED]\nSummary: ${rescueParsed?.summary || 'Imported context'}\n\nKey Decisions:\n${rescueParsed?.decisions?.map((d: string) => `- ${d}`).join('\n')}\n\nPending Next Step: ${rescueParsed?.nextSteps?.[0]}`,
        model: selectedModel,
        timestamp: 'Just now',
        isDemo: true,
      },
    ]);
    setShowRescueModal(false);
    setRescueInput('');
    setRescueParsed(null);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-140px)] pb-12">
      {/* Left Session Drawer / Column */}
      <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col justify-between p-4 bg-[#141D20] border border-[#243034] rounded-xl h-auto lg:h-[calc(100vh-160px)]">
        <div className="space-y-4">
          <button
            onClick={startNewChat}
            className="w-full py-2.5 px-4 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full font-semibold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4 text-[#0D1315]" />
            <span>New chat</span>
          </button>

          {!inChat ? (
            <div className="text-xs text-[#839BA8] px-1 leading-relaxed">
              No chats yet. Start with a prompt, or import a rescued conversation.
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-[10px] uppercase font-bold text-[#526673] px-2">Active Session</div>
              <div className="p-2.5 rounded-lg bg-[#182327] border border-[#FF7417]/30 text-xs text-[#F0F4F5] flex items-center justify-between">
                <span className="truncate">Current Conversation</span>
                <span className="text-[10px] text-[#FF7417]">Live</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Drawer Actions */}
        <div className="space-y-2 pt-4 border-t border-[#243034]">
          <button
            onClick={() => setShowRescueModal(true)}
            className="w-full py-2 px-3 bg-[#182226] hover:bg-[#1E2B30] border border-[#243034] text-[#F0F4F5] rounded-xl text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <LifeBuoy className="w-3.5 h-3.5 text-[#839BA8]" />
            <span>Rescue a past chat</span>
          </button>
          <button
            onClick={() => {
              setRescueInput('Prior chat context: Implement Phase 1 high-fidelity UI shell for NXT AI.');
              handleRescueParse();
              setShowRescueModal(true);
            }}
            className="w-full py-2 px-3 bg-[#182226] hover:bg-[#1E2B30] border border-[#243034] text-[#839BA8] hover:text-[#F0F4F5] rounded-xl text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#839BA8]" />
            <span>Import last rescue</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#141D20] border border-[#243034] rounded-xl overflow-hidden min-h-[500px]">
        {!inChat ? (
          /* Empty State Screen 03 */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#182226] border border-[#243034] flex items-center justify-center text-[#839BA8]">
              <Bot className="w-7 h-7 text-[#839BA8]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#F0F4F5] tracking-tight">
                Continue any chat, on any AI
              </h2>
              <p className="text-xs text-[#839BA8] leading-relaxed max-w-md mx-auto">
                Pick a model per message — or let NXT AI auto-switch when a key runs out. Your thread and context never get lost.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={startNewChat}
                className="py-2 px-5 bg-white text-[#0D1315] hover:bg-neutral-100 rounded-full font-semibold text-xs flex items-center space-x-2 transition-all shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 text-[#0D1315]" />
                <span>New chat</span>
              </button>
              <button
                onClick={() => setShowRescueModal(true)}
                className="py-2 px-4 bg-[#182226] hover:bg-[#1E2B30] border border-[#243034] text-[#F0F4F5] rounded-full text-xs flex items-center space-x-2 transition-all"
              >
                <LifeBuoy className="w-3.5 h-3.5 text-[#839BA8]" />
                <span>Rescue a past chat</span>
              </button>
              <button
                onClick={() => {
                  setRescueInput('Previous thread context: Evaluated 15 reference UI designs.');
                  handleRescueParse();
                  setShowRescueModal(true);
                }}
                className="py-2 px-4 bg-[#182226] hover:bg-[#1E2B30] border border-[#243034] text-[#F0F4F5] rounded-full text-xs flex items-center space-x-2 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#839BA8]" />
                <span>Import from my rescue</span>
              </button>
            </div>

            <p className="text-[11px] text-[#526673] pt-6 max-w-lg leading-relaxed">
              Rescue brings a dead conversation back to life — a report loads it straight into a new thread here.{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-[#182226] border border-[#243034] text-[#FF7417] text-[10px] font-mono">
                ⌘I
              </kbd>{' '}
              improves any prompt before it runs.
            </p>
          </div>
        ) : (
          /* Active Chat Thread */
          <div className="flex-1 flex flex-col h-full">
            {/* Thread Header with Model Selector */}
            <div className="px-5 py-3.5 border-b border-[#243034] bg-[#101719] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-semibold text-[#F0F4F5]">Model:</span>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-[#182226] border border-[#243034] text-[#F0F4F5] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#FF7417]"
                >
                  <option value="GPT-4o mini">GPT-4o mini (Cheap & fast)</option>
                  <option value="GPT-4o">GPT-4o (Flagship)</option>
                  <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (High precision)</option>
                  <option value="Gemini 1.5 Pro">Gemini 1.5 Pro (2M context)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#FF7417]/10 text-[#FF7417] border border-[#FF7417]/20 font-medium">
                  DEMO FIXTURE
                </span>
                <button
                  onClick={() => setInChat(false)}
                  className="text-xs text-[#839BA8] hover:text-[#F0F4F5] px-2 py-1"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1 text-[11px] text-[#839BA8]">
                    <span>{m.role === 'user' ? 'You' : m.model}</span>
                    <span>·</span>
                    <span>{m.timestamp}</span>
                    {m.isDemo && (
                      <span className="text-[10px] text-[#FF7417] font-mono">[Demo]</span>
                    )}
                  </div>
                  <div
                    className={`max-w-2xl px-4 py-3 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-[#FF7417] text-[#0D1315] font-medium'
                        : 'bg-[#182226] border border-[#243034] text-[#F0F4F5]'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Composer */}
            <div className="p-4 border-t border-[#243034] bg-[#101719]">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Send a prompt to test simulated reply..."
                  className="w-full bg-[#141D20] border border-[#243034] rounded-xl pl-4 pr-24 py-3 text-xs text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417]"
                />
                <div className="absolute right-2 flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => setInputVal((prev) => (prev ? `Improve: ${prev}` : 'Explain the system architecture'))}
                    className="px-2 py-1 text-[10px] font-mono text-[#FF7417] bg-[#182226] rounded border border-[#243034] hover:border-[#FF7417]"
                    title="Improve Prompt (⌘I)"
                  >
                    ⌘I
                  </button>
                  <button
                    type="submit"
                    className="p-1.5 bg-[#FF7417] text-[#0D1315] rounded-lg hover:bg-[#FF8533] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Chat Rescue Modal */}
      {showRescueModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setShowRescueModal(false)}
          />
          <div className="relative w-full max-w-xl bg-[#141D20] border border-[#243034] rounded-2xl shadow-2xl p-6 z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#243034]">
              <div className="flex items-center space-x-2.5">
                <LifeBuoy className="w-5 h-5 text-[#FF7417]" />
                <h3 className="text-sm font-bold text-[#F0F4F5]">Chat Rescue — Continue Pack</h3>
              </div>
              <button
                onClick={() => setShowRescueModal(false)}
                className="text-[#839BA8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#839BA8] leading-relaxed">
              Paste the text from a dead or hit-the-limit chat session. NXT AI locally validates the content and extracts a portable Continue Pack without external model calls.
            </p>

            <textarea
              rows={5}
              value={rescueInput}
              onChange={(e) => setRescueInput(e.target.value)}
              placeholder="Paste conversation transcript here..."
              className="w-full bg-[#0E1517] border border-[#243034] rounded-xl p-3 text-xs text-[#F0F4F5] placeholder-[#526673] focus:outline-none focus:border-[#FF7417] font-mono"
            />

            {rescueParsed && (
              <div className="p-3 bg-[#182226] border border-[#243034] rounded-xl text-xs space-y-2">
                <div className="font-semibold text-[#00D26A] flex items-center space-x-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Preview Continue Pack</span>
                </div>
                <div className="text-[11px] text-[#839BA8]">
                  <span className="text-[#F0F4F5] font-medium">Summary:</span> {rescueParsed.summary}
                </div>
                <div className="text-[11px] text-[#839BA8]">
                  <span className="text-[#F0F4F5] font-medium">Parsed size:</span> {rescueParsed.sourceLength}
                </div>
              </div>
            )}

            <div className="flex items-center justify-end space-x-3 pt-2">
              {!rescueParsed ? (
                <button
                  type="button"
                  onClick={handleRescueParse}
                  className="px-4 py-2 bg-[#FF7417] text-[#0D1315] hover:bg-[#FF8533] rounded-lg font-semibold text-xs transition-all"
                >
                  Generate Continue Pack
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleApplyRescue}
                  className="px-4 py-2 bg-[#00D26A] text-[#0D1315] hover:bg-emerald-400 rounded-lg font-semibold text-xs transition-all"
                >
                  Apply & Load Thread
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
