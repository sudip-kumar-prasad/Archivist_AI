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
  Database
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-10 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-white">
          Welcome, <span className="text-archivist-purple">Archivist.</span>
        </h1>
        <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-500 opacity-60 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          SYSTEM READY • 4.0 QUANTUM CORE ACTIVE
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large AI Chat Card */}
        <div className="lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all hover:scale-[1.01] hover:shadow-2xl bg-archivist-card">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-archivist-purple/10">
                <MessageSquare size={28} className="text-archivist-purple" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">AI Chat</h3>
                <p className="text-[15px] text-zinc-400 opacity-60 leading-relaxed max-w-[240px]">
                  Deep academic inquiries and conversational study assistance with contextual memory.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-12">
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 opacity-40">Active Protocol: GPT-4O</span>
              <div className="w-12 h-12 rounded-full border border-archivist-border flex items-center justify-center transition group-hover:bg-archivist-purple group-hover:border-transparent">
                <ArrowRight size={20} className="text-zinc-400 group-hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Medium Summarizer Card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all hover:scale-[1.01] bg-archivist-card">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-archivist-green/10">
                <FileText size={20} className="text-archivist-green" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Summarizer</h3>
                <p className="text-sm text-zinc-400 opacity-60 leading-relaxed">
                  Condense long papers into actionable bullet points.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-archivist-green opacity-80">Ready for upload</span>
            </div>
          </div>
        </div>

        {/* Medium Q&A Card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all hover:scale-[1.01] bg-archivist-card">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-archivist-amber/10">
                <HelpCircle size={20} className="text-archivist-amber" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Q&A Generator</h3>
                <p className="text-sm text-zinc-400 opacity-60 leading-relaxed">
                  Create flashcards and exam questions from your notes.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-archivist-amber opacity-80">3 Modes Available</span>
            </div>
          </div>
        </div>

        {/* Small Resume Analyzer Card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all hover:scale-[1.01] bg-archivist-card">
          <div className="space-y-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-800/50">
              <FileSearch size={20} className="text-zinc-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Resume Analyzer</h3>
              <p className="text-sm text-zinc-400 opacity-60 leading-relaxed">
                Optimize your career path with AI-driven feedback.
              </p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600 opacity-40">ATS Compliant</span>
          </div>
        </div>

        {/* Small Meme Generator Card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all hover:scale-[1.01] bg-archivist-card">
          <div className="space-y-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-archivist-green/10">
              <Smile size={20} className="text-archivist-green" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Meme Generator</h3>
              <p className="text-sm text-zinc-400 opacity-60 leading-relaxed">
                Relieve study stress with academically accurate memes.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-archivist-green opacity-80">Generate Now</span>
          </div>
        </div>

        {/* Learning Velocity (Analytics) Card */}
        <div className="lg:col-span-1 group relative overflow-hidden rounded-[2rem] border border-archivist-border p-8 transition-all bg-archivist-card">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-zinc-600 opacity-40">Learning Velocity</h3>
              <TrendingUp size={16} className="text-zinc-600 opacity-40" />
            </div>
            
            {/* Simple Bar Chart Placeholder */}
            <div className="flex-1 flex items-end gap-3 h-24 mb-6">
              {[40, 60, 45, 80, 55, 95, 75].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-sm transition-all hover:opacity-100 ${i === 5 ? 'bg-archivist-purple opacity-100' : 'bg-white/20 opacity-40'}`}
                     style={{ height: `${h}%` }}></div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-extrabold text-white">14.2h</p>
                <p className="text-[10px] text-zinc-600 opacity-40 uppercase tracking-wider font-bold">Session time this week</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-archivist-green">+24%</p>
                <p className="text-[10px] text-zinc-600 opacity-40 uppercase tracking-wider font-bold">Efficiency growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Archives & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Archives */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-zinc-500 opacity-60" />
            <h2 className="text-xl font-bold text-white">Recent Archives</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-archivist-border transition hover:bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-800/50 border border-zinc-700/30">
                    <item.icon size={20} className="text-zinc-500 opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-zinc-600 opacity-40 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-600 opacity-40">
                  {i === 1 ? <ArrowRight size={18} /> : (i === 2 ? <Eye size={18} /> : <>
                    <Download size={18} />
                    <Share2 size={18} />
                  </>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights & Storage */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Archive Insights</h2>
            <div className="rounded-[2rem] border border-archivist-border p-8 space-y-6 relative overflow-hidden bg-archivist-card">
              <div className="absolute top-0 right-0 p-8 text-zinc-700 opacity-20">
                <ArrowRight size={40} className="-rotate-12" />
              </div>
              <p className="text-[15px] leading-relaxed italic text-zinc-300 opacity-80 z-10 relative">
                "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
              </p>
              <button className="flex items-center gap-2 text-archivist-purple font-bold text-xs uppercase tracking-widest relative z-10 transition hover:gap-3">
                View Module <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-zinc-800/50">
            <div className="flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-zinc-600 opacity-40">
              <span>Your Archive Space</span>
            </div>
            <div className="relative pt-2">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold mb-2">
                <span className="text-zinc-600 opacity-40">Storage Used</span>
                <span className="text-zinc-300 opacity-80">82%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-linear-to-r from-archivist-purple to-archivist-purple-light" style={{ width: '82%' }}></div>
              </div>
            </div>
            <button className="w-full py-4 text-xs font-bold uppercase tracking-[0.2em] border border-archivist-border rounded-2xl transition hover:bg-white/5 mt-4 text-zinc-400">
              Manage Storage
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-20 pb-8 flex items-center justify-between border-t border-zinc-800/50">
        <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest text-zinc-700 opacity-30">
          <span>© 2024 ARCHIVIST AI</span>
          <span>PROTOCOL V.2.1</span>
          <span>RESOURCES</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-archivist-green opacity-80">
          <span className="w-2 h-2 rounded-full bg-archivist-green animate-pulse"></span>
          SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  )
}
