import { Upload } from 'lucide-react'

export default function ResumeAnalyzer() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[30px] font-black text-white">
          Resume <span className="text-[#a87ffb]">Analyzer</span>
        </h1>
        <p className="text-[13px] text-zinc-500 max-w-lg leading-relaxed">
          Align your professional identity with market demands. Upload your CV and target job description for a deep semantic audit.
        </p>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Upload Card */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-h-[200px]">
          <div className="w-12 h-12 rounded-2xl bg-[#2a2a30] flex items-center justify-center">
            <Upload size={22} className="text-zinc-500" />
          </div>
          <div className="text-center">
            <p className="text-[15px] font-bold text-white">Upload Resume</p>
            <p className="text-[12px] text-zinc-600 mt-1">PDF, DOCX (Max 10MB)</p>
          </div>
          <button className="px-5 py-2 rounded-xl border border-white/10 text-[13px] font-semibold text-white hover:bg-white/[0.06] transition-all">
            Select File
          </button>
        </div>

        {/* Target Role */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-bold text-white">Target Role</p>
            <button className="px-3 py-1 rounded-lg bg-[#34d399]/20 text-[#34d399] text-[10px] font-bold uppercase tracking-wider">
              Paste Text
            </button>
          </div>
          <textarea
            className="w-full flex-1 bg-transparent border-none outline-none text-zinc-500 text-[13px] resize-none leading-relaxed"
            rows={6}
            placeholder="Paste the job description here to analyze compatibility..."
          />
        </div>

        {/* Role Compatibility Gauge */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-6 space-y-4">
          <p className="text-[13px] font-bold text-white text-center">Role Compatibility</p>
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#2a2a30" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="50" fill="none"
                  stroke="url(#gauge-gradient)" strokeWidth="10"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.76} ${2 * Math.PI * 50}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a87ffb" />
                    <stop offset="100%" stopColor="#c0a3ff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[32px] font-black text-white leading-none">76<span className="text-[18px]">%</span></p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 mt-1">Ready to Apply</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-center border-t border-white/[0.06] pt-4">
            <div>
              <p className="text-[18px] font-black text-white">8/10</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider font-semibold">Keywords</p>
            </div>
            <div>
              <p className="text-[18px] font-black text-white">5/10</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider font-semibold">Hard Skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Semantic Match Audit */}
        <div className="col-span-2 bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[18px] font-bold text-white">Semantic Match Audit</h3>
            <span className="px-3 py-1 rounded-lg bg-[#2a2a30] text-zinc-500 text-[9px] font-bold uppercase tracking-wider border border-white/[0.04]">
              Match Engine V2
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <span className="pl-2">Your Content</span>
            <span className="pl-2">Job Requirement</span>
          </div>

          <div className="space-y-3">
            {[
              {
                content: '"Managed cross-functional engineering teams using Agile methodologies."',
                requirement: 'Leadership & Agile Proficiency',
                status: 'match',
                color: 'text-[#34d399]',
                bgColor: 'bg-[#34d399]/10',
                borderColor: 'border-l-[#34d399]',
                icon: '●',
              },
              {
                content: 'Keyword mismatch: Cloud Architecture',
                requirement: 'AWS/Azure Certification required',
                status: 'warn',
                color: 'text-[#fbbf24]',
                bgColor: 'bg-[#fbbf24]/10',
                borderColor: 'border-l-[#fbbf24]',
                icon: '▲',
                italic: true
              },
              {
                content: '"Expertise in Python, SQL, and Tableau."',
                requirement: 'Data Science Toolkit',
                status: 'info',
                color: 'text-[#60a5fa]',
                bgColor: 'bg-[#60a5fa]/10',
                borderColor: 'border-l-[#60a5fa]',
                icon: 'ℹ',
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <div className={`bg-[#2a2a30] border border-white/[0.04] border-l-2 ${row.borderColor} rounded-xl px-4 py-3`}>
                  <p className={`text-[12px] text-zinc-300 leading-relaxed ${row.italic ? 'italic text-[#fbbf24]/70' : ''}`}>
                    {row.content}
                  </p>
                </div>
                <div className="bg-[#2a2a30] border border-white/[0.04] rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className={`${row.color} text-[12px]`}>{row.icon}</span>
                  <p className="text-[13px] text-white font-semibold">{row.requirement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="space-y-4">
          <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#fbbf24]">⚡</span>
              <h3 className="text-[15px] font-bold text-white">Action Items</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  color: '#34d399',
                  title: 'Quantify Achievements',
                  desc: 'Replace "Led a team" with "Led a team of 12 to increase revenue by 20%."'
                },
                {
                  color: '#a87ffb',
                  title: 'Add Missing Tech Stack',
                  desc: 'The JD mentions \'Terraform\' twice. Add it to your skills section if applicable.'
                },
                {
                  color: '#fbbf24',
                  title: 'Formatting Optimization',
                  desc: 'Current multi-column layout may be difficult for some legacy ATS systems to parse.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-[13px] font-bold text-white">{item.title}</p>
                    <p className="text-[12px] text-zinc-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl border border-white/10 text-[11px] font-black uppercase tracking-widest text-white hover:bg-white/[0.06] transition-all mt-2">
              Export Feedback PDF
            </button>
          </div>

          {/* Market Benchmarking */}
          <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-600">Market Benchmarking</p>
            <div className="flex items-end gap-1 h-12">
              {[40, 60, 50, 80, 65, 85, 70, 90, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i >= 7 ? 'bg-[#34d399]/70' : 'bg-[#2d2d35]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="text-[12px] text-zinc-500 leading-relaxed">
              Your resume ranks in the top 15% for Senior Product Designer roles in the SF Bay Area.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
