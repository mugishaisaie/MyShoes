import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

export default function App() {
  const notFoundRoute = routes.find(r => r.path === '/not-found')
  const NotFoundComponent = notFoundRoute ? notFoundRoute.component : null

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <Container>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={<r.component />} />
            ))}
            {NotFoundComponent && <Route path="*" element={<NotFoundComponent />} />}
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
