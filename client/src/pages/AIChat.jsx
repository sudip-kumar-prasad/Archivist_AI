import { useState, useRef, useEffect } from 'react'
import { Paperclip, Mic, Send, BarChart2 } from 'lucide-react'

const mockMessages = [
  {
    role: 'ai',
    content: "Greetings, scholar. I have successfully indexed your research papers on Neural Architecture Search. How shall we proceed today? We can summarize the findings, cross-reference the methodologies, or draft a critique.",
    time: '10:42 AM · ARCHIVIST V4.2'
  },
  {
    role: 'user',
    content: 'Can you find all references to "evolutionary algorithms" in the provided PDFs and compare their performance metrics against the standard RL approach mentioned in Paper #3?',
    time: '10:43 AM · SENT'
  },
  {
    role: 'ai',
    content: null, // thinking state
    time: null,
    thinking: true
  }
]

export default function AIChat() {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="px-8 pt-6 pb-4 border-b border-white/[0.06] shrink-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">Current Session: Thesis_Research_01</p>
        <div className="flex items-start justify-between">
          <h1 className="text-[28px] font-black text-white">Digital Sanctuary</h1>
          <div className="flex items-center gap-8 text-right">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Tokens Used</p>
              <p className="text-[20px] font-black text-[#a87ffb]">14,204</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Response Speed</p>
              <p className="text-[20px] font-black text-white">0.4s</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 custom-scrollbar">
        {/* AI message */}
        <div className="flex items-start gap-4 max-w-[80%]">
          <div className="w-9 h-9 rounded-full bg-[#a87ffb] flex items-center justify-center shrink-0 mt-1">
            <span className="text-white text-[14px]">✦</span>
          </div>
          <div className="space-y-1">
            <div className="bg-[#2a2a30] border border-white/[0.06] rounded-2xl rounded-tl-sm px-5 py-4">
              <p className="text-[14px] text-zinc-300 leading-relaxed">
                Greetings, scholar. I have successfully indexed your research papers on Neural Architecture Search. How shall we proceed today? We can summarize the findings, cross-reference the methodologies, or draft a critique.
              </p>
            </div>
            <p className="text-[11px] text-zinc-700 pl-1">10:42 AM · ARCHIVIST V4.2</p>
          </div>
        </div>

        {/* User message */}
        <div className="flex items-start justify-end gap-4 ml-auto max-w-[75%]">
          <div className="space-y-1">
            <div className="bg-[#232329] border border-white/[0.08] rounded-2xl rounded-tr-sm px-5 py-4">
              <p className="text-[14px] text-zinc-300 leading-relaxed">
                Can you find all references to "evolutionary algorithms" in the provided PDFs and compare their performance metrics against the standard RL approach mentioned in Paper #3?
              </p>
            </div>
            <p className="text-[11px] text-zinc-700 text-right pr-1">10:43 AM · SENT</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center shrink-0 mt-1 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=f59e0b" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* AI thinking */}
        <div className="flex items-start gap-4 max-w-[80%]">
          <div className="w-9 h-9 rounded-full bg-[#a87ffb] flex items-center justify-center shrink-0 mt-1">
            <span className="text-white text-[14px]">✦</span>
          </div>
          <div>
            <div className="bg-[#2a2a30] border border-white/[0.06] rounded-2xl rounded-tl-sm px-5 py-3 inline-flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#a87ffb] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#a87ffb] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#a87ffb] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-[12px] text-zinc-500">Analyzing 4 source documents...</span>
            </div>
          </div>
        </div>

        {/* Analysis cards */}
        <div className="grid grid-cols-2 gap-4 ml-13">
          {/* Active Sources */}
          <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#34d399]/20 flex items-center justify-center">
                <span className="text-[#34d399] text-[10px] font-bold">≡</span>
              </div>
              <p className="text-[13px] font-bold text-white">Active Sources</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[12px]">
                <span className="text-zinc-400">paper_evolutionary_nas.pdf</span>
                <span className="text-zinc-600">2.4MB</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-zinc-400">rl_comparison_study.pdf</span>
                <span className="text-zinc-600">1.8MB</span>
              </div>
            </div>
          </div>

          {/* Semantic Overlap */}
          <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <BarChart2 size={16} className="text-zinc-500" />
              <p className="text-[13px] font-bold text-white">Semantic Overlap</p>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[55, 80, 70, 95, 45].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === 1 ? 'bg-[#a87ffb]' : i === 2 ? 'bg-[#8b6de8]' : i === 4 ? 'bg-[#34d399]' : 'bg-[#2d2d35]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-700">Latent Space Distribution</p>
          </div>
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-8 py-5 border-t border-white/[0.06] shrink-0">
        <div className="relative flex items-center bg-[#222228] border border-white/[0.08] rounded-full px-5 py-3 gap-3 focus-within:border-[#a87ffb]/30 transition-all">
          <button className="text-zinc-600 hover:text-zinc-400 transition shrink-0">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Command the Archivist..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-700 text-[14px]"
          />
          <button className="text-zinc-600 hover:text-zinc-400 transition shrink-0">
            <Mic size={18} />
          </button>
          <button className="w-9 h-9 rounded-full bg-[#a87ffb] flex items-center justify-center hover:bg-[#8d6bd0] transition shrink-0">
            <Send size={16} className="text-white" />
          </button>
        </div>
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-zinc-800 mt-3">
          Proprietary AI Engine V4.2 · Encrypted Scholarly Session
        </p>
      </div>
    </div>
  )
}
