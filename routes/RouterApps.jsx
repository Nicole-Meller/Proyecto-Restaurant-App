import {Route, Routes} from 'react-router-dom'
import {Home} from '../src/Pages/Home/Home'
import {Menu} from '../src/Pages/Menu/Menu'
import {Reservas} from '../src/Pages/Reservas/Reservas'


export const RouterApp = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Reservas" element={<Reservas/>}/>
        </Routes>
        </>
    )
}