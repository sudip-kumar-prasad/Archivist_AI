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
    <div className="p-8 space-y-8 min-h-full">
      {/* ── Header ────────────────────────────────────────── */}
      <div className="space-y-2">
        <h1 className="text-[48px] font-black text-white tracking-tight leading-none">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-600 flex items-center gap-2 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* ── Main Feature Grid ─────────────────────────────── */}
      {/*
        Layout (matches mockup exactly):
        ┌──────────────────┬──────────────┬──────────────────┐
        │                  │  Summarizer  │  Q&A Generator   │
        │    AI Chat       ├──────────────┴──────────────────┤
        │   (row 1+2)      │  Resume Anlz │Meme Gen│LVelocity│
        └──────────────────┴──────────────┴────────┴─────────┘
      */}
      <div className="grid gap-4" style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr 1fr',
        gridTemplateRows: '260px 220px'
      }}>

        {/* AI Chat – spans both rows, left column */}
        <div
          className="bg-[#222228] border border-white/[0.08] rounded-2xl p-7 flex flex-col justify-between group hover:border-white/[0.15] transition-all cursor-pointer"
          style={{ gridColumn: '1', gridRow: '1 / span 2' }}
        >
          <div className="space-y-5">
            <MessageSquare size={30} className="text-zinc-400" strokeWidth={1.5} />
            <div className="space-y-3">
              <h3 className="text-[26px] font-bold text-white">AI Chat</h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
              Active Protocol: GPT-40
            </span>
            <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all duration-300">
              <ArrowRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Summarizer – row 1, col 2 */}
        <div
          className="bg-[#222228] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.15] transition-all cursor-pointer"
          style={{ gridColumn: '2', gridRow: '1' }}
        >
          <div className="space-y-4">
            <FileText size={24} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Summarizer</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Condense long papers into actionable bullet points.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34d399]">
            Ready for Upload
          </span>
        </div>

        {/* Q&A Generator – row 1, col 3 */}
        <div
          className="bg-[#222228] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.15] transition-all cursor-pointer"
          style={{ gridColumn: '3', gridRow: '1' }}
        >
          <div className="space-y-4">
            <HelpCircle size={24} className="text-[#fbbf24]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Create flashcards and exam questions from your notes.
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbbf24]">
            3 Modes Available
          </span>
        </div>

        {/* Row 2: Resume Analyzer + Meme Generator share col 2, Learning Velocity col 3 */}
        {/* Resume + Meme sub-grid */}
        <div
          className="grid grid-cols-2 gap-4"
          style={{ gridColumn: '2', gridRow: '2' }}
        >
          {/* Resume Analyzer */}
          <div className="bg-[#222228] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.15] transition-all cursor-pointer">
            <div className="space-y-3">
              <FileSearch size={22} className="text-zinc-500" strokeWidth={1.5} />
              <div className="space-y-1.5">
                <h3 className="text-[17px] font-bold text-white leading-tight">Resume Analyzer</h3>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Optimize your career path with AI-driven feedback.
                </p>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700">
              ATS Compliant
            </span>
          </div>

          {/* Meme Generator */}
          <div className="bg-[#222228] border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.15] transition-all cursor-pointer">
            <div className="space-y-3">
              <Smile size={22} className="text-[#34d399]" strokeWidth={1.5} />
              <div className="space-y-1.5">
                <h3 className="text-[17px] font-bold text-white leading-tight">Meme Generator</h3>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Relieve study stress with academically accurate memes.
                </p>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#34d399]">
              Generate Now
            </span>
          </div>
        </div>

        {/* Learning Velocity – row 2, col 3 */}
        <div
          className="bg-[#222228] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.15] transition-all"
          style={{ gridColumn: '3', gridRow: '2' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700">
            Learning Velocity
          </p>
          <div className="flex items-end gap-2 my-3" style={{ height: '70px' }}>
            {[35, 52, 40, 65, 50, 55, 65, 90, 72].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#30303c]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[26px] font-black text-white leading-none">14.2h</p>
              <p className="text-[10px] text-zinc-600 mt-1">Session time this week</p>
            </div>
            <div className="text-right">
              <p className="text-[22px] font-black text-[#34d399] leading-none">+24%</p>
              <p className="text-[10px] text-zinc-600 mt-1">Efficiency growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Recent Archives + Archive Insights ─────────────── */}
      <div className="grid grid-cols-12 gap-6">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-2.5">
            <RotateCcw size={17} className="text-zinc-500" />
            <h2 className="text-[22px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago',  icon: FileText,    actions: ['download', 'share'] },
              { name: 'Quantum Mechanics Deep Dive',       sub: 'Chat Session • Yesterday',  icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx',   sub: 'Analyzed • 3 days ago',     icon: Database,    actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#222228] border border-white/[0.08] hover:border-white/[0.15] transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2a2a35] flex items-center justify-center shrink-0">
                    <item.icon size={17} className="text-zinc-500 group-hover:text-zinc-300 transition" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{item.name}</p>
                    <p className="text-[12px] text-zinc-600 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-700">
                  {item.actions.includes('download')  && <Download size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('share')     && <Share2 size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('external')  && <ExternalLink size={16} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('eye')       && <Eye size={16} className="hover:text-white cursor-pointer transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-4">
          <h2 className="text-[22px] font-bold text-white">Archive Insights</h2>

          <div className="bg-[#222228] border-l-[3px] border-l-[#a87ffb] border border-white/[0.05] rounded-r-2xl pl-5 pr-5 py-5 space-y-3">
            <p className="text-[13px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-2 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={13} />
            </button>
          </div>

          <div className="bg-[#222228] border border-white/[0.08] rounded-2xl p-5 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-700">Your Archive Space</p>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-700">Storage Used</span>
                <span className="text-[13px] font-bold text-white">82%</span>
              </div>
              <div className="h-1.5 bg-[#2a2a35] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/[0.08] text-[13px] font-semibold text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all bg-[#1e1e25]">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
