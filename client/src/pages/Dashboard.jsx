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
    <div className="animate-fade-in max-w-[1400px] mx-auto space-y-32 pb-32 pt-8">
      {/* Header Section */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.4em] text-zinc-800">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.5)]"></span>
          SYSTEM READY • 4.0 QUANTUM CORE ACTIVE
        </div>
        <h1 className="text-8xl font-black tracking-tight text-white leading-[1.05]">
          Welcome, <br />
          <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
      </div>

      {/* Primary Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Large AI Chat Card */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[4rem] border border-archivist-border p-16 transition-all hover:bg-[#0d0d0f] bg-archivist-card shadow-archivist hover:border-archivist-border-strong duration-500">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-12">
              <div className="w-24 h-24 rounded-[1.8rem] flex items-center justify-center bg-[#a87ffb]/5 border border-[#a87ffb]/10 group-hover:bg-[#a87ffb]/10 transition-colors duration-500">
                <MessageSquare size={44} className="text-[#a87ffb]" />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-white tracking-tight">AI Chat</h3>
                <p className="text-[20px] text-zinc-500 leading-relaxed max-w-[500px] font-medium">
                  Deep academic inquiries and conversational study assistance with contextual memory.
                </p>
              </div>
            </div>
            <div className="flex items-end justify-between mt-20">
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-800 transition group-hover:text-zinc-600">ACTIVE PROTOCOL: GPT-4O</span>
              <div className="w-16 h-16 rounded-full border border-archivist-border flex items-center justify-center transition group-hover:bg-[#a87ffb] group-hover:border-transparent group-hover:shadow-[0_15px_40px_rgba(168,127,251,0.3)] duration-500">
                <ArrowRight size={28} className="text-zinc-600 group-hover:text-white transition duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Summarizer Card */}
        <div className="group relative overflow-hidden rounded-[3.5rem] border border-archivist-border p-12 transition-all bg-archivist-card hover:bg-[#0d0d0f] shadow-archivist hover:border-archivist-border-strong duration-500">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#34d399]/5 border border-[#34d399]/10 group-hover:bg-[#34d399]/10 transition-colors duration-300">
                <FileText size={32} className="text-[#34d399]" />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-white tracking-tight leading-tight">Summarizer</h3>
                <p className="text-[17px] text-zinc-500 leading-relaxed font-bold">
                  Condense long papers into actionable bullet points.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#34d399] bg-[#34d399]/5 px-6 py-3 rounded-full border border-[#34d399]/10">READY FOR UPLOAD</span>
            </div>
          </div>
        </div>

        {/* Q&A Card */}
        <div className="group relative overflow-hidden rounded-[3.5rem] border border-archivist-border p-12 transition-all bg-archivist-card hover:bg-[#0d0d0f] shadow-archivist hover:border-archivist-border-strong duration-500">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#fbbf24]/5 border border-[#fbbf24]/10 group-hover:bg-[#fbbf24]/10 transition-colors duration-300">
                <HelpCircle size={32} className="text-[#fbbf24]" />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-white tracking-tight leading-tight">Q&A Generator</h3>
                <p className="text-[17px] text-zinc-500 leading-relaxed font-bold">
                  Create flashcards and exam questions from your notes.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#fbbf24] bg-[#fbbf24]/5 px-6 py-3 rounded-full border border-[#fbbf24]/10">MODES AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-[4rem] border border-archivist-border p-16 transition-all bg-archivist-card shadow-archivist duration-500">
          <div className="flex flex-col h-full gap-10">
            <div className="flex items-center justify-between">
              <h3 className="text-[12px] font-black tracking-[0.4em] uppercase text-zinc-800">LEARNING VELOCITY</h3>
              <div className="flex items-center gap-2 text-[#34d399] text-[12px] font-black uppercase tracking-[0.1em] bg-[#34d399]/5 px-4 py-2 rounded-lg border border-[#34d399]/10">
                <TrendingUp size={16} /> +24.8% GROW
              </div>
            </div>
            
            <div className="flex-1 flex items-end gap-8 h-48 mb-10 px-4">
              {[30, 50, 40, 70, 45, 85, 65, 95, 80].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-2xl transition-all hover:scale-x-110 duration-500 ${i === 7 ? 'bg-[#a87ffb] shadow-[0_0_40px_rgba(168,127,251,0.4)]' : 'bg-[#18181b] border border-white/5 opacity-40 group-hover:opacity-100'}`}
                     style={{ height: `${h}%` }}></div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-12 border-t border-archivist-border">
              <div className="space-y-2">
                <p className="text-6xl font-black text-white tracking-tighter">14.2h</p>
                <p className="text-[12px] text-zinc-800 uppercase tracking-[0.3em] font-black">Session time this week</p>
              </div>
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-archivist-card bg-zinc-800 flex items-center justify-center text-[10px] font-black group-hover:translate-x-1 duration-300 transition-transform">
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archives Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Recent Archives List */}
        <div className="lg:col-span-8 space-y-16">
          <div className="flex items-center justify-between border-b border-archivist-border pb-8">
             <h2 className="text-5xl font-black text-white tracking-tight italic">
               Recent Archives
             </h2>
             <button className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-700 hover:text-white transition">VIEW ALL</button>
          </div>
          
          <div className="space-y-6">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText, color: '#a87ffb' },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare, color: '#34d399' },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database, color: '#fbbf24' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-10 pr-14 rounded-[3.5rem] bg-archivist-card border border-archivist-border transition hover:bg-[#0d0d0f] hover:border-archivist-border-strong shadow-archivist group duration-500">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-20 rounded-[1.8rem] flex items-center justify-center bg-[#18181b] border border-white/5 group-hover:bg-black transition-colors duration-500">
                    <item.icon size={32} className="text-zinc-800 group-hover:text-white transition duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[22px] font-black text-white tracking-tight group-hover:text-[#a87ffb] transition duration-500">{item.name}</h4>
                    <p className="text-[15px] text-zinc-700 font-bold">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12 text-zinc-800">
                   <Download size={24} className="hover:text-white transition-all cursor-pointer hover:scale-110" />
                   <Share2 size={24} className="hover:text-white transition-all cursor-pointer hover:scale-110" />
                   <div className="w-12 h-12 rounded-full border border-archivist-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer duration-500">
                     <ArrowUpRight size={24} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-4 space-y-16">
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-white tracking-tight px-4 underline decoration-[#a87ffb]/30 decoration-8 underline-offset-8">Insights</h2>
            <div className="rounded-[4rem] border border-archivist-border p-14 space-y-12 relative overflow-hidden bg-archivist-card group shadow-2xl transition hover:border-[#a87ffb]/30 duration-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#a87ffb]/5 rounded-full -mr-16 -mt-16 blur-3xl transition group-hover:bg-[#a87ffb]/10 duration-700"></div>
              <p className="text-[22px] leading-[1.7] italic text-zinc-500 font-bold opacity-90 group-hover:text-zinc-300 transition duration-500">
                "Your neural network analysis shows a high level of academic rigor. We've prepared a specialized 'Advanced Ethics' quiz for you."
              </p>
              <button className="flex items-center gap-5 text-[#a87ffb] font-black text-[14px] uppercase tracking-[0.3em] transition-all hover:gap-8 group/btn">
                TAKE QUIZ <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </div>

          <div className="p-14 rounded-[4rem] border border-archivist-border bg-archivist-card space-y-12 shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <h4 className="text-[13px] font-black uppercase tracking-[0.4em] text-zinc-800">ARCHIVE QUOTA</h4>
              <p className="text-zinc-500 text-[14px] font-bold">8.2 GB of 10 GB used</p>
            </div>
            
            <div className="space-y-8">
              <div className="h-4 w-full bg-[#18181b] rounded-full overflow-hidden shadow-inner">
                <div className="h-full rounded-full bg-gradient-to-r from-[#a87ffb] via-[#c0a3ff] to-[#a87ffb] bg-[length:200%_auto] animate-gradient-x shadow-[0_0_25px_rgba(168,127,251,0.4)]" style={{ width: '82%' }}></div>
              </div>
            </div>

            <button className="w-full h-18 text-[13px] font-black uppercase tracking-[0.3em] border border-archivist-border rounded-[2.5rem] transition hover:bg-white hover:text-black hover:border-transparent text-zinc-700 active:scale-95 duration-500 shadow-xl">
              Upgrade Sanctuary
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Footer */}
      <footer className="pt-32 pb-16 flex flex-col md:flex-row items-center justify-between border-t border-archivist-border gap-12">
        <div className="flex items-center gap-16 text-[12px] font-black uppercase tracking-[0.5em] text-zinc-900">
           <span>ARCHIVIST // {new Date().getFullYear()}</span>
           <span className="opacity-40">PROTOCOL V.2.4</span>
           <span className="hover:text-[#a87ffb] transition cursor-pointer">LEGAL</span>
        </div>
        <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.4em] text-[#34d399]">
           <span className="w-3 h-3 rounded-full bg-[#34d399] animate-ping opacity-20"></span>
           <span className="w-3 h-3 rounded-full bg-[#34d399] -ml-7 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></span>
           ENCRYPTED CONNECTION ACTIVE
        </div>
      </footer>
    </div>
  )
}
