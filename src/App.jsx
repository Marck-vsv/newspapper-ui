import { useState, useMemo, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import GeneratorPage from './pages/GeneratorPage'
import FeedsPage from './pages/FeedsPage'
import WebhooksPage from './pages/WebhooksPage'
import AnalyticsPage from './pages/AnalyticsPage'
import AutomationPage from './pages/AutomationPage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [statusOnline] = useState(true)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="gradient-bg min-h-screen text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-5 blur-3xl floating-animation" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-400 rounded-full opacity-5 blur-3xl floating-animation" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl floating-animation" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Mobile Menu Toggle */}
      <button aria-label="Abrir menu" onClick={() => setMobileMenuOpen(true)} className="fixed top-4 left-4 z-50 lg:hidden glassmorphism p-3 rounded-xl text-white">
        <i className="fas fa-bars text-lg" />
      </button>

      {/* Sidebar */}
      <Sidebar open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 z-30 lg:hidden" />
      )}

      {/* Main */}
      <main className="lg:ml-72 min-h-screen">
        <Header online={statusOnline} />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/feeds" element={<FeedsPage />} />
            <Route path="/webhooks" element={<WebhooksPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
