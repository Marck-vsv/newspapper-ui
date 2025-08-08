import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Doughnut, PolarArea } from 'react-chartjs-2'

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, RadialLinearScale, Tooltip, Legend)

export default function AnalyticsPage() {
  const performance = {
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
  const source = {
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

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glassmorphism rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Performance dos Feeds</h3>
          <div className="h-64"><Bar data={performance} options={{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false }, ticks:{ color:'#9ca3af' } }, y:{ grid:{ color:'rgba(255,255,255,0.1)' }, ticks:{ color:'#9ca3af' } } } }} /></div>
        </div>
        <div className="glassmorphism rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição por Fonte</h3>
          <div className="h-64"><PolarArea data={source} options={{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#9ca3af' } } }, scales:{ r:{ ticks:{ color:'#9ca3af' }, grid:{ color:'rgba(255,255,255,0.1)' } } } }} /></div>
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Relatório Detalhado</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 font-semibold">Feed</th>
                <th className="text-left py-3 px-4 font-semibold">Artigos/Dia</th>
                <th className="text-left py-3 px-4 font-semibold">Última Atualização</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                {name:'Tecnologia Brasil', n:156, last:'Há 5 min', status:['Ativo','green']},
                {name:'Negócios Global', n:89, last:'Há 12 min', status:['Ativo','green']},
                {name:'Esportes BR', n:23, last:'Há 2 horas', status:['Pausado','yellow']},
              ].map((r)=> (
                <tr key={r.name} className="border-b border-white/5">
                  <td className="py-3 px-4">{r.name}</td>
                  <td className="py-3 px-4">{r.n}</td>
                  <td className="py-3 px-4">{r.last}</td>
                  <td className="py-3 px-4">
                    {r.status[0]==='Ativo' && (<span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Ativo</span>)}
                    {r.status[0]==='Pausado' && (<span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">Pausado</span>)}
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2"><i className="fas fa-chart-line" /></button>
                    <button className="text-cyan-400 hover:text-cyan-300"><i className="fas fa-cog" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


