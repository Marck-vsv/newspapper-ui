import { useState } from 'react'

function generateRssUrl(topic, country, language, period = '') {
  let url = `https://news.google.com/rss/search?q=${encodeURIComponent(topic)}&hl=${language}&gl=${country}&ceid=${country}:${language}`
  if (period) url += `&when=${period}`
  return url
}

export default function GeneratorPage() {
  const [topic, setTopic] = useState('')
  const [country, setCountry] = useState('BR')
  const [language, setLanguage] = useState('pt-BR')
  const [period, setPeriod] = useState('')
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [sentWebhook, setSentWebhook] = useState('idle')
  const [saved, setSaved] = useState(false)

  const templates = {
    tech: { topic: 'tecnologia inteligência artificial', country: 'BR', language: 'pt-BR' },
    business: { topic: 'negócios economia mercado', country: 'BR', language: 'pt-BR' },
    sports: { topic: 'esportes futebol', country: 'BR', language: 'pt-BR' },
    health: { topic: 'saúde medicina', country: 'BR', language: 'pt-BR' },
  }

  const onGenerate = async (e) => {
    e.preventDefault()
    if (!topic) { alert('Por favor, digite um tópico!'); return }
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      setUrl(generateRssUrl(topic, country, language, period))
    } finally {
      setLoading(false)
    }
  }

  const onCopy = async () => {
    if (!url) return
    await navigator.clipboard.writeText(url)
  }

  const onWebhook = async () => {
    if (!url) return
    setSentWebhook('loading')
    try {
      await new Promise(r => setTimeout(r, 1000))
      setSentWebhook('ok')
      setTimeout(() => setSentWebhook('idle'), 1500)
    } catch {
      setSentWebhook('error')
      setTimeout(() => setSentWebhook('idle'), 1500)
    }
  }

  const onSave = () => {
    if (!topic) return
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glassmorphism rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <i className="fas fa-magic text-indigo-400" />
          Gerador Avançado de RSS
        </h3>

        <form className="space-y-6" onSubmit={onGenerate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <i className="fas fa-search text-indigo-400" />
                Tópico
              </label>
              <input value={topic} onChange={e=>setTopic(e.target.value)} type="text" placeholder="Ex: inteligência artificial" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <i className="fas fa-globe text-cyan-400" />
                País
              </label>
              <select value={country} onChange={e=>setCountry(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300">
                <option value="BR">🇧🇷 Brasil</option>
                <option value="US">🇺🇸 Estados Unidos</option>
                <option value="PT">🇵🇹 Portugal</option>
                <option value="ES">🇪🇸 Espanha</option>
                <option value="FR">🇫🇷 França</option>
                <option value="DE">🇩🇪 Alemanha</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <i className="fas fa-language text-purple-400" />
                Linguagem
              </label>
              <select value={language} onChange={e=>setLanguage(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300">
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="pt-PT">Português (Portugal)</option>
                <option value="es-ES">Español</option>
                <option value="fr-FR">Français</option>
                <option value="de-DE">Deutsch</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <i className="fas fa-calendar text-orange-400" />
                Período
              </label>
              <select value={period} onChange={e=>setPeriod(e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300">
                <option value="">Todos</option>
                <option value="h">Última hora</option>
                <option value="d">Últimas 24h</option>
                <option value="w">Última semana</option>
                <option value="m">Último mês</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button type="submit" className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105" disabled={loading}>
              {loading ? <div className="loading-spinner mx-auto" /> : (
                <span className="flex items-center justify-center gap-2"><i className="fas fa-rocket" />Gerar RSS</span>
              )}
            </button>

            <button type="button" onClick={onSave} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              <i className={`fas ${saved ? 'fa-check' : 'fa-save'}`} />
            </button>
          </div>
        </form>

        {/* Result */}
        {url && (
          <div className="mt-8 p-6 glassmorphism-strong rounded-xl">
            <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
              <i className="fas fa-check-circle" />
              RSS Gerado com Sucesso!
            </h4>
            <div className="space-y-4">
              <div className="relative">
                <input type="text" readOnly value={url} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-gray-300 pr-24" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                  <button onClick={onCopy} className="text-cyan-400 hover:text-cyan-300 p-2" title="Copiar"><i className="fas fa-copy" /></button>
                  <button onClick={onWebhook} className="text-indigo-400 hover:text-indigo-300 p-2" title="Enviar Webhook">
                    {sentWebhook === 'loading' ? <div className="loading-spinner" /> : sentWebhook === 'ok' ? <i className="fas fa-check text-green-400" /> : sentWebhook === 'error' ? <i className="fas fa-times text-red-400" /> : <i className="fas fa-paper-plane" />}
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <a className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-all duration-300 text-center" href={url} target="_blank" rel="noreferrer"><i className="fas fa-eye mr-2" />Visualizar Feed</a>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-all duration-300"><i className="fas fa-cog mr-2" />Configurar Automação</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Templates */}
      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Templates Rápidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(templates).map(([key, val]) => (
            <button key={key} onClick={() => { setTopic(val.topic); setCountry(val.country); setLanguage(val.language) }} className="feature-card rounded-xl p-4 text-left">
              <div className="flex items-center gap-3">
                <i className={`fas ${key==='tech'?'fa-microchip text-indigo-400': key==='business'?'fa-chart-line text-green-400': key==='sports'?'fa-futbol text-orange-400':'fa-heartbeat text-red-400'} text-2xl`} />
                <div>
                  <h4 className="font-semibold">{key==='tech'?'Tecnologia': key==='business'?'Negócios': key==='sports'?'Esportes':'Saúde'}</h4>
                  <p className="text-sm text-gray-400">{key==='tech'?'IA, startups, inovação': key==='business'?'Mercado, economia, empresas': key==='sports'?'Futebol, olimpíadas, competições':'Medicina, bem-estar, pesquisas'}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}


