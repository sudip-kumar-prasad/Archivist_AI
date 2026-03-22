// Dashboard page — Phase 3 (Day 6–7)
export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-1">
        Welcome, <span style={{ color: 'var(--accent-purple)' }}>Archivist.</span>
      </h1>
      <p className="text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--text-muted)' }}>
        System Ready • 4.0 Quantum Core Active
      </p>
      {/* Feature cards, stats, recent archives — coming in Phase 3 */}
      <div className="card p-8 text-center" style={{ color: 'var(--text-muted)' }}>
        Dashboard widgets — Phase 3
      </div>
    </div>
  )
}
