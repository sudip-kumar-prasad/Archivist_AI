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
    <div className="animate-fade-in max-w-7xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-6xl font-black tracking-tight text-white leading-tight">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-[#52525b]">
          <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.4)]"></span>
          SYSTEM READY • 4.0 QUANTUM CORE ACTIVE
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
        {/* Large AI Chat Card */}
        <div className="lg:col-span-2 lg:row-span-1 group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-10 transition-all hover:scale-[1.01] hover:shadow-2xl hover:bg-[#18181b] bg-[#141416]/50">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-[#a87ffb]/10 border border-[#a87ffb]/20">
                <MessageSquare size={32} className="text-[#a87ffb]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white tracking-tight">AI Chat</h3>
                <p className="text-[16px] text-[#a1a1aa] leading-relaxed max-w-[400px]">
                  Deep academic inquiries and conversational study assistance with contextual memory.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between mt-12 pb-2">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#52525b]">ACTIVE PROTOCOL: GPT-4O</span>
              <div className="w-14 h-14 rounded-full border border-[#27272a] flex items-center justify-center transition group-hover:bg-[#a87ffb] group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(168,127,251,0.3)]">
                <ArrowRight size={24} className="text-zinc-500 group-hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Medium Summarizer Card */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-8 transition-all hover:scale-[1.01] hover:bg-[#18181b] bg-[#141416]/50">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
                <FileText size={24} className="text-[#34d399]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white tracking-tight">Summarizer</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Condense long papers into actionable bullet points.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#34d399]">READY FOR UPLOAD</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]/20 hidden group-hover:block transition-all animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Medium Q&A Card */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-8 transition-all hover:scale-[1.01] hover:bg-[#18181b] bg-[#141416]/50">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#fbbf24]/10 border border-[#fbbf24]/20">
                <HelpCircle size={24} className="text-[#fbbf24]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white tracking-tight">Q&A Generator</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  Create flashcards and exam questions from your notes.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#fbbf24]">3 MODES AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Small Resume Analyzer Card */}
        <div className="lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-8 transition-all hover:scale-[1.01] hover:bg-[#18181b] bg-[#141416]/50">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-800/50 border border-white/5">
              <FileSearch size={24} className="text-zinc-500" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white tracking-tight">Resume Analyzer</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Optimize your career path with AI-driven feedback.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-[10px] font-black tracking-widest uppercase text-[#52525b]">ATS COMPLIANT</span>
          </div>
        </div>

        {/* Small Meme Generator Card */}
        <div className="lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-8 transition-all hover:scale-[1.01] hover:bg-[#18181b] bg-[#141416]/50">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#34d399]/10 border border-[#34d399]/20">
              <Smile size={24} className="text-[#34d399]" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white tracking-tight">Meme Generator</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Relieve study stress with academically accurate memes.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-[10px] font-black tracking-widest uppercase text-[#34d399]">GENERATE NOW</span>
          </div>
        </div>

        {/* Learning Velocity (Analytics) Card */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-[#1f1f22] p-10 transition-all bg-[#141416]/50">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[11px] font-black tracking-widest uppercase text-[#52525b]">LEARNING VELOCITY</h3>
              <TrendingUp size={18} className="text-[#52525b]" />
            </div>
            
            <div className="flex-1 flex items-end gap-5 h-32 mb-10">
              {[40, 60, 45, 80, 55, 95, 75, 50, 65].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-lg transition-all hover:opacity-100 ${i === 6 ? 'bg-[#a87ffb] shadow-[0_0_20px_rgba(168,127,251,0.2)]' : 'bg-[#27272a]'}`}
                     style={{ height: `${h}%` }}></div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#1f1f22]">
              <div>
                <p className="text-4xl font-black text-white">14.2h</p>
                <p className="text-[10px] text-[#52525b] uppercase tracking-widest font-black mt-1">Session time this week</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-[#34d399]">+24%</p>
                <p className="text-[10px] text-[#52525b] uppercase tracking-widest font-black mt-1">Efficiency growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Recent Archives */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-6 rounded-full bg-[#a87ffb]"></div>
             <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
               <Clock className="text-[#52525b]" size={20} />
               Recent Archives
             </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-[#141416]/50 border border-[#1f1f22] transition hover:bg-[#18181b] hover:border-[#27272a] shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#18181b] border border-[#27272a]">
                    <item.icon size={24} className="text-[#52525b]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white tracking-tight">{item.name}</h4>
                    <p className="text-xs text-[#52525b] mt-1 font-medium">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-[#52525b]">
                  {i === 1 ? <ArrowUpRight size={20} className="hover:text-white transition cursor-pointer" /> : (i === 2 ? <Eye size={20} className="hover:text-white transition cursor-pointer" /> : <>
                    <Download size={20} className="hover:text-white transition cursor-pointer" />
                    <Share2 size={20} className="hover:text-white transition cursor-pointer" />
                  </>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white tracking-tight">Archive Insights</h2>
            <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 space-y-8 relative overflow-hidden bg-[#141416]/50 group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#a87ffb] opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-[16px] leading-[1.6] italic text-zinc-300 font-medium">
                "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
              </p>
              <button className="flex items-center gap-3 text-[#a87ffb] font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:gap-4">
                View Module <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] border border-[#1f1f22] bg-[#141416]/50 space-y-8">
            <div className="space-y-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#52525b]">YOUR ARCHIVE SPACE</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[13px] font-bold">
                <span className="text-[#52525b]">STORAGE USED</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-2 w-full bg-[#1f1f22] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#a87ffb] to-[#c0a3ff] shadow-[0_0_15px_rgba(168,127,251,0.4)]" style={{ width: '82%' }}></div>
              </div>
            </div>

            <button className="w-full h-14 text-[11px] font-black uppercase tracking-[0.25em] border border-[#1f1f22] rounded-2xl transition hover:bg-white/5 text-zinc-400 active:scale-95">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
