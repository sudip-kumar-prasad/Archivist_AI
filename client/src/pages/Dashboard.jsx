import {
  MessageSquare, FileText, HelpCircle, FileSearch, Smile,
  ArrowRight, RotateCcw, Share2, Download, ExternalLink, Eye, Database
} from 'lucide-react'

const ToolCard = ({ icon: Icon, iconColor = 'text-zinc-400', title, description, badge, badgeColor = 'text-zinc-600', children }) => (
  <div className="bg-[#1e1e24] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#a87ffb]/30 transition-all cursor-pointer group">
    <Icon size={24} className={iconColor} strokeWidth={1.5} />
    <div className="flex-1 space-y-1.5">
      <h3 className="text-[18px] font-bold text-white">{title}</h3>
      <p className="text-[13px] text-zinc-500 leading-relaxed">{description}</p>
    </div>
    {children}
    {badge && <span className={`text-[10px] font-bold uppercase tracking-widest ${badgeColor}`}>{badge}</span>}
  </div>
)

export default function Dashboard() {
  return (
    <div className="p-8 space-y-6">

      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-[42px] font-black text-white tracking-tight leading-none">
          Welcome, <span className="text-[#a87ffb]">Archivist.</span>
        </h1>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse inline-block" />
          System Ready • 4.0 Quantum Core Active
        </p>
      </div>

      {/* === ROW 1: AI Chat (left tall) + Summarizer + Q&A === */}
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {/* AI Chat — big card */}
        <div className="bg-[#1e1e24] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-6 hover:border-[#a87ffb]/30 transition-all cursor-pointer group row-span-1 min-h-[280px]">
          <MessageSquare size={28} className="text-zinc-400" strokeWidth={1.5} />
          <div className="space-y-2 flex-1">
            <h3 className="text-[24px] font-bold text-white">AI Chat</h3>
            <p className="text-[14px] text-zinc-500 leading-relaxed">
              Deep academic inquiries and conversational study assistance with contextual memory.
            </p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">Active Protocol: GPT-40</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#a87ffb] group-hover:border-[#a87ffb] transition-all">
              <ArrowRight size={18} className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Summarizer */}
        <ToolCard
          icon={FileText}
          iconColor="text-[#34d399]"
          title="Summarizer"
          description="Condense long papers into actionable bullet points."
          badge="Ready for Upload"
          badgeColor="text-[#34d399]"
        />

        {/* Q&A Generator */}
        <ToolCard
          icon={HelpCircle}
          iconColor="text-[#fbbf24]"
          title="Q&A Generator"
          description="Create flashcards and exam questions from your notes."
          badge="3 Modes Available"
          badgeColor="text-[#fbbf24]"
        />
      </div>

      {/* === ROW 2: Resume Analyzer + Meme Generator + Learning Velocity === */}
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {/* Resume Analyzer */}
        <ToolCard
          icon={FileSearch}
          iconColor="text-zinc-500"
          title="Resume Analyzer"
          description="Optimize your career path with AI-driven feedback."
          badge="ATS Compliant"
          badgeColor="text-zinc-700"
        />

        {/* Meme Generator */}
        <ToolCard
          icon={Smile}
          iconColor="text-[#34d399]"
          title="Meme Generator"
          description="Relieve study stress with academically accurate memes."
          badge="Generate Now"
          badgeColor="text-[#34d399]"
        />

        {/* Learning Velocity */}
        <div className="bg-[#1e1e24] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#a87ffb]/30 transition-all">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700">Learning Velocity</p>
          <div className="flex items-end gap-2" style={{ height: '80px' }}>
            {[35, 52, 42, 65, 50, 58, 68, 92, 74].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 7 ? 'bg-[#a87ffb]' : 'bg-[#2d2d3a]'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[28px] font-black text-white leading-none">14.2h</p>
              <p className="text-[11px] text-zinc-600 mt-1">Session time this week</p>
            </div>
            <div className="text-right">
              <p className="text-[22px] font-black text-[#34d399] leading-none">+24%</p>
              <p className="text-[11px] text-zinc-600 mt-1">Efficiency growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* === Recent Archives + Archive Insights === */}
      <div className="grid grid-cols-12 gap-6 pt-2">
        {/* Recent Archives */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <RotateCcw size={18} className="text-zinc-500" />
            <h2 className="text-[22px] font-bold text-white">Recent Archives</h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'The Ethics of Neural Networks.pdf', sub: 'Summarized • 2 hours ago',  icon: FileText,     actions: ['download','share'] },
              { name: 'Quantum Mechanics Deep Dive',       sub: 'Chat Session • Yesterday',  icon: MessageSquare, actions: ['external'] },
              { name: 'Product_Manager_Resume_V2.docx',   sub: 'Analyzed • 3 days ago',     icon: Database,    actions: ['eye'] },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#1e1e24] border border-white/[0.07] hover:border-[#a87ffb]/30 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#28283a] flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-zinc-500 group-hover:text-zinc-300 transition" />
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
          <div className="bg-[#1e1e24] border-l-[3px] border-l-[#a87ffb] border border-white/[0.05] rounded-r-2xl pl-5 pr-5 py-5 space-y-4">
            <p className="text-[13px] text-zinc-400 italic leading-relaxed">
              "Based on your recent summaries of neural network ethics, you might find the 'AI Regulation' module useful for your next session."
            </p>
            <button className="flex items-center gap-2 text-[#a87ffb] text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all">
              View Module <ArrowRight size={13} />
            </button>
          </div>
          <div className="bg-[#1e1e24] border border-white/[0.07] rounded-2xl p-5 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-700">Your Archive Space</p>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-700">Storage Used</span>
                <span className="text-[13px] font-bold text-white">82%</span>
              </div>
              <div className="h-1.5 bg-[#28283a] rounded-full overflow-hidden">
                <div className="h-full bg-[#a87ffb] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/[0.07] text-[13px] font-semibold text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-all bg-[#1a1a22]">
              Manage Storage
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
