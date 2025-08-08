import { useLocation } from 'react-router-dom'

const pageMeta = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Visão geral da sua plataforma RSS' },
  '/generator': { title: 'Gerador RSS', subtitle: 'Crie novos feeds personalizados do Google News' },
  '/feeds': { title: 'Meus Feeds', subtitle: 'Gerencie todos os seus feeds RSS ativos' },
  '/webhooks': { title: 'Webhooks', subtitle: 'Configure integrações e endpoints' },
  '/analytics': { title: 'Analytics', subtitle: 'Relatórios detalhados e métricas' },
  '/automation': { title: 'Automação', subtitle: 'Configure fluxos inteligentes e triggers' },
  '/settings': { title: 'Configurações', subtitle: 'Personalize sua conta e preferências' },
  '/help': { title: 'Ajuda & Suporte', subtitle: 'Documentação, tutoriais e FAQ' },
}

export default function Header({ online }) {
  const { pathname } = useLocation()
  const meta = pageMeta[pathname] || pageMeta['/dashboard']

  return (
    <header className="glassmorphism border-b border-white/10 p-6 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{meta.title}</h2>
          <p className="text-gray-400 text-sm">{meta.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="glassmorphism p-3 rounded-xl relative">
              <i className="fas fa-bell text-gray-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full notification-dot" />
            </button>
          </div>
          <div className="glassmorphism px-4 py-2 rounded-xl">
            <span className="text-sm font-medium">Status: </span>
            <span className={online ? 'text-green-400' : 'text-yellow-400'}>{online ? 'Online' : 'Instável'}</span>
          </div>
        </div>
      </div>
    </header>
  )
}


