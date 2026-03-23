import { 
  Upload, 
  Copy, 
  Download, 
  Share2, 
  ChevronRight,
  Bot,
  Columns,
  Sparkles
} from 'lucide-react'

export default function Summarizer() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-6xl font-black tracking-tight text-white leading-tight">Summarizer</h1>
        <p className="text-[11px] tracking-[0.3em] uppercase font-black text-[#52525b]">
          DIGITAL CONTENT DISTILLATION ENGINE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
        {/* Left Column (Upload & Controls) */}
        <div className="lg:col-span-4 space-y-8">
          {/* Drop Area */}
          <div className="rounded-[3rem] border-2 border-dashed border-[#1f1f22] p-16 flex flex-col items-center justify-center text-center space-y-10 bg-[#141416]/50 transition hover:bg-[#18181b] group">
            <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center bg-zinc-800/10 border border-white/5 shadow-inner group-hover:scale-110 transition-transform">
              <Upload size={32} className="text-zinc-600 opacity-60 group-hover:text-white transition" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white tracking-tight">Drop your thesis</h3>
              <p className="text-[14px] text-[#52525b] leading-relaxed max-w-[240px] mx-auto font-medium">
                PDF, DOCX, or TXT up to 50MB. The Archivist will handle the rest.
              </p>
            </div>
            <button className="px-12 py-4 rounded-full border border-[#27272a] text-[11px] font-black uppercase tracking-widest text-[#a1a1aa] transition hover:bg-white/5 hover:text-white hover:border-zinc-700">
              Select Files
            </button>
          </div>

          {/* Parameters */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 space-y-10 bg-[#141416]/50">
            <h3 className="text-[11px] font-black tracking-widest uppercase text-[#52525b]">PROCESSING PARAMETERS</h3>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between group cursor-pointer">
                <span className="text-[15px] font-bold text-zinc-400 group-hover:text-white transition">Summary Length</span>
                <span className="text-[11px] font-black text-[#34d399] uppercase tracking-[0.2em] bg-[#34d399]/10 px-3 py-1.5 rounded-lg border border-[#34d399]/20">CONCISE</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <span className="text-[15px] font-bold text-zinc-400 group-hover:text-white transition">Tone</span>
                <span className="text-[11px] font-black text-[#a87ffb] uppercase tracking-[0.2em] bg-[#a87ffb]/10 px-3 py-1.5 rounded-lg border border-[#a87ffb]/20">ACADEMIC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-bold text-zinc-400">Highlight Key Terms</span>
                <div className="w-12 h-6 bg-[#a87ffb] rounded-full relative cursor-pointer shadow-[0_0_15px_rgba(168,127,246,0.3)]">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Summary Output) */}
        <div className="lg:col-span-8 rounded-[3.5rem] border border-[#1f1f22] p-16 space-y-16 relative overflow-hidden bg-[#141416]/80 backdrop-blur-md">
          {/* Output Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex items-start gap-8">
              <div className="w-16 h-16 rounded-[1.25rem] bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center p-4 shadow-inner">
                 <div className="text-[10px] font-black text-[#34d399] leading-tight text-center uppercase tracking-widest">ACTIVE<br/>STATE</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-5xl font-black tracking-tight text-white leading-[1.1]">Transcendental<br/>Idealism.pdf</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#52525b]">SCHOLARLY DISTILLATION COMPLETE</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] hover:bg-[#27272a] transition shadow-inner border border-white/5 text-zinc-500 hover:text-white"><Copy size={18} /></button>
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] hover:bg-[#27272a] transition shadow-inner border border-white/5 text-zinc-500 hover:text-white"><Download size={18} /></button>
              <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] hover:bg-[#27272a] transition shadow-inner border border-white/5 text-zinc-500 hover:text-white"><Share2 size={18} /></button>
            </div>
          </div>

          {/* Summary Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#52525b]">ABSTRACT CORE</h4>
              <p className="text-2xl leading-[1.6] text-zinc-300 font-medium tracking-tight opacity-90">
                This analysis examines the core tenets of Kant's Transcendental Idealism, specifically focusing on the distinction between phenomena and noumena. The AI has identified that space and time are not properties of things-in-themselves, but are instead formal conditions of our sensibility.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-10 rounded-[2.5rem] bg-black/20 border border-[#1f1f22] space-y-6 hover:bg-black/30 transition group">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#52525b] group-hover:text-[#a87ffb] transition">KEY ARGUMENT 01</h4>
                <p className="text-[16px] leading-relaxed text-zinc-400 font-medium">The mind actively structures experience through a priori categories, rather than passively receiving data from the external world.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-black/20 border border-[#1f1f22] space-y-6 hover:bg-black/30 transition group">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#52525b] group-hover:text-[#34d399] transition">KEY ARGUMENT 02</h4>
                 <p className="text-[16px] leading-relaxed text-zinc-400 font-medium">Objects must conform to our knowledge, reversing the traditional assumption that our knowledge must conform to objects.</p>
              </div>
            </div>

            <section className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#52525b]">DETAILED DISTILLATION</h4>
              <p className="text-[16px] leading-relaxed text-zinc-500 font-medium">
                The text proceeds to define the "Synthetic A Priori," which Kant suggests is the basis for mathematical and scientific certainty. By summarizing the 40-page document, the assistant has isolated the following critical observations:
              </p>
              <ul className="space-y-8">
                {[
                  "Space and time are subjective frameworks required for human perception.",
                  "The 'Thing-in-itself' remains fundamentally inaccessible to the human cognitive apparatus.",
                  "Causality is a category of the understanding, not an observation derived from pure experience."
                ].map((item, i) => (
                  <li key={i} className="flex gap-8 group">
                    <span className="text-[14px] font-black text-[#a87ffb] tracking-tighter opacity-100 mt-1">0{i+1}.</span>
                    <span className="text-xl text-zinc-300 font-bold leading-[1.5] group-hover:text-white transition duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tags */}
            <div className="flex items-center gap-3 flex-wrap pt-10 border-t border-[#1f1f22]">
               {['#Philosophy', '#Kant', '#Epistemology', '#18th_Century'].map(t => (
                 <span key={t} className="px-6 py-2 rounded-full bg-[#18181b] border border-[#27272a] text-[11px] font-black text-[#52525b] uppercase tracking-widest hover:border-[#a87ffb]/40 hover:text-[#a87ffb] transition cursor-pointer">{t}</span>
               ))}
            </div>
          </div>

          {/* AI Floating Icon */}
          <div className="absolute top-[40%] -right-8 w-20 h-20 rounded-[2.5rem] bg-[#a87ffb] text-white flex items-center justify-center shadow-[0_20px_60px_rgba(168,127,251,0.4)] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 group rotate-12 hover:rotate-0">
            <Bot size={40} />
          </div>

          {/* Footer Stats */}
          <div className="flex items-center justify-between pt-16 text-[10px] font-black uppercase tracking-[0.3em] text-[#52525b] opacity-40">
            <span>ANALYSIS COMPLETE IN 2.4S</span>
            <span>CONFIDENCE SCORE: 98.4%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
