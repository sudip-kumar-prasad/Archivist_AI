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
  Eye,
  Database
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-8 pb-16 space-y-6">
      {/* ── Header ───────────────────────────────── */}
      <div className="space-y-2 pt-2">
        <h1 className="text-[40px] font-black text-white tracking-tight leading-tight">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* ── Feature Grid Row 1 ───────────────────── */}
      {/* AI Chat (left, tall) | Summarizer | Q&A Generator */}
      <div className="grid grid-cols-3 gap-4" style={{ gridTemplateRows: 'minmax(280px, auto)' }}>
        {/* AI Chat - left column, tall */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-7 flex flex-col justify-between group hover:border-white/[0.14] transition-all cursor-pointer">
          <div className="space-y-5">
            <div className="w-10 h-10 flex items-center justify-center">
              <MessageSquare size={26} className="text-zinc-400" strokeWidth={1.5} />
            </div>
            <div className="space-y-3">
              <h3 className="text-[24px] font-bold text-white">AI Chat</h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">Active Protocol: GPT-40</span>
            <div className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all duration-300">
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Summarizer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.14] transition-all cursor-pointer">
          <div className="space-y-4">
            <FileText size={22} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Summarizer</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">Condense long papers into actionable bullet points.</p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34d399] mt-6 block">Ready for Upload</span>
        </div>

        {/* Q&A Generator */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.14] transition-all cursor-pointer">
          <div className="space-y-4">
            <HelpCircle size={22} className="text-[#fbbf24]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">Create flashcards and exam questions from your notes.</p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbbf24] mt-6 block">3 Modes Available</span>
        </div>
      </div>

      {/* ── Feature Grid Row 2 ───────────────────── */}
      {/* Resume Analyzer | Meme Generator | Learning Velocity */}
      <div className="grid grid-cols-3 gap-4">
        {/* Resume Analyzer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.14] transition-all cursor-pointer min-h-[200px]">
          <div className="space-y-4">
            <FileSearch size={22} className="text-zinc-500" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Resume Analyzer</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">Optimize your career path with AI-driven feedback.</p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700 mt-6 block">ATS Compliant</span>
        </div>

        {/* Meme Generator */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.14] transition-all cursor-pointer min-h-[200px]">
          <div className="space-y-4">
            <Smile size={22} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Meme Generator</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">Relieve study stress with academically accurate memes.</p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34d399] mt-6 block">Generate Now</span>
        </div>

        {/* Learning Velocity */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.14] transition-all min-h-[200px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700">Learning Velocity</p>
          <div className="flex items-end gap-2 h-20 my-4">
            {[35, 52, 40, 65, 50, 50, 65, 90, 72].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#30303c]'}`}
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

      {/* ── Bottom: Recent Archives + Archive Insights ── */}
      <div className="grid grid-cols-12 gap-6 pt-2">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-2.5">
            <RotateCcw size={16} className="text-zinc-500" />
            <h2 className="text-[20px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-2.5">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText, actions: ['download', 'share'] },
              { name: 'Quantum Mechanics Deep Dive',       sub: 'Chat Session • Yesterday', icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx',   sub: 'Analyzed • 3 days ago',    icon: Database, actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-[#222228] border border-white/[0.07] hover:border-white/[0.14] transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#2d2d38] flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-zinc-500 group-hover:text-zinc-300 transition" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white leading-tight">{item.name}</p>
                    <p className="text-[11px] text-zinc-600 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  {item.actions.includes('download')  && <Download size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('share')     && <Share2 size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('external')  && <ExternalLink size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('eye')       && <Eye size={15} className="hover:text-white cursor-pointer transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-4">
          <h2 className="text-[20px] font-bold text-white">Archive Insights</h2>

          <div className="bg-[#222228] border-l-[3px] border-l-[#a87ffb] border border-white/[0.05] rounded-r-xl pl-5 pr-5 py-4 space-y-3">
            <p className="text-[13px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-1.5 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={13} />
            </button>
          </div>

          <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-5 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-700">Your Archive Space</p>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-700">Storage Used</span>
                <span className="text-[13px] font-bold text-white">82%</span>
              </div>
              <div className="h-1.5 bg-[#2e2e3a] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/[0.09] text-[13px] font-semibold text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all bg-[#1e1e24]">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
