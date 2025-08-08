export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6">Configurações Gerais</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nome da Organização</label>
              <input type="text" defaultValue="Flux Consultoria.ia" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Principal</label>
              <input type="email" defaultValue="contato@fluxconsultoria.ia" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Fuso Horário</label>
            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
              <option>America/Sao_Paulo (UTC-3)</option>
              <option>America/New_York (UTC-5)</option>
              <option>Europe/London (UTC+0)</option>
            </select>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Notificações</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-500 bg-white/10 border-white/20 rounded" /><span>Notificar quando um feed falhar</span></label>
              <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-500 bg-white/10 border-white/20 rounded" /><span>Relatório diário por email</span></label>
              <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 text-indigo-500 bg-white/10 border-white/20 rounded" /><span>Alertas de segurança</span></label>
            </div>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">API & Integrações</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Chave da API</label>
            <div className="flex gap-2">
              <input type="password" defaultValue="npulse_xxxxxxxxxxxxxxxxxxxxxxxx" className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" readOnly />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-3 rounded-xl">Gerar Nova</button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Rate Limit</label>
            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
              <option>100 requisições/hora</option>
              <option>500 requisições/hora</option>
              <option>1000 requisições/hora</option>
              <option>Ilimitado (Pro)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-red-400">Zona de Perigo</h3>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <h4 className="font-semibold text-red-400 mb-2">Exportar Dados</h4>
            <p className="text-gray-400 text-sm mb-3">Baixe todos os seus dados em formato JSON.</p>
            <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-all duration-300">Exportar Dados</button>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <h4 className="font-semibold text-red-400 mb-2">Resetar Configurações</h4>
            <p className="text-gray-400 text-sm mb-3">Retorna todas as configurações ao padrão.</p>
            <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-all duration-300">Resetar Tudo</button>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <h4 className="font-semibold text-red-400 mb-2">Excluir Conta</h4>
            <p className="text-gray-400 text-sm mb-3">Esta ação é irreversível e apagará todos os dados.</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300">Excluir Conta</button>
          </div>
        </div>
      </div>
    </div>
  )
}


