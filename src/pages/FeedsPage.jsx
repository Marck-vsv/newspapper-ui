export default function FeedsPage() {
  const feeds = [
    { title: 'Tecnologia Brasil', count: 156, icon: 'fa-microchip', bg:'bg-indigo-500/20', text:'text-indigo-400', status: { text: 'Ativo', cls: 'text-green-400', icon: 'fa-circle' }, last: 'Há 5 min', webhook: {text:'Conectado', cls:'text-cyan-400'}, progress: true },
    { title: 'Negócios Global', count: 89, icon: 'fa-chart-line', bg:'bg-green-500/20', text:'text-green-400', status: { text: 'Ativo', cls: 'text-green-400', icon: 'fa-circle' }, last: 'Há 12 min', webhook: {text:'Conectado', cls:'text-cyan-400'}, progress: true },
    { title: 'Esportes BR', count: 23, icon: 'fa-futbol', bg:'bg-orange-500/20', text:'text-orange-400', status: { text: 'Pausado', cls: 'text-yellow-400', icon: 'fa-pause' }, last: 'Há 2 horas', webhook: {text:'Desconectado', cls:'text-gray-400'}, progress: false },
  ]

  return (
    <div className="glassmorphism rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Meus Feeds RSS</h3>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
          <i className="fas fa-plus mr-2" />
          Novo Feed
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {feeds.map((f)=> (
          <div key={f.title} className="glassmorphism-strong rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center`}>
                  <i className={`fas ${f.icon} ${f.text}`} />
                </div>
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm text-gray-400">{f.count} artigos hoje</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white"><i className="fas fa-ellipsis-v" /></button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Status:</span>
                <span className={`${f.status.cls} flex items-center gap-1`}><i className={`fas ${f.status.icon} text-xs`} />{f.status.text}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Última atualização:</span>
                <span>{f.last}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Webhook:</span>
                <span className={f.webhook.cls}>{f.webhook.text}</span>
              </div>
              {f.progress ? <div className="progress-bar h-1 rounded-full mt-4" /> : <div className="bg-gray-600 h-1 rounded-full mt-4" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


