import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import AIChat from './pages/AIChat'
import Summarizer from './pages/Summarizer'
import QAGenerator from './pages/QAGenerator'
import ResumeAnalyzer from './pages/ResumeAnalyzer'
import MemeGenerator from './pages/MemeGenerator'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chat" element={<AIChat />} />
          <Route path="summarizer" element={<Summarizer />} />
          <Route path="qa-generator" element={<QAGenerator />} />
          <Route path="resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="meme-generator" element={<MemeGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
