import {Route, Routes} from 'react-router-dom'
import { Home } from '../src/Pages/Home/Home'
import { Reservas } from '../src/Pages/Reservas/Reservas'
import { Menu } from '../src/Pages/Menu/Menu'
import React from 'react';


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