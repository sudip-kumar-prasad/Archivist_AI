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
      <div className="space-y-4">
        <h1 className="text-72px font-black tracking-tight text-white leading-[1.1]">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#52525b]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.5)]"></span>
          SYSTEM READY • 4.0 QUANTUM CORE ACTIVE
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Large AI Chat Card */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[3.5rem] border border-[#1f1f22] p-12 transition-all hover:bg-[#18181b] bg-[#121214]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-10">
              <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center bg-[#a87ffb]/10 border border-[#a87ffb]/20">
                <MessageSquare size={36} className="text-[#a87ffb]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-white tracking-tight">AI Chat</h3>
                <p className="text-[17px] text-zinc-400 leading-relaxed max-w-[420px] font-medium">
                  Deep academic inquiries and conversational study assistance with contextual memory.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between mt-16">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-800">ACTIVE PROTOCOL: GPT-4O</span>
              <div className="w-14 h-14 rounded-full border border-[#27272a] flex items-center justify-center transition group-hover:bg-[#a87ffb] group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(168,127,251,0.25)] duration-300">
                <ArrowRight size={24} className="text-zinc-500 group-hover:text-white transition duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Medium Summarizer Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
                <FileText size={28} className="text-[#34d399]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight">Summarizer</h3>
                <p className="text-[15px] text-zinc-400 leading-relaxed font-bold">
                  Condense long papers into actionable bullet points.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#34d399] bg-[#34d399]/10 px-4 py-2 rounded-full border border-[#34d399]/20 font-black">READY FOR UPLOAD</span>
            </div>
          </div>
        </div>

        {/* Medium Q&A Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                <HelpCircle size={28} className="text-[#fbbf24]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight">Q&A Generator</h3>
                <p className="text-[15px] text-zinc-400 leading-relaxed font-bold">
                  Create flashcards and exam questions from your notes.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#fbbf24] bg-[#fbbf24]/10 px-4 py-2 rounded-full border border-[#fbbf24]/20 font-black">3 MODES AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Small Resume Analyzer Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="space-y-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-zinc-800/30 border border-white/5 shadow-inner">
              <FileSearch size={24} className="text-zinc-600" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white tracking-tight">Resume Analyzer</h3>
              <p className="text-[15px] text-zinc-500 leading-relaxed font-bold">
                Optimize your career path with AI-driven feedback.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-800 font-black">ATS COMPLIANT</span>
          </div>
        </div>

        {/* Small Meme Generator Card */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-[#1f1f22] p-10 transition-all bg-[#121214] hover:bg-[#18181b]">
          <div className="space-y-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
               <Smile size={24} className="text-[#34d399]" />
            </div>
            <div className="space-y-4">
               <h3 className="text-2xl font-black text-white tracking-tight">Meme Generator</h3>
               <p className="text-[15px] text-zinc-500 leading-relaxed font-bold">
                Relieve study stress with academically accurate memes.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#34d399] bg-[#34d399]/10 px-4 py-2 rounded-full border border-[#34d399]/20 font-black">GENERATE NOW</span>
          </div>
        </div>

        {/* Learning Velocity Card */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[3.5rem] border border-[#1f1f22] p-12 transition-all bg-[#121214]">
          <div className="flex flex-col h-full gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-800">LEARNING VELOCITY</h3>
              <TrendingUp size={20} className="text-zinc-800" />
            </div>
            
            <div className="flex-1 flex items-end gap-6 h-40 mb-10 px-4">
              {[30, 50, 40, 70, 45, 85, 65, 95, 80].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-xl transition-all hover:brightness-125 ${i === 7 ? 'bg-[#a87ffb] shadow-[0_0_25px_rgba(168,127,251,0.3)]' : 'bg-[#18181b] border border-white/5'}`}
                     style={{ height: `${h}%` }}></div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[#1f1f22]">
              <div className="space-y-1">
                <p className="text-5xl font-black text-white tracking-tighter">14.2h</p>
                <p className="text-[11px] text-zinc-800 uppercase tracking-[0.2em] font-black">Session time this week</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-3xl font-black text-[#34d399] tracking-tight">+24%</p>
                <p className="text-[11px] text-zinc-800 uppercase tracking-[0.2em] font-black">Efficiency growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Recent Archives */}
        <div className="lg:col-span-8 space-y-12">
          <div className="flex items-center gap-5 group cursor-pointer">
             <div className="w-1.5 h-10 rounded-full bg-[#a87ffb] shadow-[0_0_15px_rgba(168,127,251,0.3)]"></div>
             <h2 className="text-4xl font-black text-white tracking-tight italic flex items-center gap-4">
               <Clock className="text-zinc-700" size={32} />
               Recent Archives
             </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-8 pr-12 rounded-[3rem] bg-[#121214] border border-[#1f1f22] transition hover:bg-[#18181b] hover:border-zinc-800 shadow-lg group">
                <div className="flex items-center gap-10">
                  <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-[#18181b] border border-white/5 group-hover:bg-black transition-colors duration-500">
                    <item.icon size={28} className="text-zinc-700 group-hover:text-[#a87ffb] transition duration-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[20px] font-black text-white tracking-tight leading-none group-hover:text-[#a87ffb] transition">{item.name}</h4>
                    <p className="text-[14px] text-zinc-700 font-bold leading-none">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 text-zinc-800">
                  {i === 1 ? <ArrowUpRight size={24} className="hover:text-white transition cursor-pointer" /> : (i === 2 ? <Eye size={24} className="hover:text-white transition cursor-pointer" /> : <>
                    <Download size={22} className="hover:text-[#34d399] transition cursor-pointer" />
                    <Share2 size={22} className="hover:text-[#a87ffb] transition cursor-pointer" />
                  </>)}
                  <ArrowRight size={20} className="text-zinc-900 group-hover:text-white transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white tracking-tight px-4">Archive Insights</h2>
            <div className="rounded-[3.5rem] border border-[#1f1f22] p-12 space-y-10 relative overflow-hidden bg-[#121214] group shadow-inner">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#a87ffb] opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-[20px] leading-[1.6] italic text-zinc-400 font-bold opacity-80">
                "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
              </p>
              <button className="flex items-center gap-4 text-[#a87ffb] font-black text-[13px] uppercase tracking-[0.2em] transition-all hover:gap-6 group/btn">
                VIEW MODULE <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="p-12 pb-14 rounded-[3.5rem] border border-[#1f1f22] bg-[#121214] space-y-12 shadow-lg relative overflow-hidden">
            <div className="space-y-2">
              <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-700">YOUR ARCHIVE SPACE</h4>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[15px] font-black">
                <span className="text-zinc-700">STORAGE USED</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-4 w-full bg-[#18181b] rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full bg-gradient-to-r from-[#a87ffb] to-[#c0a3ff] shadow-[0_0_20px_rgba(168,127,251,0.4)]" style={{ width: '82%' }}></div>
              </div>
            </div>

            <button className="w-full h-16 text-[12px] font-black uppercase tracking-[0.3em] border border-[#1f1f22] rounded-[2rem] transition hover:bg-white/5 hover:text-white text-zinc-600 font-black active:scale-95 duration-200 shadow-sm">
              Manage Storage
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-24 pb-12 flex items-center justify-between border-t border-[#1f1f22]">
        <div className="flex items-center gap-14 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-900">
           <span>© 2024 ARCHIVIST AI</span>
           <span>PROTOCOL V.2.1</span>
           <span>RESOURCES</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#34d399] opacity-80">
           <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.3)]"></span>
           SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  )
}
