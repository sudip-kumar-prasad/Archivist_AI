import {
  MessageSquare,
  FileText,
  HelpCircle,
  FileSearch,
  Smile,
  ArrowRight,
  RotateCcw,
  Share2,
  Download,
  ExternalLink,
  TrendingUp,
  Database
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[36px] font-black text-white tracking-tight leading-tight">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34d399] inline-block animate-pulse" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* Top Feature Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* AI Chat - Large */}
        <div className="col-span-1 row-span-2 bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/10 transition-all cursor-pointer min-h-[280px]">
          <div className="space-y-4">
            <MessageSquare size={28} className="text-zinc-400" />
            <div>
              <h3 className="text-[22px] font-bold text-white">AI Chat</h3>
              <p className="text-[13px] text-zinc-500 mt-1 leading-relaxed">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Active Protocol: GPT-40</span>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all">
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Summarizer */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/10 transition-all cursor-pointer">
          <div className="space-y-3">
            <FileText size={22} className="text-[#34d399]" />
            <div>
              <h3 className="text-[17px] font-bold text-white">Summarizer</h3>
              <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">Condense long papers into actionable bullet points.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#34d399]">Ready for Upload</span>
        </div>

        {/* Q&A Generator */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/10 transition-all cursor-pointer">
          <div className="space-y-3">
            <HelpCircle size={22} className="text-[#fbbf24]" />
            <div>
              <h3 className="text-[17px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">Create flashcards and exam questions from your notes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#fbbf24]">3 Modes Available</span>
        </div>

        {/* Resume Analyzer */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/10 transition-all cursor-pointer">
          <div className="space-y-3">
            <FileSearch size={22} className="text-zinc-500" />
            <div>
              <h3 className="text-[17px] font-bold text-white">Resume Analyzer</h3>
              <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">Optimize your career path with AI-driven feedback.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-700">ATS Compliant</span>
        </div>

        {/* Meme Generator */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/10 transition-all cursor-pointer">
          <div className="space-y-3">
            <Smile size={22} className="text-[#34d399]" />
            <div>
              <h3 className="text-[17px] font-bold text-white">Meme Generator</h3>
              <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">Relieve study stress with academically accurate memes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#34d399]">Generate Now</span>
        </div>

        {/* Learning Velocity */}
        <div className="col-span-1 bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 group hover:border-white/10 transition-all">
          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 mb-4">Learning Velocity</p>
          <div className="flex items-end gap-1.5 h-16 mb-4">
            {[35, 55, 40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#2d2d35]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[24px] font-black text-white leading-none">14.2h</p>
              <p className="text-[10px] text-zinc-600 mt-1">Session time this week</p>
            </div>
            <div className="text-right">
              <p className="text-[20px] font-black text-[#34d399] leading-none">+24%</p>
              <p className="text-[10px] text-zinc-600 mt-1">Efficiency growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw size={18} className="text-zinc-500" />
            <h2 className="text-[20px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-2">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText, actions: ['download', 'share'] },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database, actions: ['view'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#1f1f23] border border-white/[0.06] hover:border-white/10 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2a2a30] flex items-center justify-center">
                    <item.icon size={18} className="text-zinc-500 group-hover:text-zinc-300 transition" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.name}</p>
                    <p className="text-[12px] text-zinc-600">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  {item.actions.includes('download') && <Download size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('share') && <Share2 size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('external') && <ExternalLink size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('view') && <TrendingUp size={16} className="hover:text-white cursor-pointer transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-4">
          <h2 className="text-[20px] font-bold text-white">Archive Insights</h2>
          <div className="bg-[#1f1f23] border-l-4 border-l-[#a87ffb] border-y border-r border-white/[0.06] rounded-r-xl p-5 space-y-3">
            <p className="text-[13px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-2 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-[#1f1f23] border border-white/[0.06] rounded-xl p-5 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Your Archive Space</p>
            <div>
              <div className="flex justify-between text-[12px] font-semibold mb-2">
                <span className="text-zinc-500">Storage Used</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-2 bg-[#2a2a30] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-white/[0.08] text-[13px] font-semibold text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
