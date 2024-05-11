import {NavLink} from 'react-router-dom'
import "./Header.css"

export const Header = () => {

const activeStyle = 'underline decoration-1'

    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-11 text-md font-light'>
        <ul className='flex items-center gap-3'>
          <li className='text-center'>
            
            <span className='font-bold'>
              <p>MANTEL ROJO</p>
            </span>
          </li>
          <li className='font-semibold'>
            <NavLink to='/'
            className={({isActive}) => 
            isActive ? activeStyle : undefined
            }>
              Home
            </NavLink>
          </li>
        </ul>
        <ul className='flex items-center gap-3'>
          <li>
            <NavLink to='/menu'
            className={({isActive}) => 
            isActive ? activeStyle : undefined
            }>
              Menu
            </NavLink>
          </li>
          <li>
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
