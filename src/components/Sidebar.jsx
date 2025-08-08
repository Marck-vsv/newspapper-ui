import { NavLink } from 'react-router-dom'

const menu = [
  { to: '/dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
  { to: '/generator', icon: 'fa-plus-circle', label: 'Gerador RSS', badge: 'dot' },
  { to: '/feeds', icon: 'fa-list', label: 'Meus Feeds', chip: '12' },
  { to: '/webhooks', icon: 'fa-link', label: 'Webhooks' },
  { to: '/analytics', icon: 'fa-chart-bar', label: 'Analytics' },
  { to: '/automation', icon: 'fa-robot', label: 'Automação', chip: 'Beta', chipColor: 'bg-purple-500' },
  { divider: true },
  { to: '/settings', icon: 'fa-cog', label: 'Configurações' },
  { to: '/help', icon: 'fa-question-circle', label: 'Ajuda' },
]

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`fixed left-0 top-0 h-full w-72 sidebar-glassmorphism z-40 mobile-menu ${open ? 'open' : ''}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center pulse-glow">
            <i className="fas fa-rss text-white text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">NewsPulse</h1>
            <p className="text-xs text-gray-400">Dashboard v2.0</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menu.map((item, idx) => item.divider ? (
            <hr key={`hr-${idx}`} className="border-white/10 my-4" />
          ) : (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `menu-item px-4 py-3 rounded-lg flex items-center gap-3 ${isActive ? 'active' : ''}`} onClick={onClose}>
              <i className={`fas ${item.icon} w-5`} />
              <span>{item.label}</span>
              {item.badge === 'dot' && <span className="notification-dot ml-auto w-2 h-2 bg-red-500 rounded-full" />}
              {item.chip && <span className={`ml-auto text-xs ${item.chipColor ? item.chipColor : 'bg-indigo-500'} px-2 py-1 rounded-full`}>{item.chip}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="glassmorphism rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">Usuário Pro</p>
              <p className="text-xs text-gray-400">flux@consultoria.ia</p>
            </div>
            <i className="fas fa-ellipsis-v text-gray-400" />
          </div>
        </div>
      </div>
    </aside>
  )
}


