import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefaultLayout } from '@/components/Layout'
import { Fragment } from 'react'
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            {publicRoutes.map(route => {
              const Page = route.component
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
