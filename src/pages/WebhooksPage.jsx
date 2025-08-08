export default function WebhooksPage() {
  return (
    <div className="glassmorphism rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Configurações de Webhook</h3>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
          <i className="fas fa-plus mr-2" />
          Novo Webhook
        </button>
      </div>

      <div className="space-y-6">
        <div className="glassmorphism-strong rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Webhook Principal - n8n</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">URL do Webhook</label>
              <div className="flex gap-2">
                <input type="url" defaultValue="https://n8n.fluxconsultoria.com/webhook/rss-generator" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-xl"><i className="fas fa-vial" /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Método</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
                  <option>POST</option>
                  <option>GET</option>
                  <option>PUT</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Content-Type</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
                  <option>application/json</option>
                  <option>application/xml</option>
                  <option>text/plain</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Headers Personalizados</label>
              <textarea className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white h-20" placeholder={'Authorization: Bearer token\nX-Custom-Header: value'} />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="text-green-400 flex items-center gap-1"><i className="fas fa-circle text-xs" />Conectado</span>
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg">Salvar Configurações</button>
            </div>
          </div>
        </div>

        <div className="glassmorphism-strong rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4">Histórico de Envios</h4>
          <div className="space-y-3">
            {[{title:'RSS Tecnologia Brasil enviado', note:'Há 2 minutos • 200 OK', ok:true, icon:'fa-external-link-alt'}, {title:'RSS Negócios Global enviado', note:'Há 15 minutos • 200 OK', ok:true, icon:'fa-external-link-alt'}, {title:'Falha no envio RSS Esportes', note:'Há 1 hora • 500 Error', ok:false, icon:'fa-redo'}].map((i)=> (
              <div key={i.title} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${i.ok?'bg-green-500/20':'bg-red-500/20'} rounded-full flex items-center justify-center`}>
                    <i className={`fas ${i.ok?'fa-check text-green-400':'fa-times text-red-400'} text-sm`} />
                  </div>
                  <div>
                    <p className="font-medium">{i.title}</p>
                    <p className="text-sm text-gray-400">{i.note}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white"><i className={`fas ${i.icon}`} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


