import './App.css'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

// 4 - navegando entre paginas
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <h1>React Router</h1>
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
