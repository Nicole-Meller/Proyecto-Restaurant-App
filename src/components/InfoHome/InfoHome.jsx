import React from 'react';
import {NavLink} from 'react-router-dom'


export const InfoHome = () => {
return (

<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
  <div className='sm:basis-1/2 ml-3.5'>
    <img src="../img/homeImg.jpg" alt="Imagen" className='rounded-lg border-4 border-gray-500/50 w-full sm:w-auto mx-auto' />
  </div>
  <div className='basis-1/2 '>
    <h1 className='mb-9 text-center font-bold text-2xl'>"Únicos en comida casera"</h1>
    <p className='mb-2 text-center text-xl'>Disfruta de una experiencia gastronómica única en Mantel Rojo, donde la tradición se fusiona con la innovación para ofrecerte platos exquisitos que deleitarán tu paladar.</p>
    <p className='mb-2 text-center text-xl hidden sm:table-cell'>En Mantel Rojo, cada plato es una obra maestra culinaria, elaborada con ingredientes frescos y de alta calidad, que reflejan el auténtico sabor y la pasión por la cocina.</p>
    <br />
    <br />
    <NavLink to='/menu'>
    <p className='text-center text-xl mb-4 underline'> Conoce nuestro menú y reserva con nosotros</p>
    </NavLink>
    <br />
    <br />
    <br />
    <div className='flex flex-row'>
      <div className='basis-2/4 border-t-4 border-yellow-100 m-8 text-center'>
        <a className='text-2xl'>Desde</a>
        <p className='text-xl'>2002</p>
      </div>
      <div className='basis-2/4 border-t-4 border-yellow-100 m-8 text-center'>
        <a className='text-2xl'>Rating</a>
        <p className='text-xl'>★★★★★</p>
      </div>
     </div>
     <div className='flex flex-row'>
      <div className='basis-2/4 border-t-4 border-yellow-100 m-8 text-center'>
        <a className='text-2xl'>Ubicación</a>
        <p className='text-xl'>Santiago de Chile</p>
      </div>
      <div className='basis-2/4 border-t-4 border-yellow-100 m-8 text-center'>
        <a className='text-2xl'>Comensales</a>
        <p className='text-xl'>+ 40K</p>
      </div>
     </div>

  
  </div>
</div>

)
}

