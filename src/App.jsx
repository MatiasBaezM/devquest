const user = { name: 'Mamarres' }

const stats = [
  { label: 'Puntaje', value: 0 },
  { label: 'Racha actual', value: 0, suffix: '🔥' },
  { label: 'Mejor racha', value: 0 },
  { label: 'Lecciones completadas', value: 0 },
]

const languages = [
  { name: 'Python', icon: '🐍', progress: 0 },
  { name: 'JavaScript', icon: '⚡', progress: 0 },
  { name: 'TypeScript', icon: '🔷', progress: 0 },
  { name: 'Java', icon: '☕', progress: 0 },
]

const quickModes = [
  {
    href: '/trivia',
    title: 'Trivia',
    description: 'Preguntas de opción múltiple sobre lógica y conceptos.',
    icon: '❓',
    cta: 'Jugar trivia',
  },
  {
    href: '/puzzle',
    title: 'Puzzles de código',
    description: 'Ordena los bloques para armar la solución correcta.',
    icon: '🧩',
    cta: 'Resolver puzzle',
  },
]

function App() {
  const isNewUser = stats.every((s) => s.value === 0)

  return (
    <div className="page">
      <header className="topbar">
        <a href="/" className="brand">DevQuest</a>
        <nav className="topbar-nav">
          <a href="/perfil">Perfil</a>
          <button type="button" className="link-button">Cerrar sesión</button>
        </nav>
      </header>

      <main className="container">
        <div className="greeting">
          <h1>Hola, {user.name} 👋</h1>
          <a href="/ranking" className="pill">🏆 Top puntajes</a>
        </div>

        <section className="stats" aria-label="Tus estadísticas">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">
                {s.value}
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        {isNewUser && (
          <section className="onboarding">
            <div>
              <h2>¡Empieza tu primera racha!</h2>
              <p>Responde una trivia rápida para sumar tus primeros puntos. Solo toma 2 minutos.</p>
            </div>
            <a href="/trivia" className="button-primary">Jugar ahora →</a>
          </section>
        )}

        <a href="/learn" className="card card-featured" aria-label="Aprender por lenguaje: elige un lenguaje y avanza tema por tema">
          <div className="card-body">
            <span className="badge">Recomendado</span>
            <h2>Aprender por lenguaje</h2>
            <p>Elige un lenguaje (Python, JavaScript, y más) y avanza tema por tema: lección corta, trivia y puzzles.</p>
            <div className="chips" aria-hidden="true">
              {languages.map((l) => (
                <span key={l.name} className="chip">{l.icon} {l.name}</span>
              ))}
            </div>
          </div>
          <span className="card-cta">Empezar →</span>
        </a>

        <h3 className="section-title">Modo rápido (mezcla todos los temas)</h3>
        <div className="grid-2">
          {quickModes.map((m) => (
            <a key={m.href} href={m.href} className="card" aria-label={`${m.title}: ${m.description}`}>
              <span className="card-icon" aria-hidden="true">{m.icon}</span>
              <div className="card-body">
                <h2>{m.title}</h2>
                <p>{m.description}</p>
              </div>
              <span className="card-cta">{m.cta} →</span>
            </a>
          ))}
        </div>

        <h3 className="section-title">Tu progreso por lenguaje</h3>
        <div className="progress-list">
          {languages.map((l) => (
            <div key={l.name} className="progress-row">
              <span className="progress-name">{l.icon} {l.name}</span>
              <div
                className="progress-bar"
                role="progressbar"
                aria-label={`Progreso en ${l.name}`}
                aria-valuenow={l.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-fill" style={{ width: `${l.progress}%` }} />
              </div>
              <span className="progress-pct">{l.progress}%</span>
            </div>
          ))}
        </div>

        <h3 className="section-title">Actividad reciente</h3>
        <div className="empty">
          <p>Aún no tienes actividad. Cuando completes lecciones, trivias o puzzles aparecerán aquí.</p>
        </div>
      </main>
    </div>
  )
}

export default App
