import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import { BrowserRouter } from 'react-router-dom'
// import { store } from './Redux/Store.tsx'
// import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/" >
    <App />
  </BrowserRouter>
)
