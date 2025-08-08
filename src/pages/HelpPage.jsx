export default function HelpPage() {
  const cards = [
    { icon:'fa-book', bg:'bg-indigo-500/20', text:'text-indigo-400', title:'Documentação', desc:'Guias completos e referência da API', action:'Ver Docs →' },
    { icon:'fa-video', bg:'bg-green-500/20', text:'text-green-400', title:'Tutoriais', desc:'Vídeos passo a passo', action:'Assistir →' },
    { icon:'fa-headset', bg:'bg-purple-500/20', text:'text-purple-400', title:'Suporte', desc:'Fale com nossa equipe', action:'Contatar →' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glassmorphism rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-6">Central de Ajuda</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map(c => (
            <div key={c.title} className="feature-card rounded-xl p-6 text-center">
              <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`fas ${c.icon} ${c.text} text-2xl`} />
              </div>
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
              <button className={`${c.text} hover:opacity-80`}>{c.action}</button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">Perguntas Frequentes</h4>
            <div className="space-y-4">
              {['Como configurar meu primeiro feed RSS?','Qual é o limite de feeds na versão gratuita?','Como integrar com n8n?','Posso usar webhooks personalizados?'].map(q => (
                <div key={q} className="glassmorphism-strong rounded-xl p-4">
                  <button className="w-full text-left flex items-center justify-between">
                    <span className="font-medium">{q}</span>
                    <i className="fas fa-chevron-down text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Status do Sistema</h4>
            <div className="glassmorphism-strong rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-medium">Todos os Sistemas Operacionais</h5>
                <span className="text-green-400 flex items-center gap-2"><i className="fas fa-circle text-xs" />Online</span>
              </div>
              <div className="space-y-3">
                {['API RSS','Webhooks','Dashboard','Automação'].map((s,idx)=> (
                  <div key={s} className="flex items-center justify-between">
                    <span className="text-gray-400">{s}</span>
                    <span className={idx===3? 'text-yellow-400':'text-green-400'}>{idx===3?'Manutenção':'Operacional'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


