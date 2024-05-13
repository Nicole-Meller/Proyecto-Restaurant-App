import {NavLink} from 'react-router-dom'
import "./Header.css"
import React from 'react';

export const Header = () => {

const activeStyle = 'underline decoration-1'

    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-11 text-md font-light'>
        <ul className='flex items-center gap-3'>
          <li className='font-bold text-center'>
            <NavLink to='/'
            className={({isActive}) => 
            isActive ? activeStyle : undefined
            }>
              <p>MANTEL ROJO</p>
            </NavLink>
          </li>
        </ul>
        <ul className='flex items-center gap-3'>
          <li className='mr-4'>
            <NavLink to='/menu'
            className={({isActive}) => 
            isActive ? activeStyle : undefined
            }>
              Menu
            </NavLink>
          </li>
          <li className='mr-4'>
            <NavLink to='/reservas'
            className={({isActive}) => 
            isActive ? activeStyle : undefined
            }>
              Reservas
            </NavLink>
          </li>
        </ul>
      </nav>

    )
}
