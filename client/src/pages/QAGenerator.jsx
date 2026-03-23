import { 
  FileText, 
  Mic, 
  Link2, 
  Download, 
  Share2, 
  ChevronRight,
  Play,
  Save,
  Zap,
  Info
} from 'lucide-react'

export default function QAGenerator() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-10 pb-12">
      {/* Header */}
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 opacity-30 mb-2">KNOWLEDGE EXTRACTION ENGINE</p>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-white">Q&A Generator</h1>
        <p className="text-[15px] text-zinc-400 opacity-60 leading-relaxed max-w-2xl">
          Synthesize comprehensive study material into interactive quizzes and flashcards using high-fidelity neural processing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (Input & Config) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-[2.5rem] border border-archivist-border p-8 space-y-8 bg-archivist-card">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black tracking-widest uppercase text-zinc-700 opacity-40">Source Material</h3>
              <div className="relative group">
                <textarea 
                  placeholder="Paste textbook excerpts, lecture notes, or research papers here..." 
                  className="w-full h-48 bg-black/20 rounded-3xl p-6 text-sm border border-white/5 outline-none transition group-focus-within:border-archivist-purple/40 resize-none text-zinc-300 opacity-40 placeholder-zinc-700"
                ></textarea>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 opacity-60 hover:opacity-100 transition shadow-lg">
                    <Mic size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-zinc-400 opacity-60 hover:opacity-100 transition shadow-lg">
                    <Link2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-[9px] font-black tracking-widest uppercase text-zinc-700 opacity-30">Difficulty Level</h3>
                <div className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/5 text-[11px] font-bold text-white flex items-center justify-between group cursor-pointer hover:border-white/10 transition">
                  <span className="opacity-60 font-medium">Junior (Advanced)</span>
                  <ChevronRight size={14} className="text-zinc-500 opacity-40" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-[9px] font-black tracking-widest uppercase text-zinc-700 opacity-30">Question Count</h3>
                <div className="px-4 py-3 rounded-xl bg-zinc-900 border border-white/5 text-[11px] font-bold text-white opacity-60">
                   10
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[9px] font-black tracking-widest uppercase text-zinc-700 opacity-30">Format Logic</h3>
              <div className="grid grid-cols-2 gap-2 text-white">
                 {[
                   { label: 'Multiple Choice', active: true },
                   { label: 'True/False', active: false },
                   { label: 'Short Answer', active: false },
                   { label: 'Conceptual Gap-Fill', active: false }
                 ].map(f => (
                   <button key={f.label} className={`py-3.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider transition ${f.active ? 'bg-archivist-purple/10 text-archivist-purple border border-archivist-purple/20 shadow-[0_0_20px_-5px_rgba(168,127,246,0.3)]' : 'bg-black/20 border border-white/5 opacity-40 hover:opacity-100'}`}>
                     {f.label}
                   </button>
                 ))}
              </div>
            </div>

            <button className="w-full py-5 rounded-[1.5rem] bg-archivist-purple text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-purple-900/30 transition hover:scale-[1.02] hover:brightness-110 active:scale-98">
              Synthesize Questions
            </button>
          </div>

          {/* AI Usage Panel */}
          <div className="p-8 rounded-[2.5rem] border border-archivist-border space-y-6 bg-archivist-card">
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-archivist-green" />
              <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-700 opacity-40">AI Usage Estimate</h3>
            </div>
            <div className="space-y-2">
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-archivist-green rounded-full" style={{ width: '14%' }}></div>
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-zinc-700 opacity-30">
                <span>Est. Tokens: 4,120</span>
                <span>Daily Quota: 14% used</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable Quiz Session) */}
        <div className="lg:col-span-8 space-y-8 relative">
          <div className="rounded-[3rem] border border-archivist-border overflow-hidden relative bg-archivist-card">
            
            {/* Session Toolbar */}
            <div className="p-10 border-b border-zinc-800/50 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">Generated Session: <span className="text-archivist-purple">Quantum Dynamics 101</span></h2>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-700 opacity-30">12 questions found • 4.2s processing time</p>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 opacity-60">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition border border-white/5"><Download size={18} /></button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition border border-white/5"><Share2 size={18} /></button>
              </div>
            </div>

            {/* Questions List */}
            <div className="p-10 space-y-12 max-h-[700px] overflow-y-auto pb-48 scrollbar-hide">
              {/* Question Item 1 */}
              <div className="space-y-8 animate-fade-in group">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 opacity-40 py-2 px-4 rounded-full border border-white/5 bg-zinc-800/30">Question 01</span>
                  <button className="text-zinc-700 hover:text-white transition"><Play size={16} className="rotate-90" /></button>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-white pr-12">
                  How does the Pauli Exclusion Principle apply to identical fermions occupying the same quantum state?
                </h3>
                
                <div className="space-y-3">
                  {[
                    "They must have opposite spin orientations.",
                    "The principle only applies to bosons in low temperature states.",
                    "Identical fermions can occupy the same state if their energy levels are synchronized."
                  ].map((opt, i) => (
                    <div key={i} className={`p-6 rounded-[2rem] border transition group/opt cursor-pointer flex items-center gap-4 ${i === 0 ? 'border-archivist-purple/30 bg-archivist-purple/5 shadow-[inset_0_0_20px_rgba(168,127,246,0.05)]' : 'border-white/5 bg-zinc-900/40 hover:bg-zinc-800'}`}>
                       <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${i === 0 ? 'border-archivist-purple' : 'border-zinc-800 opacity-40'}`}>
                         {i === 0 && <div className="w-2 h-2 rounded-full bg-archivist-purple"></div>}
                       </div>
                       <span className={`text-[15px] transition ${i === 0 ? 'text-white opacity-100 font-medium' : 'text-zinc-500 opacity-60'}`}>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

               {/* Question Item 2 placeholder */}
               <div className="space-y-8 opacity-40">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 py-2 px-4 rounded-full border border-white/5">Question 02</span>
                  <ChevronRight size={18} className="translate-y-0.5 text-zinc-600" />
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">Explore the relationship between wavelength and...</h3>
              </div>
            </div>

            {/* Sticky Actions Bar */}
            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-center pointer-events-none">
               <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-3 flex gap-4 shadow-2xl pointer-events-auto">
                 <button className="flex items-center gap-3 px-8 py-4 rounded-[2rem] bg-zinc-800 hover:bg-zinc-700 text-xs font-black uppercase tracking-widest text-zinc-400 transition">
                   <Save size={16} /> Save Draft
                 </button>
                 <button className="flex items-center gap-3 px-10 py-4 rounded-[2rem] bg-archivist-purple text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-purple-900/40 hover:scale-105 active:scale-95 transition">
                   <Play size={16} fill="white" /> Start Quiz
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="pt-20 pb-8 flex items-center justify-between border-t border-zinc-800/50">
        <div className="flex items-center gap-10 text-[10px] font-bold tracking-widest text-zinc-700 opacity-30 uppercase">
           <span>© 2024 ARCHIVIST AI</span>
           <span>PROTOCOL v.2.1</span>
           <span>RESOURCES</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-archivist-green opacity-80 uppercase">
           <span className="w-1.5 h-1.5 rounded-full bg-archivist-green animate-pulse"></span>
           SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  )
}
