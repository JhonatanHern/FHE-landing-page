import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import SchoolPage from './pages/SchoolPage'
import './App.css'

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/escuelas/:slug" element={<SchoolPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
