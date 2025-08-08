import { useEffect } from 'react'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Doughnut, Bar, PolarArea } from 'react-chartjs-2'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, ArcElement, BarElement, RadialLinearScale, Tooltip, Legend)

export default function DashboardPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`
        card.classList.add('animate-slide-in')
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const lineData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [{
      label: 'Artigos',
      data: [320, 450, 380, 520, 610, 890, 1200],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
      fill: true,
    }],
  }
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
      y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#9ca3af' } },
    },
  }

  const doughnutData = {
    labels: ['Tecnologia', 'Negócios', 'Esportes', 'Saúde', 'Outros'],
    datasets: [{
      data: [35, 25, 15, 15, 10],
      backgroundColor: ['#6366f1', '#22d3ee', '#f59e0b', '#ef4444', '#8b5cf6'],
    }],
  }

  const barData = {
    labels: ['Tech BR', 'Business', 'Sports', 'Health', 'Science'],
    datasets: [{
      label: 'Artigos/Hora',
      data: [12, 8, 3, 5, 7],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(34, 211, 238, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ],
    }],
  }

  const polarData = {
    labels: ['Google News', 'Reuters', 'BBC', 'CNN', 'Local'],
    datasets: [{
      data: [40, 20, 15, 15, 10],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(34, 211, 238, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(139, 92, 246, 0.8)',
      ],
    }],
  }

  const legendBottom = { plugins: { legend: { position: 'bottom', labels: { color: '#9ca3af' } } }, maintainAspectRatio: false, responsive: true }

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{icon:'fa-rss', bg:'bg-indigo-500/20', text:'text-indigo-400', value:'24', label:'Feeds Ativos', trend:'+12%'}, {icon:'fa-download', bg:'bg-cyan-500/20', text:'text-cyan-400', value:'1.2K', label:'Artigos Hoje', trend:'+5.2%'}, {icon:'fa-link', bg:'bg-purple-500/20', text:'text-purple-400', value:'8', label:'Webhooks', trend:'+8.1%'}, {icon:'fa-check-circle', bg:'bg-green-500/20', text:'text-green-400', value:'100%', label:'Uptime', trend:'99.9%'}].map(card => (
          <div key={card.label} className="stat-card glassmorphism rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center`}>
                <i className={`fas ${card.icon} ${card.text} text-xl`} />
              </div>
              <span className="text-xs text-green-400">{card.trend}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{card.value}</h3>
            <p className="text-gray-400 text-sm">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glassmorphism rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Artigos por Dia</h3>
          <div className="h-64"><Line data={lineData} options={lineOptions} /></div>
        </div>
        <div className="glassmorphism rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Feeds por Categoria</h3>
          <div className="h-64"><Doughnut data={doughnutData} options={legendBottom} /></div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          {[
            { icon:'fa-plus', bg:'bg-green-500/20', text:'text-green-400', title:'Novo feed criado: "Tecnologia Brasil"', time:'Há 2 minutos' },
            { icon:'fa-sync', bg:'bg-blue-500/20', text:'text-blue-400', title:'Feed atualizado: 156 novos artigos', time:'Há 5 minutos' },
            { icon:'fa-robot', bg:'bg-purple-500/20', text:'text-purple-400', title:'Automação executada com sucesso', time:'Há 10 minutos' },
          ].map((i) => (
            <div key={i.title} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className={`w-8 h-8 ${i.bg} rounded-full flex items-center justify-center`}>
                <i className={`fas ${i.icon} ${i.text} text-sm`} />
              </div>
              <div className="flex-1">
                <p className="font-medium">{i.title}</p>
                <p className="text-gray-400 text-sm">{i.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


