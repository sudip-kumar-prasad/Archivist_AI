import { 
  Upload, 
  Copy, 
  Download, 
  Share2, 
  ChevronRight,
  Bot,
  Columns
} from 'lucide-react'

export default function Summarizer() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-10 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-white">Summarizer</h1>
        <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-700 opacity-40">
          DIGITAL CONTENT DISTILLATION ENGINE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left Column (Upload & Controls) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Drop Area */}
          <div className="rounded-[2.5rem] border border-dashed border-archivist-border p-12 flex flex-col items-center justify-center text-center space-y-8 bg-archivist-card">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-zinc-800/50 border border-white/5 shadow-inner">
              <Upload size={24} className="text-zinc-500 opacity-60" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Drop your thesis</h3>
              <p className="text-[13px] text-zinc-600 opacity-40 leading-relaxed max-w-[200px] mx-auto">
                PDF, DOCX, or TXT up to 50MB. The Archivist will handle the rest.
              </p>
            </div>
            <button className="px-10 py-3.5 rounded-full border border-white/10 text-xs font-black uppercase tracking-widest text-zinc-400 transition hover:bg-white/5">
              Select Files
            </button>
          </div>

          {/* Parameters */}
          <div className="rounded-[2.5rem] border border-archivist-border p-8 space-y-8 bg-archivist-card text-white">
            <h3 className="text-[10px] font-black tracking-widest uppercase text-zinc-700 opacity-40">Processing Parameters</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400 opacity-80">Summary Length</span>
                <span className="text-[11px] font-bold text-archivist-green uppercase tracking-wider">Concise</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400 opacity-80">Tone</span>
                <span className="text-[11px] font-bold text-archivist-purple uppercase tracking-wider">Academic</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-400 opacity-80">Highlight Key Terms</span>
                <div className="w-10 h-5 bg-archivist-purple rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Summary Output) */}
        <div className="lg:col-span-8 rounded-[3rem] border border-archivist-border p-12 space-y-12 relative overflow-hidden bg-archivist-card text-white">
          {/* Output Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-archivist-green/10 border border-archivist-green/20 flex items-center justify-center p-4">
                 <div className="text-[10px] font-black text-archivist-green leading-none text-center uppercase">ACTIVE<br/>STATE</div>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Transcendental<br/>Idealism.pdf</h2>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition shadow-sm border border-white/5"><Copy size={16} /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition shadow-sm border border-white/5"><Download size={16} /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition shadow-sm border border-white/5"><Share2 size={16} /></button>
            </div>
          </div>

          {/* Summary Content */}
          <div className="space-y-10">
            <section className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-700 opacity-30">Abstract Core</h4>
              <p className="text-lg leading-relaxed text-zinc-300 opacity-80">
                This analysis examines the core tenets of Kant's Transcendental Idealism, specifically focusing on the distinction between phenomena and noumena. The AI has identified that space and time are not properties of things-in-themselves, but are instead formal conditions of our sensibility.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 space-y-4">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700 opacity-30">Key Argument 01</h4>
                <p className="text-sm leading-relaxed text-zinc-400 opacity-60">The mind actively structures experience through a priori categories, rather than passively receiving data from the external world.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 space-y-4">
                 <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700 opacity-30">Key Argument 02</h4>
                 <p className="text-sm leading-relaxed text-zinc-400 opacity-60">Objects must conform to our knowledge, reversing the traditional assumption that our knowledge must conform to objects.</p>
              </div>
            </div>

            <section className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-700 opacity-30">Detailed Distillation</h4>
              <p className="text-sm leading-relaxed text-zinc-400 opacity-60">
                The text proceeds to define the "Synthetic A Priori," which Kant suggests is the basis for mathematical and scientific certainty. By summarizing the 40-page document, the assistant has isolated the following critical observations:
              </p>
              <ul className="space-y-4">
                {[
                  "Space and time are subjective frameworks required for human perception.",
                  "The 'Thing-in-itself' remains fundamentally inaccessible to the human cognitive apparatus.",
                  "Causality is a category of the understanding, not an observation derived from pure experience."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[11px] font-black text-archivist-green tracking-tighter">0{i+1}.</span>
                    <span className="text-sm text-zinc-300 opacity-80 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap pt-6 border-t border-zinc-800/50">
               {['#Philosophy', '#Kant', '#Epistemology', '#18th_Century'].map(t => (
                 <span key={t} className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-bold text-zinc-700 opacity-40 hover:opacity-100 transition cursor-pointer">{t}</span>
               ))}
            </div>
          </div>

          {/* AI Floating Icon */}
          <div className="absolute bottom-10 right-10 w-12 h-12 rounded-2xl bg-archivist-purple text-white flex items-center justify-center shadow-xl shadow-purple-900/40 cursor-pointer hover:scale-110 transition">
            <Bot size={22} />
          </div>

          {/* Footer Stats */}
          <div className="flex items-center justify-between pt-10 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-700 opacity-20">
            <span>Analysis Complete in 2.4s</span>
            <span>Confidence Score: 98.4%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
