/**
 * Prompt Builder Utility
 * Modular system for constructing OpenAI-compatible prompt payloads.
 * All prompts are assembled here — this is the single source of truth.
 */

// ─── Chat Prompts ─────────────────────────────────────────────
exports.buildChatPrompt = (messages, systemInstruction = null) => {
  const system = systemInstruction || `
You are Archivist AI, an elite academic research assistant. You help students and researchers
with deep academic inquiries, literature review, study planning, and knowledge synthesis.
Be precise, scholarly, and insightful. When uncertain, say so.
  `.trim()

  return [
    { role: 'system', content: system },
    ...messages,
  ]
}

// ─── Summarizer Prompts ───────────────────────────────────────
exports.buildSummaryPrompt = (text, length = 'medium', tone = 'academic') => {
  const lengthInstructions = {
    concise: 'Provide a concise 3-5 sentence abstract.',
    medium:  'Provide a medium-length summary with key points (150-250 words).',
    detailed:'Provide a detailed distillation with abstract, key arguments, and conclusions.',
  }

  return [
    {
      role: 'system',
      content: `You are a world-class academic summarizer. Tone: ${tone}. ${lengthInstructions[length] || lengthInstructions.medium}`,
    },
    {
      role: 'user',
      content: `Please summarize the following text:\n\n${text}`,
    },
  ]
}

// ─── Q&A Generator Prompts ────────────────────────────────────
exports.buildQAPrompt = (text, difficulty = 'intermediate', count = 10, format = 'mixed') => {
  const formats = {
    mcq:   'multiple-choice questions with 4 options each (mark the correct answer)',
    short: 'short-answer questions',
    mixed: 'a mix of multiple-choice and short-answer questions',
    tf:    'true/false questions',
  }

  return [
    {
      role: 'system',
      content: `You are an expert educator creating ${difficulty}-level study questions.
Generate exactly ${count} ${formats[format] || formats.mixed}.
Return a valid JSON array of objects with keys: type, question, options (for MCQ), answer.`,
    },
    {
      role: 'user',
      content: `Generate questions from this content:\n\n${text}`,
    },
  ]
}

// ─── Resume Analyzer Prompts ──────────────────────────────────
exports.buildResumePrompt = (resumeText, jobDescription = '') => {
  const jdSection = jobDescription
    ? `\n\nTarget Job Description:\n${jobDescription}`
    : ''

  return [
    {
      role: 'system',
      content: `You are an expert ATS analyst and career coach. Analyze the provided resume${jobDescription ? ' against the target job description' : ''}.
Return a valid JSON object with:
- score: number 0-100
- keywords: { matched: [], missing: [] }
- skills: { identified: [], suggestions: [] }
- actionItems: [{ title, description, severity }]
- semanticMatches: [{ resumeText, requirement, status }]`,
    },
    {
      role: 'user',
      content: `Analyze this resume:${jdSection}\n\nResume:\n${resumeText}`,
    },
  ]
}
