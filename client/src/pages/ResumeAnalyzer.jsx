import { 
  FileUp, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Download,
  Search,
  ChevronRight,
  TrendingUp,
  FileSearch
} from 'lucide-react'

export default function ResumeAnalyzer() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-6xl font-black tracking-tight text-white leading-tight">
          Resume <span className="text-[#a87ffb]">Analyzer</span>
        </h1>
        <p className="text-[17px] text-[#a1a1aa] leading-relaxed max-w-3xl font-medium opacity-80">
          Align your professional identity with market demands. Upload your CV and target job description for a deep semantic audit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Trio of Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upload Resume */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 flex flex-col items-center justify-center text-center space-y-8 bg-[#141416]/50 transition hover:bg-[#18181b]">
            <div className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center bg-[#a87ffb]/10 border border-[#a87ffb]/20 shadow-inner">
              <FileSearch size={32} className="text-[#a87ffb]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-black text-xl text-white tracking-tight">Upload Resume</h3>
              <p className="text-[10px] text-[#52525b] uppercase tracking-[0.2em] font-black">PDF, DOCX (Max 10MB)</p>
            </div>
            <button className="w-4/5 py-3 rounded-full border border-[#27272a] text-[11px] font-black uppercase tracking-widest text-zinc-500 transition hover:bg-white/5 active:scale-95">
              Select File
            </button>
          </div>

          {/* Target Role */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 space-y-8 bg-[#141416]/50 transition hover:bg-[#18181b]">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-white tracking-tight">Target Role</h3>
              <span className="text-[9px] font-black tracking-widest uppercase py-1.5 px-4 rounded-full bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
                PASTE TEXT
              </span>
            </div>
            <div className="h-40 rounded-3xl bg-black/30 border border-[#27272a] p-6 italic text-[14px] text-zinc-700 font-medium leading-relaxed">
              Paste the job description here to analyze compatibility...
            </div>
          </div>

          {/* Role Compatibility */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 flex flex-col items-center justify-between bg-[#141416]/50 transition hover:bg-[#18181b]">
            <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-[#52525b]">Role Compatibility</h3>
            
            <div className="relative w-40 h-40 flex items-center justify-center mt-4">
              <svg className="w-full h-full -rotate-90">
                <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="12" className="text-[#1f1f22]" />
                <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="12" 
                        strokeDasharray="427.2" strokeDashoffset="102.5"
                        strokeLinecap="round"
                        className="text-[#a87ffb] shadow-[0_0_20px_rgba(168,127,251,0.4)] transition-all duration-1000" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-black text-white">76%</span>
                <span className="text-[8px] uppercase font-black tracking-widest text-[#52525b] mt-1">READY FOR APPLY</span>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-4 mt-8 pt-6 border-t border-[#1f1f22]">
              <div className="text-center px-2">
                <p className="text-xl font-black text-white leading-none">8/10</p>
                <p className="text-[8px] font-black uppercase text-[#52525b] tracking-widest mt-2 leading-none">KEYWORDS</p>
              </div>
              <div className="text-center px-2 border-l border-[#1f1f22]">
                <p className="text-xl font-black text-white leading-none">5/10</p>
                <p className="text-[8px] font-black uppercase text-[#52525b] tracking-widest mt-2 leading-none">HARD SKILLS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Duo */}
        <div className="lg:col-span-4 space-y-6">
          {/* Action Items */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 space-y-10 bg-[#141416]/50 transition hover:bg-[#18181b]">
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-[#a87ffb]" />
              <h3 className="font-black text-xl text-white tracking-tight">Action Items</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { color: '#34d399', title: 'Quantify Achievements', desc: 'Replace "Led a team" with "Led a team of 12 to increase revenue by 20%."' },
                { color: '#a87ffb', title: 'Add Missing Tech Stack', desc: "The JD mentions 'Terraform' twice. Add it to your skills section if applicable." },
                { color: '#fbbf24', title: 'Formatting Optimization', desc: 'Current multi-column layout may be difficult for some legacy ATS systems to parse.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#34d399]" style={{ backgroundColor: item.color }}></div>
                  <div className="space-y-1.5">
                    <h4 className="text-[13px] font-black text-white tracking-tight">{item.title}</h4>
                    <p className="text-[12px] text-[#52525b] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 text-[10px] font-black uppercase tracking-[0.25em] border border-[#1f1f22] rounded-2xl transition hover:bg-[#a87ffb] hover:text-white hover:border-transparent group text-[#52525b] active:scale-95 duration-200">
              EXPORT FEEDBACK PDF
            </button>
          </div>

          {/* Market Benchmarking */}
          <div className="rounded-[2.5rem] border border-[#1f1f22] p-10 space-y-8 bg-[#141416]/50 transition hover:bg-[#18181b]">
             <div className="flex items-center justify-between">
               <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#52525b]">Market Benchmarking</h4>
               <TrendingUp size={18} className="text-[#52525b] opacity-40" />
             </div>
             <div className="h-32 bg-emerald-500/5 rounded-[1.5rem] border border-emerald-500/10 flex items-end p-4 gap-1.5 overflow-hidden">
                {[20,30,25,45,60,50,70,85,60,95,75,90,100,80].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-[#34d399]/20 transition-all hover:bg-[#34d399]/40" style={{ height: `${h}%` }}></div>
                ))}
             </div>
             <p className="text-[11px] text-[#52525b] leading-relaxed font-medium">Your resume ranks in the top 15% for Senior Product Designer roles in the SF Bay Area.</p>
          </div>
        </div>

        {/* Semantic Match Audit */}
        <div className="lg:col-span-8 rounded-[3rem] border border-[#1f1f22] p-12 space-y-12 bg-[#141416]/50 transition hover:bg-[#18181b]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-4xl font-black tracking-tight text-white italic">Semantic Match Audit</h3>
            <span className="text-[9px] font-black tracking-widest uppercase py-2 px-5 rounded-full bg-[#18181b] border border-[#27272a] text-[#52525b]">
              MATCH_ENGINE_V2
            </span>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#52525b] px-4">
              <span>YOUR CONTENT</span>
              <span>JOB REQUIREMENT</span>
            </div>

            <div className="space-y-4">
              {[
                { content: '"Managed cross-functional engineering teams using Agile methodologies."', badgeColor: '#34d399', req: 'Leadership & Agile Proficiency', icon: CheckCircle2 },
                { content: 'Keyword mismatch: Cloud Architecture', badgeColor: '#f87171', req: 'AWS/Azure Certification required', icon: AlertCircle },
                { content: '"Expertise in Python, SQL, and Tableau."', badgeColor: '#a87ffb', req: 'Data Science Toolkit', icon: () => <div className="w-2 h-2 rounded-full bg-[#a87ffb] shrink-0" /> }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className="p-8 rounded-[2rem] bg-black/20 italic text-[14px] text-zinc-300 font-medium leading-relaxed"
                    style={{ borderLeft: `5px solid ${row.badgeColor}` }}
                  >
                    {row.content}
                  </div>
                  <div className="flex items-center gap-4 px-8 py-6 text-white font-bold text-lg">
                     {typeof row.icon === 'function' ? <row.icon /> : <row.icon size={22} style={{ color: row.badgeColor }} className="shrink-0" />}
                     <span className="tracking-tight">{row.req}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
