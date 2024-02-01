import './App.css'
import { Creaciones } from './components/Creaciones'
import { Descripcion } from './components/Descripcion'
import { Header } from './components/Header'
import { Presentacion } from './components/Presentacion'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Presentacion/>
        <Descripcion/>
        <Creaciones/>
      </main>
    </>
  )
}

export default App
