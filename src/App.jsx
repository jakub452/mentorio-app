import { Navigate, Route, Routes } from 'react-router'
import styles from './App.module.css'
import Main from './pages/Main'
import Korepetytorzy from './pages/Korepetytorzy/Korepetytorzy'
import Navbar from './components/Navbar/Navbar'
import Test from './pages/Test/Test'

function App() {
  const pages = {
    home: <Main />,
    korepetytorzy: <Korepetytorzy />,
    test: <Test />
  }

  return (
    <div>
      <Navbar pages={pages} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>} />
        {
          Object.entries(pages).map(([name, element]) => (
            <Route key={name} path={`/${name}`} element={element}/>
          ))
        }
      </Routes>
    </div>
  )
}

export default App
