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
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="space-y-1 pt-2">
        <h1 className="text-[34px] font-black text-white tracking-tight leading-tight">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* Feature Grid - matches mockup layout exactly */}
      <div className="grid grid-cols-3 grid-rows-2 gap-3" style={{ gridTemplateRows: 'minmax(220px,1fr) minmax(180px,1fr)' }}>
        {/* AI Chat - spans 2 rows left */}
        <div className="row-span-2 bg-[#222228] border border-white/[0.07] rounded-2xl p-6 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer">
          <div className="space-y-4">
            <MessageSquare size={26} className="text-zinc-400" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[22px] font-bold text-white leading-tight">AI Chat</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-700">Active Protocol: GPT-40</span>
            <div className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all duration-300">
              <ArrowRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Summarizer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer">
          <div className="space-y-3">
            <FileText size={22} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[18px] font-bold text-white">Summarizer</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Condense long papers into actionable bullet points.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#34d399]">Ready for Upload</span>
        </div>

        {/* Q&A Generator */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer">
          <div className="space-y-3">
            <HelpCircle size={22} className="text-[#fbbf24]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[18px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Create flashcards and exam questions from your notes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#fbbf24]">3 Modes Available</span>
        </div>

        {/* Resume Analyzer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer">
          <div className="space-y-3">
            <FileSearch size={22} className="text-zinc-500" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[18px] font-bold text-white">Resume Analyzer</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Optimize your career path with AI-driven feedback.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-700">ATS Compliant</span>
        </div>

        {/* Meme Generator */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-2xl p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer">
          <div className="space-y-3">
            <Smile size={22} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[18px] font-bold text-white">Meme Generator</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Relieve study stress with academically accurate memes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#34d399]">Generate Now</span>
        </div>

        {/* Learning Velocity - spans col 2-3 bottom */}
        <div className="col-span-1 bg-[#222228] border border-white/[0.07] rounded-2xl p-5 flex flex-col justify-end group hover:border-white/[0.12] transition-all">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-3">Learning Velocity</p>
          <div className="flex items-end gap-1.5 h-14 mb-3">
            {[38, 55, 42, 68, 50, 82, 62, 92, 78].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-all ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#333340]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[22px] font-black text-white leading-none">14.2h</p>
              <p className="text-[10px] text-zinc-600 mt-0.5">Session time this week</p>
            </div>
            <div className="text-right">
              <p className="text-[18px] font-black text-[#34d399] leading-none">+24%</p>
              <p className="text-[10px] text-zinc-600 mt-0.5">Efficiency growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Recent Archives + Archive Insights */}
      <div className="grid grid-cols-12 gap-5 pt-1">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-3">
          <div className="flex items-center gap-2.5">
            <RotateCcw size={17} className="text-zinc-500" />
            <h2 className="text-[19px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-2">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText, actions: ['download', 'share'] },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database, actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#222228] border border-white/[0.07] hover:border-white/[0.12] transition-all group cursor-pointer">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2e2e38] flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-zinc-500 group-hover:text-zinc-300 transition" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white leading-tight">{item.name}</p>
                    <p className="text-[11px] text-zinc-600 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  {item.actions.includes('download') && <Download size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('share') && <Share2 size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('external') && <ExternalLink size={15} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('eye') && <TrendingUp size={15} className="hover:text-white cursor-pointer transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-3">
          <h2 className="text-[19px] font-bold text-white">Archive Insights</h2>

          <div className="bg-[#222228] border-l-[3px] border-l-[#a87ffb] border border-white/[0.04] rounded-r-xl pl-4 pr-5 py-4 space-y-3">
            <p className="text-[13px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-1.5 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={13} />
            </button>
          </div>

          <div className="bg-[#222228] border border-white/[0.07] rounded-xl p-4 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Your Archive Space</p>
            <div>
              <div className="flex justify-between text-[12px] font-semibold mb-2">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Storage Used</span>
                <span className="text-white">82%</span>
              </div>
              <div className="h-1.5 bg-[#2e2e38] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-white/[0.09] text-[12px] font-semibold text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all bg-[#1f1f25]">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
