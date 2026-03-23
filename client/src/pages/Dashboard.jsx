import {
  MessageSquare, FileText, HelpCircle, FileSearch, Smile,
  ArrowRight, RotateCcw, Share2, Download, ExternalLink, Eye, Database
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-10 space-y-8 max-w-[1400px] mx-auto pb-20">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[46px] font-black text-white tracking-tight leading-none">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-600 flex items-center gap-2 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse inline-block" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* 
        EXACT MOCKUP GRID: 4 columns
        Row 1: [AI Chat spans 2] [Summarizer spans 1] [Q&A spans 1]
        Row 2: [Resume spans 1] [Meme spans 1] [Learning Vel spans 2]
      */}
      <div className="grid grid-cols-4 gap-5">
        
        {/* === ROW 1 === */}
        {/* AI Chat */}
        <div className="col-span-2 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all cursor-pointer group min-h-[260px]">
          <div className="space-y-5">
            <MessageSquare size={30} className="text-zinc-400" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[26px] font-bold text-white">AI Chat</h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed max-w-[90%]">
                Deep academic inquiries and conversational study assistance with contextual memory.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
              Active Protocol: GPT-40
            </span>
            <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-transparent transition-all">
              <ArrowRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Summarizer */}
        <div className="col-span-1 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all cursor-pointer group min-h-[260px]">
          <div className="space-y-5">
            <FileText size={26} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Summarizer</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Condense long papers into actionable bullet points.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34d399]">
              Ready for Upload
            </span>
          </div>
        </div>

        {/* Q&A Generator */}
        <div className="col-span-1 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all cursor-pointer group min-h-[260px]">
          <div className="space-y-5">
            <HelpCircle size={26} className="text-[#fbbf24]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Q&A Generator</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Create flashcards and exam questions from your notes.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbbf24]">
              3 Modes Available
            </span>
          </div>
        </div>

        {/* === ROW 2 === */}
        {/* Resume Analyzer */}
        <div className="col-span-1 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all cursor-pointer group min-h-[260px]">
          <div className="space-y-5">
            <FileSearch size={26} className="text-[#e2e8f0]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Resume Analyzer</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Optimize your career path with AI-driven feedback.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              ATS Compliant
            </span>
          </div>
        </div>

        {/* Meme Generator */}
        <div className="col-span-1 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all cursor-pointer group min-h-[260px]">
          <div className="space-y-5">
            <Smile size={26} className="text-[#34d399]" strokeWidth={1.5} />
            <div className="space-y-2">
              <h3 className="text-[20px] font-bold text-white">Meme Generator</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Relieve study stress with academically accurate memes.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34d399]">
              Generate Now
            </span>
          </div>
        </div>

        {/* Learning Velocity */}
        <div className="col-span-2 bg-[#222228] border border-white/[0.08] rounded-[24px] p-7 flex flex-col justify-between hover:border-white/[0.15] transition-all min-h-[260px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-600">
            Learning Velocity
          </p>
          <div className="flex items-end gap-2.5 my-6 flex-1 max-h-[90px]">
            {[35, 52, 42, 65, 50, 58, 68, 92, 74].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#32323e]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[32px] font-black text-white leading-none tracking-tight">14.2h</p>
              <p className="text-[11px] text-zinc-600 mt-1.5">Session time this week</p>
            </div>
            <div className="text-right">
              <p className="text-[26px] font-black text-[#34d399] leading-none tracking-tight">+24%</p>
              <p className="text-[11px] text-zinc-600 mt-1.5">Efficiency growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* === Recent Archives + Archive Insights === */}
      <div className="grid grid-cols-12 gap-8 pt-8">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-6">
          <div className="flex items-center gap-3 px-1">
            <RotateCcw size={20} className="text-zinc-500" />
            <h2 className="text-[24px] font-bold text-white tracking-tight">Recent Archives</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago',  icon: FileText,     actions: ['download','share'] },
              { name: 'Quantum Mechanics Deep Dive',       sub: 'Chat Session • Yesterday',  icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx',   sub: 'Analyzed • 3 days ago',     icon: Database,    actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-5 rounded-[20px] bg-[#222228] border border-white/[0.08] hover:border-[#a87ffb]/40 transition-all cursor-pointer group">
                <div className="flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#2d2d38] flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-zinc-400 group-hover:text-zinc-200 transition" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white tracking-tight">{item.name}</p>
                    <p className="text-[13px] text-zinc-500 mt-1">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-zinc-600">
                  {item.actions.includes('download')  && <Download size={18} className="hover:text-white transition" />}
                  {item.actions.includes('share')     && <Share2 size={18} className="hover:text-white transition" />}
                  {item.actions.includes('external')  && <ExternalLink size={18} className="hover:text-white transition" />}
                  {item.actions.includes('eye')       && <Eye size={18} className="hover:text-white transition" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Insights */}
        <div className="col-span-5 space-y-6">
          <h2 className="text-[24px] font-bold text-white tracking-tight px-1">Archive Insights</h2>
          
          <div className="bg-[#222228] border-l-[4px] border-l-[#a87ffb] border border-white/[0.05] rounded-r-[20px] p-6 space-y-5 shadow-lg">
            <p className="text-[14px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-2 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-[#222228] border border-white/[0.08] rounded-[20px] p-6 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Your Archive Space</p>
            <div>
              <div className="flex justify-between mb-3">
                <span className="text-[12px] uppercase tracking-wider font-bold text-zinc-600">Storage Used</span>
                <span className="text-[14px] font-bold text-white">82%</span>
              </div>
              <div className="h-2 bg-[#2d2d38] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-3.5 mt-2 rounded-xl border border-white/[0.08] text-[13px] font-semibold text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all bg-transparent">
              Manage Storage
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
