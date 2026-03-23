import { useState } from 'react'
import { Mic, Download, Share2, Pencil, ChevronDown, BookOpen, Zap } from 'lucide-react'

const mockQuestions = [
  {
    id: 'QUESTION 01',
    question: 'How does the Pauli Exclusion Principle apply to identical fermions occupying the same quantum state?',
    options: [
      'They must have opposite spin orientations.',
      'The principle only applies to bosons in low temperature states.',
      'Identical fermions can occupy the same state if their energy levels are synchronized.',
    ]
  }
]

export default function QAGenerator() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [difficulty, setDifficulty] = useState('Junior (Advanced)')
  const [count, setCount] = useState(10)
  const [activeFormat, setActiveFormat] = useState('Multiple Choice')

  const formats = ['Multiple Choice', 'True/False', 'Short Answer', 'Conceptual Gap-Fill']

  return (
    <div className="flex flex-col h-full">
      {/* Content area */}
      <div className="flex flex-1 gap-0 overflow-hidden">
        {/* Left: Generator Panel */}
        <div className="w-[380px] shrink-0 border-r border-white/[0.06] flex flex-col">
          {/* Header */}
          <div className="px-8 pt-6 pb-5 border-b border-white/[0.06]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">Knowledge Extraction Engine</p>
            <h1 className="text-[26px] font-black text-white">Q&A Generator</h1>
            <p className="text-[13px] text-zinc-500 mt-2 leading-relaxed">
              Synthesize comprehensive study material into interactive quizzes and flashcards using high-fidelity neural processing.
            </p>
          </div>

          <div className="p-6 space-y-5 flex-1 overflow-y-auto custom-scrollbar">
            {/* Source Material */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Source Material</p>
              <div className="bg-[#1f1f23] border border-white/[0.06] rounded-xl relative">
                <textarea
                  className="w-full bg-transparent outline-none text-[13px] text-zinc-400 placeholder-zinc-700 p-4 resize-none leading-relaxed"
                  rows={7}
                  placeholder="Paste textbook excerpts, lecture notes, or research papers here..."
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2 text-zinc-700">
                  <Mic size={15} className="hover:text-white cursor-pointer transition" />
                  <span className="text-[13px]">∞</span>
                </div>
              </div>
            </div>

            {/* Difficulty & Count */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Difficulty Level</p>
                <button className="w-full flex items-center justify-between bg-[#1f1f23] border border-white/[0.06] rounded-xl px-4 py-3 text-[13px] text-zinc-300">
                  {difficulty}
                  <ChevronDown size={14} className="text-zinc-600" />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Question Count</p>
                <div className="bg-[#1f1f23] border border-white/[0.06] rounded-xl px-4 py-3 text-[13px] text-zinc-300">
                  {count}
                </div>
              </div>
            </div>

            {/* Format Logic */}
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Format Logic</p>
              <div className="grid grid-cols-2 gap-2">
                {formats.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFormat(f)}
                    className={`px-3 py-2.5 rounded-xl text-[12px] font-semibold border transition-all ${
                      activeFormat === f
                        ? 'bg-[#a87ffb] border-[#a87ffb] text-white'
                        : 'bg-[#1f1f23] border-white/[0.06] text-zinc-400 hover:border-white/10'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Synthesize button */}
            <button className="w-full py-4 rounded-2xl bg-[#a87ffb] hover:bg-[#8d6bd0] text-white font-black text-[13px] uppercase tracking-widest transition-all shadow-[0_8px_30px_rgba(168,127,251,0.3)] active:scale-98">
              Synthesize Questions
            </button>
          </div>

          {/* AI Usage Estimate */}
          <div className="px-6 pb-5 border-t border-white/[0.06] pt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Zap size={12} className="text-[#34d399]" />
              <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">AI Usage Estimate</p>
            </div>
            <div className="h-1 bg-[#2a2a30] rounded-full overflow-hidden">
              <div className="h-full bg-[#34d399] rounded-full" style={{ width: '14%' }} />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-700 font-semibold">
              <span>EST. TOKENS: 4,120</span>
              <span>DAILY QUOTA: 14% USED</span>
            </div>
          </div>
        </div>

        {/* Right: Generated Session Panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="px-8 pt-6 pb-4 border-b border-white/[0.06] flex items-start justify-between shrink-0">
            <div>
              <h2 className="text-[20px] font-bold text-white">
                Generated Session: <span className="text-[#a87ffb]">Quantum Dynamics 101</span>
              </h2>
              <p className="text-[10px] text-zinc-600 font-semibold uppercase tracking-widest mt-1">
                12 Questions Found • 4.2s Processing Time
              </p>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <Download size={16} className="hover:text-white cursor-pointer transition" />
              <Share2 size={16} className="hover:text-white cursor-pointer transition" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {/* Active Question */}
            <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 rounded bg-[#a87ffb]/20 text-[#a87ffb] text-[9px] font-bold uppercase tracking-widest">
                  Question 01
                </span>
                <Pencil size={14} className="text-zinc-600 hover:text-white cursor-pointer transition" />
              </div>
              <p className="text-[16px] font-bold text-white leading-snug">
                How does the Pauli Exclusion Principle apply to identical fermions occupying the same quantum state?
              </p>
              <div className="space-y-3">
                {[
                  'They must have opposite spin orientations.',
                  'The principle only applies to bosons in low temperature states.',
                  'Identical fermions can occupy the same state if their energy levels are synchronized.',
                ].map((option, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedOption(i)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl border cursor-pointer transition-all ${ 
                      selectedOption === i
                        ? 'border-[#a87ffb] bg-[#a87ffb]/10'
                        : 'border-white/[0.06] bg-[#2a2a30] hover:border-white/10'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 shrink-0 ${selectedOption === i ? 'border-[#a87ffb]' : 'border-zinc-700'}`}>
                      {selectedOption === i && <div className="w-full h-full rounded-full bg-[#a87ffb] scale-50" />}
                    </div>
                    <p className="text-[13px] text-zinc-300">{option}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Question Preview */}
            <div className="bg-[#1f1f23] border border-white/[0.06] rounded-2xl p-4 opacity-60">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest">Question 02</span>
                <ChevronDown size={14} className="text-zinc-700" />
              </div>
              <p className="text-[13px] text-zinc-500 mt-2 leading-relaxed line-clamp-2">
                Explain the relationship between quantum entanglement and the concept of non-locality in quantum mechanics...
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-6 py-4 border-t border-white/[0.06] flex items-center justify-end gap-3 shrink-0">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-[#2a2a30] text-[13px] font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.06] transition">
              <BookOpen size={15} />
              Save Draft
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#a87ffb] text-[13px] font-semibold text-white hover:bg-[#8d6bd0] transition shadow-[0_4px_20px_rgba(168,127,251,0.3)]">
              <span>▶</span>
              Start Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-3 border-t border-white/[0.06] bg-[#1a1a1a] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-800">
          <span>© 2024 Archivist AI</span>
          <span>Protocol V.2.1</span>
          <span>Resources</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#34d399]">
          <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
          System Status: Optimal
        </div>
      </div>
    </div>
  )
}
