import { BrowserRouter} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { RouterApp } from '../../routes/RouterApps'
import './App.css'

export const App = () => {
  
    return (
      <BrowserRouter>
        <RouterApp/>
        <Header/>
        <Footer/>
      </BrowserRouter>
    )
  }