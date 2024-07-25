import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import OneNews from './Components/Main/OneNews'
import AllNews from './Components/Main/AllNews'

function App() {

  return (
    <div className='main-element'>
      <Navbar />
      <Routes>
        <Route path='/song-festival/' element={<Main />} />
        <Route path='/song-festival/:navigateUrl' element={<OneNews />} />
        <Route path='/song-festival/all-news' element={<AllNews />} />
      </Routes>
    </div>
  )
}

export default App
