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
  Info,
  Edit3
} from 'lucide-react'

export default function QAGenerator() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#52525b]">KNOWLEDGE EXTRACTION ENGINE</p>
        <h1 className="text-7xl font-black tracking-tight text-white leading-tight">Q&A Generator</h1>
        <p className="text-[17px] text-[#a1a1aa] leading-relaxed max-w-3xl font-medium opacity-80">
          Synthesize comprehensive study material into interactive quizzes and flashcards using high-fidelity neural processing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (Input & Config) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="rounded-[3rem] border border-[#1f1f22] p-10 space-y-10 bg-[#141416]/50 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-[11px] font-black tracking-widest uppercase text-[#52525b]">SOURCE MATERIAL</h3>
              <div className="relative group">
                <textarea 
                  placeholder="Paste textbook excerpts, lecture notes, or research papers here..." 
                  className="w-full h-56 bg-black/30 rounded-[2rem] p-8 text-[15px] border border-[#27272a] outline-none transition-all group-focus-within:border-[#a87ffb]/50 group-focus-within:ring-4 group-focus-within:ring-[#a87ffb]/5 resize-none text-zinc-300 font-medium placeholder-zinc-800"
                ></textarea>
                <div className="absolute bottom-6 right-6 flex items-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-zinc-500 hover:text-white transition shadow-lg active:scale-90">
                    <Mic size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#18181b] border border-[#27272a] flex items-center justify-center text-zinc-500 hover:text-white transition shadow-lg active:scale-90">
                    <Link2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-[10px] font-black tracking-widest uppercase text-[#52525b]">DIFFICULTY LEVEL</h3>
                <div className="px-5 py-4 rounded-2xl bg-[#18181b] border border-[#27272a] text-[13px] font-bold text-white flex items-center justify-between group cursor-pointer hover:border-[#a87ffb]/30 transition duration-300">
                  <span className="opacity-80 font-bold">Junior (Advanced)</span>
                  <ChevronRight size={16} className="text-[#a87ffb]" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-black tracking-widest uppercase text-[#52525b]">QUESTION COUNT</h3>
                <div className="px-5 py-4 rounded-2xl bg-[#18181b] border border-[#27272a] text-lg font-black text-white flex items-center justify-center opacity-80">
                   10
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] font-black tracking-widest uppercase text-[#52525b]">FORMAT LOGIC</h3>
              <div className="grid grid-cols-2 gap-3 text-white">
                 {[
                   { label: 'Multiple Choice', active: true },
                   { label: 'True/False', active: false },
                   { label: 'Short Answer', active: false },
                   { label: 'Conceptual Gap-Fill', active: false }
                 ].map(f => (
                   <button key={f.label} className={`py-4 px-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${f.active ? 'bg-[#a87ffb] text-white shadow-[0_8px_25px_rgba(168,127,251,0.25)]' : 'bg-[#18181b] border border-[#27272a] text-[#52525b] hover:text-zinc-300 hover:border-zinc-700'}`}>
                     {f.label}
                   </button>
                 ))}
              </div>
            </div>

            <button className="w-full py-6 rounded-[1.75rem] bg-[#a87ffb] text-white font-black text-[13px] uppercase tracking-[0.25em] shadow-[0_15px_40px_rgba(168,127,246,0.3)] transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95 duration-300">
              Synthesize Questions
            </button>
          </div>

          {/* AI Usage Panel */}
          <div className="p-10 rounded-[3rem] border border-[#1f1f22] space-y-8 bg-[#141416]/50">
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-[#34d399]" />
              <h3 className="text-[11px] font-black uppercase tracking-widest text-[#52525b]">AI USAGE ESTIMATE</h3>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-[#18181b] rounded-full overflow-hidden">
                <div className="h-full bg-[#34d399] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.4)]" style={{ width: '14%' }}></div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#52525b]">
                <span>Est. Tokens: 4,120</span>
                <span>Daily Quota: 14% used</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable Quiz Session) */}
        <div className="lg:col-span-8 space-y-8 relative">
          <div className="rounded-[4rem] border border-[#1f1f22] overflow-hidden relative bg-[#141416]/80 backdrop-blur-md">
            
            {/* Session Toolbar */}
            <div className="p-12 border-b border-[#1f1f22] flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight text-white leading-tight">Generated Session: <span className="text-[#a87ffb]">Quantum Dynamics 101</span></h2>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#52525b]">12 QUESTIONS FOUND • 4.2S PROCESSING TIME</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] border border-[#27272a] hover:bg-[#27272a] transition shadow-inner text-zinc-500 hover:text-white"><Download size={20} /></button>
                <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#18181b] border border-[#27272a] hover:bg-[#27272a] transition shadow-inner text-zinc-500 hover:text-white"><Share2 size={20} /></button>
              </div>
            </div>

            {/* Questions List */}
            <div className="p-12 space-y-16 max-h-[800px] overflow-y-auto pb-48 custom-scrollbar">
              {/* Question Item 1 */}
              <div className="space-y-10 animate-fade-in group relative">
                <div className="absolute -left-12 top-0 bottom-0 w-1.5 bg-[#a87ffb] rounded-full opacity-60 group-hover:opacity-100 transition-opacity translate-y-2"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#52525b] py-2.5 px-6 rounded-full border border-[#27272a] bg-[#18181b]/50">QUESTION 01</span>
                  <button className="text-zinc-600 hover:text-white transition active:scale-90"><Edit3 size={20} /></button>
                </div>
                <h3 className="text-3xl font-black leading-tight text-white pr-16 tracking-tight">
                  How does the Pauli Exclusion Principle apply to identical fermions occupying the same quantum state?
                </h3>
                
                <div className="space-y-4">
                  {[
                    "They must have opposite spin orientations.",
                    "The principle only applies to bosons in low temperature states.",
                    "Identical fermions can occupy the same state if their energy levels are synchronized."
                  ].map((opt, i) => (
                    <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-300 group/opt cursor-pointer flex items-center gap-6 ${i === 0 ? 'border-[#a87ffb]/40 bg-[#a87ffb]/10 shadow-[inset_0_0_30px_rgba(168,127,246,0.05)]' : 'border-[#1f1f22] bg-black/30 hover:bg-[#18181b] hover:border-[#27272a]'}`}>
                       <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${i === 0 ? 'border-[#a87ffb] bg-[#a87ffb]/20 shadow-[0_0_15px_rgba(168,127,246,0.4)]' : 'border-[#27272a] opacity-40 group-hover/opt:border-zinc-500'}`}>
                         {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg"></div>}
                       </div>
                       <span className={`text-[17px] leading-relaxed transition-colors duration-300 ${i === 0 ? 'text-white font-bold' : 'text-zinc-500 font-medium group-hover/opt:text-zinc-300'}`}>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

               {/* Question Item 2 placeholder */}
               <div className="space-y-10 opacity-40 blur-[1px] hover:blur-0 transition-all duration-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#52525b] py-2.5 px-6 rounded-full border border-[#1f1f22]">QUESTION 02</span>
                  </div>
                  <ChevronRight size={24} className="text-[#52525b]" />
                </div>
                <h3 className="text-2xl font-black leading-tight text-white tracking-tight">Explore the relationship between wavelength and momentum in De Broglie's...</h3>
                <div className="flex items-center gap-3 py-6 px-10 rounded-[2rem] bg-black/20 border border-[#1f1f22]">
                   <div className="w-2 h-2 rounded-full bg-[#52525b]"></div>
                   <div className="h-2 flex-1 bg-[#1f1f22] rounded-full overflow-hidden truncate"></div>
                </div>
              </div>
            </div>

            {/* Sticky Actions Bar */}
            <div className="absolute bottom-12 left-12 right-12 flex items-center justify-center pointer-events-none">
               <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-4 flex gap-6 shadow-[0_30px_100px_rgba(0,0,0,0.8)] pointer-events-auto">
                 <button className="flex items-center gap-4 px-10 py-5 rounded-[3rem] bg-[#18181b] hover:bg-[#27272a] text-[12px] font-black uppercase tracking-[0.2em] text-[#a1a1aa] transition active:scale-95 group">
                   <Save size={20} className="group-hover:text-white transition" /> Save Draft
                 </button>
                 <button className="flex items-center gap-4 px-14 py-5 rounded-[3rem] bg-gradient-to-r from-[#a87ffb] to-[#c0a3ff] text-white text-[12px] font-black uppercase tracking-[0.25em] shadow-[0_15px_40px_rgba(168,127,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
                   <Play size={20} fill="white" /> Start Quiz
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <footer className="pt-24 pb-8 flex items-center justify-between border-t border-[#1f1f22]">
        <div className="flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-[#52525b]">
           <span>© 2024 ARCHIVIST AI</span>
           <span>PROTOCOL v.2.1</span>
           <span>RESOURCES</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#34d399] opacity-80">
           <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
           SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  )
}
