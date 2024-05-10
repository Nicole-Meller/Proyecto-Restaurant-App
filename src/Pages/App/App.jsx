import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home/Home'
import Menu from '../Menu/Menu'
import Reservas from '../Reservas/Reservas'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/menu', element: <Menu/>},
    {path: '/reservas', element: <Reservas/>}
  ])
  return routes
}

const App = () => {
  
    return (
      <BrowserRouter>
        <AppRoutes/>
        <Header/>
        <Footer/>
      </BrowserRouter>
    )
  }
  
  export default App;