import './App.css'
import AppRoutes from './routes'

function App() {
  return (
    <>
      <header>
        {/* <nav>
          <Link to="/">Home</Link>
        </nav> */}
        <h1>Endereço - APP</h1>
      </header>

      <main>
        <AppRoutes />
      </main>
    </>
  )
}

export default App
