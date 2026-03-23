import { 
  FileUp, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Download,
  Search,
  ChevronRight,
  TrendingUp
} from 'lucide-react'

export default function ResumeAnalyzer() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto space-y-10 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-[-0.02em] mb-3">
          Resume <span style={{ color: 'var(--accent-purple)' }}>Analyzer</span>
        </h1>
        <p className="text-[15px] opacity-60 leading-relaxed max-w-2xl">
          Align your professional identity with market demands. Upload your CV and target job description for a deep semantic audit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6">
        {/* Upload Resume */}
        <div className="lg:col-span-1 rounded-[2rem] border p-8 flex flex-col items-center justify-center text-center space-y-6"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-zinc-800/50 border border-white/5">
            <FileUp size={28} className="opacity-60" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Upload Resume</h3>
            <p className="text-[11px] opacity-40 uppercase tracking-widest mt-1">PDF, DOCX (Max 10MB)</p>
          </div>
          <button className="w-full py-3 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest transition hover:bg-white/5">
            Select File
          </button>
        </div>

        {/* Target Role */}
        <div className="lg:col-span-1 rounded-[2rem] border p-8 space-y-6"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Target Role</h3>
            <span className="text-[9px] font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20">
              PASTE TEXT
            </span>
          </div>
          <div className="h-32 rounded-2xl bg-black/20 border border-white/5 p-4 italic text-sm opacity-30">
            Paste the job description here to analyze compatibility...
          </div>
        </div>

        {/* Role Compatibility (Circular Progress) */}
        <div className="lg:col-span-1 rounded-[2rem] border p-8 flex flex-col items-center justify-between"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <h3 className="font-bold text-[13px] uppercase tracking-widest opacity-60">Role Compatibility</h3>
          
          <div className="relative w-36 h-36 flex items-center justify-center mt-4">
            <svg className="w-full h-full -rotate-90">
              <circle cx="72" cy="72" r="60" fill="none" stroke="currentColor" strokeWidth="12" className="text-zinc-800" />
              <circle cx="72" cy="72" r="60" fill="none" stroke="currentColor" strokeWidth="12" 
                      strokeDasharray="376.9" strokeDashoffset="90.4"
                      className="text-[#a87ffb] stroke-round" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black">76%</span>
              <span className="text-[8px] uppercase font-bold tracking-widest opacity-40">READY FOR APPLY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-6">
            <div className="text-center">
              <p className="text-sm font-black">8/10</p>
              <p className="text-[9px] font-bold uppercase opacity-30 mt-0.5">KEYWORDS</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-black">5/10</p>
              <p className="text-[9px] font-bold uppercase opacity-30 mt-0.5">HARD SKILLS</p>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="lg:col-span-1 lg:row-span-2 rounded-[2rem] border p-8 space-y-8"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-[#a87ffb]" />
            <h3 className="font-bold text-lg">Action Items</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 shrink-0"></div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold">Quantify Achievements</h4>
                <p className="text-[11px] opacity-40 leading-relaxed">
                  Replace "Led a team" with "Led a team of 12 to increase revenue by 20%."
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a87ffb] mt-2 shrink-0"></div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold">Add Missing Tech Stack</h4>
                <p className="text-[11px] opacity-40 leading-relaxed">
                  The JD mentions 'Terraform' twice. Add it to your skills section if applicable.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-2 shrink-0"></div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold">Formatting Optimization</h4>
                <p className="text-[11px] opacity-40 leading-relaxed">
                  Current multi-column layout may be difficult for some legacy ATS systems to parse.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/50">
            <button className="w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] border rounded-2xl transition hover:bg-[#a87ffb] hover:text-white hover:border-transparent group"
                    style={{ borderColor: 'var(--border)' }}>
              Export Feedback PDF
            </button>
          </div>

          {/* Market Benchmarking mini widget */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/50">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold uppercase opacity-30 mt-0.5">Market Benchmarking</h4>
              <TrendingUp size={14} className="opacity-20" />
            </div>
            <div className="h-20 bg-emerald-500/5 rounded-xl border border-emerald-500/10 flex items-end p-2 gap-1 overflow-hidden">
               {[20,30,25,45,60,50,70,85,60,95].map((h, i) => (
                 <div key={i} className="flex-1 rounded-sm bg-[#34d399]/30" style={{ height: `${h}%` }}></div>
               ))}
            </div>
            <p className="text-[9px] opacity-30 leading-tight">Your resume ranks in the top 15% for Senior Product Designer roles in the SF Bay Area.</p>
          </div>
        </div>

        {/* Semantic Match Audit */}
        <div className="lg:col-span-3 rounded-[3rem] border p-10 space-y-10"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-3xl font-extrabold tracking-tight">Semantic Match Audit</h3>
            <span className="text-[9px] font-bold tracking-widest uppercase py-1.5 px-4 rounded-full bg-zinc-800/50 border border-white/5 opacity-40">
              MATCH_ENGINE_V2
            </span>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 text-[10px] font-black uppercase tracking-widest opacity-30 px-6">
              <span>Your Content</span>
              <span>Job Requirement</span>
            </div>

            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-zinc-900/40 border-l-4 border-[#34d399] italic text-sm opacity-80">
                  "Managed cross-functional engineering teams using Agile methodologies."
                </div>
                <div className="flex items-center gap-4 p-6">
                   <CheckCircle2 size={18} className="text-[#34d399] shrink-0" />
                   <span className="text-sm font-bold">Leadership & Agile Proficiency</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-zinc-900/40 border-l-4 border-[#f87171] italic text-sm opacity-80">
                  Keyword mismatch: Cloud Architecture
                </div>
                <div className="flex items-center gap-4 p-6">
                   <AlertCircle size={18} className="text-[#f87171] shrink-0" />
                   <span className="text-sm font-bold">AWS/Azure Certification required</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-zinc-900/40 border-l-4 border-[#a87ffb] italic text-sm opacity-80">
                  "Expertise in Python, SQL, and Tableau."
                </div>
                <div className="flex items-center gap-4 p-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#a87ffb] shrink-0"></div>
                   <span className="text-sm font-bold">Data Science Toolkit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
