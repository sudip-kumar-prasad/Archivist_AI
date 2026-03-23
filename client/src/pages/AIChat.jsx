import { 
  Paperclip, 
  Mic, 
  SendActive, 
  ArrowUp,
  FileText,
  BarChart3,
  Sparkles,
  User,
  Zap
} from 'lucide-react'

export default function AIChat() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto flex flex-col h-full space-y-8 pb-12">
      {/* Sessions Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
            CURRENT SESSION: THESIS_RESEARCH_01
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight">Digital Sanctuary</h1>
        </div>
        <div className="flex gap-4">
          <div className="p-4 rounded-2xl bg-zinc-800/20 border border-white/5 space-y-1">
             <p className="text-[9px] font-bold uppercase opacity-30 tracking-widest text-right">Tokens Used</p>
             <p className="text-xl font-black text-[#34d399]">14,204</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-800/20 border border-white/5 space-y-1">
             <p className="text-[9px] font-bold uppercase opacity-30 tracking-widest text-right">Response Speed</p>
             <p className="text-xl font-black text-[#a87ffb]">0.4s</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-8 overflow-y-auto px-2">
        {/* Assistant Message */}
        <div className="flex gap-6 group">
          <div className="w-10 h-10 rounded-xl bg-[#a87ffb] flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
            <Sparkles size={20} className="text-white" />
          </div>
          <div className="space-y-2 max-w-3xl">
            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5 text-[15px] leading-relaxed opacity-80"
                 style={{ background: 'var(--bg-card)' }}>
              Greetings, scholar. I have successfully indexed your research papers on Neural Architecture Search. How shall we proceed today? We can summarize the findings, cross-reference the methodologies, or draft a critique.
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-20 px-2 transition group-hover:opacity-40">
              10:42 AM · ARCHIVIST V4.2
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex flex-row-reverse gap-6 group">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 border border-white/10">
            <User size={20} className="opacity-40" />
          </div>
          <div className="space-y-2 max-w-3xl">
            <div className="p-8 rounded-[2rem] bg-zinc-800/40 border border-white/5 text-[15px] leading-relaxed opacity-60">
              Can you find all references to "evolutionary algorithms" in the provided PDFs and compare their performance metrics against the standard RL approach mentioned in Paper #3?
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-20 px-2 text-right transition group-hover:opacity-40">
              10:43 AM · SENT
            </p>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex gap-6">
          <div className="w-10 h-10 rounded-xl bg-[#a87ffb] flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
            <Sparkles size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-4 p-5 rounded-[2rem] bg-zinc-900 border border-white/5 italic text-sm opacity-40">
             <div className="flex gap-1">
               <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.15s]"></span>
               <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></span>
             </div>
             Analyzing 4 source documents...
          </div>
        </div>
      </div>

      {/* Analysis Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] border space-y-6"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#34d399]/10 flex items-center justify-center">
              <FileText size={16} className="text-[#34d399]" />
            </div>
            <h3 className="text-sm font-bold tracking-tight">Active Sources</h3>
          </div>
          <div className="space-y-2">
             {[
               { name: 'paper_evolutionary_nas.pdf', size: '2.4MB' },
               { name: 'rl_comparison_study.pdf', size: '1.8MB' }
             ].map((s, i) => (
               <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                 <span className="text-xs opacity-60">{s.name}</span>
                 <span className="text-[10px] uppercase font-bold opacity-30 tracking-widest">{s.size}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="p-8 rounded-[2.5rem] border space-y-6"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#a87ffb]/10 flex items-center justify-center">
              <BarChart3 size={16} className="text-[#a87ffb]" />
            </div>
            <h3 className="text-sm font-bold tracking-tight">Semantic Overlap</h3>
          </div>
          <div className="h-20 flex items-end gap-3 px-2">
            {[35, 20, 75, 95, 45, 100, 30].map((h, i) => (
              <div key={i} className={`flex-1 rounded-lg transition-all ${i >= 2 && i <= 3 ? 'opacity-100' : (i === 6 ? 'opacity-80' : 'opacity-20')}`}
                   style={{ 
                     height: `${h}%`, 
                     background: i === 2 ? '#c0a3ff' : (i === 3 ? '#a87ffb' : (i === 6 ? '#34d399' : 'white'))
                   }}></div>
            ))}
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-20 text-center">Latent Space Distribution</p>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative group">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-50 transition">
          PROPRIETARY AI ENGINE V4.2 // ENCRYPTED SCHOLARLY SESSION
        </div>
        <div className="relative flex items-center gap-4 p-3 pr-4 rounded-[2.5rem] bg-zinc-900 border transition-all group-focus-within:border-[#a87ffb]/50 group-focus-within:shadow-[0_0_50px_-12px_rgba(168,127,251,0.25)]"
             style={{ borderColor: 'var(--border)' }}>
          <button className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Command the Archivist..." 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-600 text-[15px] font-medium"
          />
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-white transition">
              <Mic size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#a87ffb] text-white flex items-center justify-center shadow-lg shadow-purple-900/40 hover:scale-105 active:scale-95 transition">
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
