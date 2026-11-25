import { Navigate, Route, Routes } from 'react-router'
import styles from './App.module.css'
import Main from './pages/Main'
import Navbar from './components/Navbar/Navbar'

function App() {
  const pages = {
    home: <Main />,
  }

  return (
    <div>
      <Navbar pages={pages} />
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} replace/>} />
        {
          Object.entries(pages).map(([name, element]) => (
            <Route key={name} path={`/${name}`} element={element}/>
          ))
        }
      <Route path='*' element={<Navigate to={'/home'} replace />} />
      </Routes>

    </div>
  )
}

export default App
