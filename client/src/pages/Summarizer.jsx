import { Upload, Copy, Download, Share2 } from 'lucide-react'

export default function Summarizer() {
  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="w-[340px] shrink-0 border-r border-white/[0.06] p-6 space-y-6 flex flex-col">
        {/* Page Title */}
        <div className="space-y-1">
          <h1 className="text-[28px] font-black text-white">Summarizer</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            Digital Content Distillation Engine
          </p>
        </div>

        {/* Drop Zone */}
        <div className="bg-[#1f1f23] border border-white/[0.06] border-dashed rounded-2xl p-8 flex flex-col items-center gap-4 cursor-pointer hover:border-white/10 transition-all group">
          <div className="w-14 h-14 rounded-2xl bg-[#2a2a30] flex items-center justify-center group-hover:bg-[#32323a] transition">
            <Upload size={24} className="text-zinc-500" />
          </div>
          <div className="text-center">
            <p className="text-[15px] font-bold text-white">Drop your thesis</p>
            <p className="text-[12px] text-zinc-500 mt-1">PDF, DOCX, or TXT up to 50MB.<br />The Archivist will handle the rest.</p>
          </div>
          <button className="px-6 py-2 rounded-xl border border-white/10 text-[13px] font-semibold text-white hover:bg-white/[0.06] transition-all">
            Select Files
          </button>
        </div>

        {/* Processing Parameters */}
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-5 space-y-4 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Processing Parameters</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-zinc-300 font-medium">Summary Length</span>
              <span className="text-[13px] font-bold text-[#34d399]">Concise</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-zinc-300 font-medium">Tone</span>
              <span className="text-[13px] font-bold text-[#34d399]">Academic</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-zinc-300 font-medium">Highlight Key Terms</span>
              <div className="w-10 h-5.5 rounded-full bg-[#a87ffb] relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Summary Output */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl overflow-hidden">
          {/* File header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#34d399]/20 text-[#34d399] text-[10px] font-bold uppercase tracking-wider">Active State</span>
              <h3 className="text-[18px] font-bold text-white">Transcendental<br />Idealism.pdf</h3>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <Copy size={16} className="hover:text-white cursor-pointer transition" />
              <Download size={16} className="hover:text-white cursor-pointer transition" />
              <Share2 size={16} className="hover:text-white cursor-pointer transition" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Abstract Core */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Abstract Core</p>
              <p className="text-[14px] text-zinc-300 leading-relaxed">
                This analysis examines the core tenets of Kant's Transcendental Idealism, specifically focusing on the distinction between phenomena and noumena. The AI has identified that space and time are not properties of things-in-themselves, but are instead formal conditions of our sensibility.
              </p>
            </div>

            {/* Key Arguments */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Key Argument 01', text: 'The mind actively structures experience through a priori categories, rather than passively receiving data from the external world.' },
                { label: 'Key Argument 02', text: 'Objects must conform to our knowledge, reversing the traditional assumption that our knowledge must conform to objects.' }
              ].map((arg, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">{arg.label}</p>
                  <p className="text-[12px] text-zinc-400 leading-relaxed">{arg.text}</p>
                </div>
              ))}
            </div>

            {/* Detailed Distillation */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Detailed Distillation</p>
              <p className="text-[13px] text-zinc-300 leading-relaxed">
                The text proceeds to define the "Synthetic A Priori," which Kant suggests is the basis for mathematical and scientific certainty. By summarizing the 40-page document, the assistant has isolated the following critical observations:
              </p>
              <ol className="space-y-3">
                {[
                  'Space and time are subjective frameworks required for human perception.',
                  "The 'Thing-in-itself' remains fundamentally inaccessible to the human cognitive apparatus.",
                  'Causality is a category of the understanding, not an observation derived from pure experience.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-[13px] text-zinc-400 leading-relaxed">
                    <span className="text-[#a87ffb] font-bold shrink-0 text-[11px] mt-0.5">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              {['#Philosophy', '#Kant', '#Epistemology', '#18th_Century'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#2a2a30] text-zinc-500 text-[11px] font-medium border border-white/[0.04]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between pt-4 border-t border-white/[0.06] text-[11px] text-zinc-700 font-semibold uppercase tracking-widest">
              <span>Analysis Complete in 2.49</span>
              <span>Confidence Score: 99.4%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Button */}
      <div className="absolute bottom-24 right-8">
        <button className="w-12 h-12 rounded-full bg-[#a87ffb] flex items-center justify-center shadow-[0_8px_30px_rgba(168,127,251,0.4)] hover:bg-[#8d6bd0] transition">
          <span className="text-white text-lg">✦</span>
        </button>
      </div>
    </div>
  )
}
