export default function AutomationPage() {
  const cards = [
    { icon:'fa-clock', bg:'bg-blue-500/20', text:'text-blue-400', title:'Agendamento Inteligente', desc:'Configure horários específicos para atualização de feeds baseado no volume de conteúdo.' },
    { icon:'fa-filter', bg:'bg-green-500/20', text:'text-green-400', title:'Filtros Automáticos', desc:'IA filtra automaticamente conteúdo relevante baseado em palavras-chave e sentimentos.' },
    { icon:'fa-share-alt', bg:'bg-orange-500/20', text:'text-orange-400', title:'Distribuição Multi-Canal', desc:'Envie automaticamente para Slack, Discord, Telegram e outras plataformas.' },
  ]

  const flows = [
    { title:'Tech News → Slack', status:['Ativo','green'], last:'Há 5 min', today:12, icon:'fa-play', gradient:'from-indigo-500 to-purple-600' },
    { title:'Business → Email Digest', status:['Pausado','yellow'], last:'Há 1 dia', today:0, icon:'fa-pause', gradient:'from-green-500 to-cyan-600' },
  ]

  return (
    <div>
      <div className="glassmorphism rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-robot text-purple-400" />
              Automação Inteligente
            </h3>
            <p className="text-gray-400 text-sm mt-1">Configure fluxos automatizados para seus feeds RSS</p>
          </div>
          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">BETA</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(c => (
            <div key={c.title} className="feature-card rounded-xl p-6">
              <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`fas ${c.icon} ${c.text} text-xl`} />
              </div>
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
              <button className={`w-full ${c.bg} hover:bg-white/20 ${c.text} py-2 rounded-lg transition-all duration-300`}>Configurar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Fluxos Ativos</h3>
        <div className="space-y-4">
          {flows.map(f => (
            <div key={f.title} className="glassmorphism-strong rounded-xl p-4 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${f.gradient} rounded-lg flex items-center justify-center`}>
                    <i className={`fas ${f.icon} text-white text-sm`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-gray-400 text-sm">{f.title.includes('Tech')?'Envia artigos de tecnologia para #tech-news':'Compilação diária de notícias de negócios'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`${f.status[0]==='Ativo'?'text-green-400':'text-yellow-400'} text-sm`}>{f.status[0]}</span>
                  <button className="text-gray-400 hover:text-white"><i className="fas fa-cog" /></button>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <span>Última execução: {f.last}</span>
                <span className="mx-2">•</span>
                <span>{f.today} artigos processados hoje</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


