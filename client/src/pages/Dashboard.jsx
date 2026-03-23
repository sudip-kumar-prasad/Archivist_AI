import { 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  FileSearch, 
  Smile, 
  ArrowRight,
  Clock,
  Share2,
  Download,
  Eye,
  TrendingUp,
  Database,
  ArrowUpRight
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-16 pb-20">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-[72px] font-black tracking-[-0.04em] text-white leading-[1.1]">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#52525b] opacity-80 pl-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.5)]"></span>
          SYSTEM READY • 4.0 QUANTUM CORE ACTIVE
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* AI Chat Card (2x1) */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[3.5rem] border border-[#1f1f22] p-12 transition-all hover:bg-[#18181b] bg-[#121214]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-10">
              <div className="w-20 h-20 rounded-[1.75rem] flex items-center justify-center bg-[#a87ffb]/10 border border-[#a87ffb]/20">
                <MessageSquare size={40} className="text-[#a87ffb]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-white tracking-tighter">AI Chat</h3>
                <p className="text-[18px] text-[#a1a1aa] leading-relaxed max-w-[420px] font-medium opacity-80">
                  Deep academic inquiries and conversational study assistance with contextual memory.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between mt-16">
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#52525b]">ACTIVE PROTOCOL: GPT-4O</span>
              <div className="w-16 h-16 rounded-full border border-[#27272a] flex items-center justify-center transition group-hover:bg-[#a87ffb] group-hover:border-transparent group-hover:shadow-[0_10px_40px_rgba(168,127,251,0.3)] duration-500">
                <ArrowRight size={28} className="text-zinc-500 group-hover:text-white transition duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Summarizer Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
                <FileText size={28} className="text-[#34d399]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight">Summarizer</h3>
                <p className="text-[15px] text-[#a1a1aa] leading-relaxed font-medium opacity-80">
                  Condense long papers into actionable bullet points.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#34d399] bg-[#34d399]/5 px-4 py-2 rounded-full border border-[#34d399]/10">READY FOR UPLOAD</span>
            </div>
          </div>
        </div>

        {/* Q&A Generator Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                <HelpCircle size={28} className="text-[#fbbf24]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight leading-tight">Q&A Generator</h3>
                <p className="text-[15px] text-[#a1a1aa] leading-relaxed font-medium opacity-80">
                  Create flashcards and exam questions from your notes.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#fbbf24] bg-[#fbbf24]/5 px-4 py-2 rounded-full border border-[#fbbf24]/10">3 MODES AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Resume Analyzer Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="space-y-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-zinc-800/20 border border-white/5 shadow-inner">
              <FileSearch size={28} className="text-[#a1a1aa]" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white tracking-tight leading-tight">Resume Analyzer</h3>
              <p className="text-[15px] text-[#a1a1aa] leading-relaxed font-medium opacity-80">
                Optimize your career path with AI-driven feedback.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#52525b]">ATS COMPLIANT</span>
          </div>
        </div>

        {/* Meme Generator Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="space-y-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
               <Smile size={28} className="text-[#34d399]" />
            </div>
            <div className="space-y-4">
               <h3 className="text-3xl font-black text-white tracking-tight leading-tight">Meme Generator</h3>
               <p className="text-[15px] text-[#a1a1aa] leading-relaxed font-medium opacity-80">
                Relieve study stress with academically accurate memes.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#34d399] bg-[#34d399]/5 px-4 py-2 rounded-full border border-[#34d399]/10">GENERATE NOW</span>
          </div>
        </div>

        {/* Learning Velocity Card (2x1) */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[3.5rem] border border-[#1f1f22] p-12 transition-all bg-[#121214]">
          <div className="flex flex-col h-full gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[12px] font-black tracking-[0.3em] uppercase text-[#52525b]">LEARNING VELOCITY</h3>
              <TrendingUp size={20} className="text-[#52525b]" />
            </div>
            
            <div className="flex-1 flex items-end gap-6 h-40 mb-10 px-4">
              {[30, 50, 40, 70, 45, 85, 65, 95, 80].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-xl transition-all hover:brightness-125 ${i === 7 ? 'bg-[#a87ffb] shadow-[0_0_30px_rgba(168,127,251,0.3)]' : 'bg-[#1f1f22]'}`}
                     style={{ height: `${h}%` }}></div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[#1f1f22]">
              <div className="space-y-1">
                <p className="text-5xl font-black text-white tracking-tighter">14.2h</p>
                <p className="text-[11px] text-[#52525b] uppercase tracking-[0.2em] font-black">Session time this week</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-3xl font-black text-[#34d399] tracking-tight">+24%</p>
                <p className="text-[11px] text-[#52525b] uppercase tracking-[0.2em] font-black">Efficiency growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Recent Archives */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center gap-4">
             <Clock className="text-[#a87ffb]" size={28} />
             <h2 className="text-3xl font-black text-white tracking-tight italic">
               Recent Archives
             </h2>
          </div>
          
          <div className="space-y-5">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-8 rounded-[2.5rem] bg-[#121214] border border-[#1f1f22] transition hover:bg-[#18181b] group shadow-sm">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-[#18181b] border border-[#27272a] group-hover:bg-[#27272a] transition duration-300">
                    <item.icon size={28} className="text-[#a1a1aa]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[18px] font-bold text-white tracking-tight group-hover:text-[#a87ffb] transition">{item.name}</h4>
                    <p className="text-[13px] text-[#52525b] font-medium opacity-80">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[#52525b]">
                  {i === 1 ? <ArrowUpRight size={24} className="hover:text-white transition cursor-pointer" /> : (i === 2 ? <Eye size={24} className="hover:text-white transition cursor-pointer" /> : <>
                    <Download size={22} className="hover:text-white transition cursor-pointer" />
                    <Share2 size={22} className="hover:text-white transition cursor-pointer" />
                  </>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-12 pt-4">
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-white tracking-tight px-2">Archive Insights</h2>
            <div className="rounded-[3rem] border border-[#1f1f22] p-12 space-y-10 relative overflow-hidden bg-[#121214] group shadow-inner">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#a87ffb] opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-[18px] leading-[1.7] italic text-zinc-300 font-medium tracking-tight">
                "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
              </p>
              <button className="flex items-center gap-4 text-[#a87ffb] font-black text-[12px] uppercase tracking-[0.25em] transition-all hover:gap-6 group/btn">
                VIEW MODULE <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="p-12 rounded-[3rem] border border-[#1f1f22] bg-[#121214] space-y-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[#1f1f22] pointer-events-none">
              <Database size={120} className="rotate-12 opacity-50" />
            </div>
            
            <div className="space-y-2 relative z-10">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#52525b]">YOUR ARCHIVE SPACE</h4>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between text-[15px] font-black">
                <span className="text-[#52525b] uppercase tracking-widest">STORAGE USED</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-2.5 w-full bg-[#1f1f22] rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full bg-gradient-to-r from-[#a87ffb] to-[#c0a3ff] shadow-[0_0_20px_rgba(168,127,251,0.5)]" style={{ width: '82%' }}></div>
              </div>
            </div>

            <button className="w-full h-16 text-[11px] font-black uppercase tracking-[0.3em] border border-[#1f1f22] rounded-2xl transition hover:bg-white/5 hover:text-white text-zinc-500 relative z-10 active:scale-95 duration-200">
              Manage Storage
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-24 pb-10 flex items-center justify-between border-t border-[#1f1f22]">
        <div className="flex items-center gap-14 text-[11px] font-black uppercase tracking-[0.4em] text-[#52525b] opacity-60">
          <span>© 2024 ARCHIVIST AI</span>
          <span>PROTOCOL V.2.1</span>
          <span>RESOURCES</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#34d399] shadow-[0_0_20px_rgba(52,211,153,0.2)] bg-[#34d399]/5 px-5 py-2.5 rounded-full border border-[#34d399]/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></span>
          SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  )
}
