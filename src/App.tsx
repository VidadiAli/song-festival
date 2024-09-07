import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import OneNews from './Components/Main/OneNews'
import AllNews from './Components/Main/AllNews'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='main-element'>
      <Navbar />
      <Routes basename="/song-festival">
        <Route path='/song-festival/' element={<Main />} />
        <Route path='/song-festival/:navigateUrl' element={<OneNews />} />
        <Route path='/song-festival/all-news' element={<AllNews />} />
        <Route path='/song-festival/news' element={<AllNews />} />
        <Route path='/song-festival/about-us' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
