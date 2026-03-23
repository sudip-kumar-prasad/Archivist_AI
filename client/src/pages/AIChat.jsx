import { 
  Paperclip, 
  Mic, 
  Send, 
  ArrowUp,
  FileText,
  BarChart3,
  Sparkles,
  User,
  Zap,
  CheckCircle2,
  Trash2,
  MoreVertical
} from 'lucide-react'

export default function AIChat() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto flex flex-col h-full space-y-12 pb-16">
      {/* Sessions Header */}
      <div className="flex items-end justify-between px-2">
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#52525b]">
            CURRENT SESSION: THESIS_RESEARCH_01
          </p>
          <h1 className="text-6xl font-black tracking-tight text-white leading-tight">Digital Sanctuary</h1>
        </div>
        <div className="flex gap-4">
          <div className="p-5 rounded-3xl bg-[#141416]/50 border border-[#1f1f22] space-y-2 min-w-[140px] text-right">
             <p className="text-[9px] font-black uppercase text-[#52525b] tracking-widest">TOKENS USED</p>
             <p className="text-3xl font-black text-[#34d399]">14,204</p>
          </div>
          <div className="p-5 rounded-3xl bg-[#141416]/50 border border-[#1f1f22] space-y-2 min-w-[140px] text-right">
             <p className="text-[9px] font-black uppercase text-[#52525b] tracking-widest">RESPONSE SPEED</p>
             <p className="text-3xl font-black text-[#a87ffb]">0.4s</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-10 overflow-y-auto px-2 pr-6 custom-scrollbar">
        {/* Assistant Message */}
        <div className="flex gap-8 group">
          <div className="w-12 h-12 rounded-[1.25rem] bg-[#a87ffb] flex items-center justify-center shrink-0 shadow-[0_8px_30px_rgba(168,127,251,0.25)]">
            <Sparkles size={24} className="text-white" />
          </div>
          <div className="space-y-3 max-w-4xl">
            <div className="p-10 rounded-[2.5rem] border border-[#1f1f22] text-[16px] leading-[1.7] text-zinc-300 font-medium bg-[#18181b]/80 shadow-sm transition group-hover:bg-[#18181b]">
              Greetings, scholar. I have successfully indexed your research papers on Neural Architecture Search. How shall we proceed today? We can summarize the findings, cross-reference the methodologies, or draft a critique.
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#52525b] px-4 opacity-40 group-hover:opacity-100 transition duration-300">
              10:42 AM · ARCHIVIST V4.2
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="flex flex-row-reverse gap-8 group">
          <div className="w-12 h-12 rounded-[1.25rem] bg-[#27272a] flex items-center justify-center shrink-0 border border-white/5 shadow-md">
            <User size={24} className="text-[#52525b]" />
          </div>
          <div className="space-y-3 max-w-4xl text-right">
            <div className="p-10 rounded-[2.5rem] bg-[#27272a]/30 border border-[#1f1f22] text-[16px] leading-[1.7] text-zinc-400 font-medium transition group-hover:bg-[#27272a]/40 group-hover:text-zinc-300">
              Can you find all references to "evolutionary algorithms" in the provided PDFs and compare their performance metrics against the standard RL approach mentioned in Paper #3?
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#52525b] px-4 opacity-40 group-hover:opacity-100 transition duration-300">
              10:43 AM · SENT
            </p>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="flex gap-8">
          <div className="w-12 h-12 rounded-[1.25rem] bg-[#a87ffb] flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
            <Sparkles size={24} className="text-white" />
          </div>
          <div className="flex items-center gap-5 p-6 rounded-[2.5rem] bg-[#141416]/50 border border-[#1f1f22] italic text-[14px] text-[#a1a1aa] font-medium">
             <div className="flex gap-1.5">
               <span className="w-2 h-2 rounded-full bg-white opacity-20 animate-bounce [animation-delay:-0.3s]"></span>
               <span className="w-2 h-2 rounded-full bg-white opacity-40 animate-bounce [animation-delay:-0.15s]"></span>
               <span className="w-2 h-2 rounded-full bg-white opacity-60 animate-bounce"></span>
             </div>
             Analyzing 4 source documents...
          </div>
        </div>
      </div>

      {/* Analysis Panels */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-6 border-t border-[#1f1f22]">
        {/* Active Sources */}
        <div className="md:col-span-5 p-10 rounded-[2.5rem] border border-[#1f1f22] space-y-8 bg-[#141416]/50 transition hover:bg-[#18181b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#34d399]/10 flex items-center justify-center text-[#34d399] border border-[#34d399]/20 shadow-inner">
              <FileText size={20} />
            </div>
            <h3 className="text-lg font-black tracking-tight text-white uppercase italic tracking-widest text-sm">Active Sources</h3>
          </div>
          <div className="space-y-3">
             {[
               { name: 'paper_evolutionary_nas.pdf', size: '2.4MB' },
               { name: 'rl_comparison_study.pdf', size: '1.8MB' }
             ].map((s, i) => (
               <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-black/30 border border-[#27272a] transition hover:border-[#a87ffb]/30 group">
                 <span className="text-[13px] text-zinc-400 font-medium group-hover:text-white transition">{s.name}</span>
                 <span className="text-[10px] font-black uppercase text-[#52525b] tracking-widest">{s.size}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Semantic Overlap */}
        <div className="md:col-span-7 p-10 rounded-[2.5rem] border border-[#1f1f22] space-y-8 bg-[#141416]/50 transition hover:bg-[#18181b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#a87ffb]/10 flex items-center justify-center text-[#a87ffb] border border-[#a87ffb]/20 shadow-inner">
              <BarChart3 size={20} />
            </div>
            <h3 className="text-lg font-black tracking-tight text-white uppercase italic tracking-widest text-sm">Semantic Overlap</h3>
          </div>
          <div className="space-y-6">
            <div className="h-28 flex items-end gap-5 px-6 pb-2">
              {[35, 20, 75, 95, 45, 100, 30].map((h, i) => {
                const colors = ['#27272a', '#27272a', '#c0a3ff', '#a87ffb', '#27272a', '#27272a', '#34d399']
                return (
                  <div key={i} className="flex-1 rounded-xl transition-all hover:brightness-110 shadow-sm"
                       style={{ 
                         height: `${h}%`, 
                         backgroundColor: colors[i]
                       }}></div>
                )
              })}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#52525b] text-center opacity-40">Latent Space Distribution</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="relative pt-6 group">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.4em] text-[#52525b] opacity-30 group-focus-within:opacity-60 transition duration-500">
          PROPRIETARY AI ENGINE V4.2 // ENCRYPTED SCHOLARLY SESSION
        </div>
        <div className="relative flex items-center gap-5 p-4 pr-5 rounded-[3rem] bg-[#141416] border border-[#1f1f22] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.5)] transition-all group-focus-within:border-[#a87ffb]/50 group-focus-within:shadow-[0_0_80px_-20px_rgba(168,127,251,0.2)]">
          <button className="w-14 h-14 rounded-full flex items-center justify-center text-[#52525b] hover:text-white transition-colors duration-300 active:scale-95">
            <Paperclip size={24} />
          </button>
          <input 
            type="text" 
            placeholder="Command the Archivist..." 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-[#52525b] text-[16px] font-bold tracking-tight px-2"
          />
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full flex items-center justify-center text-[#52525b] hover:text-white transition-colors duration-300 active:scale-95">
              <Mic size={24} />
            </button>
            <button className="w-14 h-14 rounded-[1.5rem] bg-[#a87ffb] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(168,127,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
              <ArrowUp size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
