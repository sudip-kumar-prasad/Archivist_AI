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
    <div className="p-5">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-[30px] font-black text-white tracking-tight leading-tight">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] inline-block animate-pulse" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* Feature Grid  */}
      <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: 'auto auto' }}>
        {/* Row 1: AI Chat (tall) | Summarizer | Q&A Generator */}
        {/* AI Chat - spans rows 1+2 on column 1 */}
        <div
          className="bg-[#222228] border border-white/[0.07] rounded-[14px] p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer"
          style={{ gridRow: '1 / span 2', gridColumn: '1' }}
        >
          <div className="space-y-3">
            <MessageSquare size={24} className="text-zinc-400" strokeWidth={1.5} />
            <div className="space-y-1.5">
              <h3 className="text-[20px] font-bold text-white">AI Chat</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-700">Active Protocol: GPT-40</span>
            <div className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all duration-300">
              <ArrowRight size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Row 1, Col 2: Summarizer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-[14px] p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer" style={{ gridRow: '1', gridColumn: '2' }}>
          <div className="space-y-2">
            <FileText size={20} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-white">Summarizer</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Condense long papers into actionable bullet points.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#34d399] mt-4 block">Ready for Upload</span>
        </div>

        {/* Row 1, Col 3: Q&A Generator */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-[14px] p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer" style={{ gridRow: '1', gridColumn: '3' }}>
          <div className="space-y-2">
            <HelpCircle size={20} className="text-[#fbbf24]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Create flashcards and exam questions from your notes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#fbbf24] mt-4 block">3 Modes Available</span>
        </div>

        {/* Row 2, Col 2: Resume Analyzer */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-[14px] p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer" style={{ gridRow: '2', gridColumn: '2' }}>
          <div className="space-y-2">
            <FileSearch size={20} className="text-zinc-500" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-white">Resume Analyzer</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Optimize your career path with AI-driven feedback.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-700 mt-4 block">ATS Compliant</span>
        </div>

        {/* Row 2, Col 3: Meme Generator / Learning Velocity */}
        <div className="bg-[#222228] border border-white/[0.07] rounded-[14px] p-5 flex flex-col justify-between group hover:border-white/[0.12] transition-all cursor-pointer" style={{ gridRow: '2', gridColumn: '3' }}>
          <div className="space-y-2">
            <Smile size={20} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-1">
              <h3 className="text-[16px] font-bold text-white">Meme Generator</h3>
              <p className="text-[12px] text-zinc-500 leading-relaxed">Relieve study stress with academically accurate memes.</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#34d399] mt-4 block">Generate Now</span>
        </div>
      </div>

      {/* Learning Velocity - full width row below */}
      <div className="mt-3 bg-[#222228] border border-white/[0.07] rounded-[14px] p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-700">Learning Velocity</p>
        </div>
        <div className="flex items-end gap-2 h-12 mb-3">
          {[35, 52, 40, 65, 48, 80, 60, 90, 72].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#30303c]'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[22px] font-black text-white">14.2h</span>
            <span className="text-[10px] text-zinc-600 ml-2">Session time this week</span>
          </div>
          <div className="text-right">
            <span className="text-[18px] font-black text-[#34d399]">+24%</span>
            <span className="text-[10px] text-zinc-600 ml-2">Efficiency growth</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Archives + Archive Insights */}
      <div className="grid grid-cols-12 gap-4 mt-5">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <RotateCcw size={15} className="text-zinc-500" />
            <h2 className="text-[17px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-2">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago', icon: FileText, actions: ['download', 'share'] },
              { name: 'Quantum Mechanics Deep Dive', sub: 'Chat Session • Yesterday', icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx', sub: 'Analyzed • 3 days ago', icon: Database, actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#222228] border border-white/[0.07] hover:border-white/[0.12] transition-all group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2d2d38] flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-zinc-500 group-hover:text-zinc-300 transition" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white leading-tight">{item.name}</p>
                    <p className="text-[11px] text-zinc-600 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-700">
                  {item.actions.includes('download') && <Download size={14} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('share') && <Share2 size={14} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('external') && <ExternalLink size={14} className="hover:text-white cursor-pointer transition" />}
                  {item.actions.includes('eye') && <Eye size={14} className="hover:text-white cursor-pointer transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-3">
          <h2 className="text-[17px] font-bold text-white">Archive Insights</h2>
          <div className="bg-[#222228] border-l-[3px] border-l-[#a87ffb] border border-white/[0.04] rounded-r-xl pl-4 pr-4 py-3.5 space-y-3">
            <p className="text-[12px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-1.5 text-[#a87ffb] text-[11px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={12} />
            </button>
          </div>

          <div className="bg-[#222228] border border-white/[0.07] rounded-xl p-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-700">Your Archive Space</p>
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-600">Storage Used</span>
                <span className="text-[12px] font-bold text-white">82%</span>
              </div>
              <div className="h-1.5 bg-[#2e2e3a] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-2 rounded-xl border border-white/[0.09] text-[12px] font-semibold text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all bg-[#1e1e24]">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
