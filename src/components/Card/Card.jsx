import './Card.css'

import React, { useState } from 'react';

const Card = () => {
  // Estado para controlar qué imagen está agrandada
  const [enlargedSrc, setEnlargedSrc] = useState(null);

  // Función para manejar el clic en una imagen
  const enlargeImage = (src) => {
    setEnlargedSrc(src);
  };

  // Función para cerrar la imagen agrandada
  const closeEnlargedImage = () => {
    setEnlargedSrc(null);
  };

  return (
    <div className='grid gap-3 grid-cols-3'>
      {/* Primera imagen */}
      <div className='flex justify-center'>
        <figure className='relative mb-2 w-1/2 h-110 rounded-lg cursor-pointer'>
          <img
            className='mx-auto w-full h-full object-cover rounded-lg'
            src='../public/img/menu.jpg'
            alt='menuUno'
            onClick={() => enlargeImage('https://i.ibb.co/ckmGkHt/menuUno.png')}
          />
        </figure>
      </div>

      {/* Segunda imagen */}
      <div className='flex justify-center'>
        <figure className='relative mb-2 w-1/2 h-110 rounded-lg cursor-pointer'>
          <img
            className=' mx-auto w-full h-full object-cover rounded-lg'
            src='..public/img/menu.jpg'
            alt='menuDos'
            onClick={() => enlargeImage('https://i.ibb.co/yf4v7Bw/menuDos.png')}
          />
        </figure>
      </div>

      {/* Tercera imagen */}
      <div className='flex justify-center'>
        <figure className='relative mb-2 w-1/2 h-110 rounded-lg cursor-pointer'>
          <img
            className='mx-auto w-full h-full object-cover rounded-lg'
            src='https://i.ibb.co/r2PX0zw/menuTres.png'
            alt='menuTres'
            onClick={() => enlargeImage('https://i.ibb.co/r2PX0zw/menuTres.png')}
          />
        </figure>
      </div>

      {/* Imagen agrandada */}
      {enlargedSrc && (
        <div className='enlarged-overlay' onClick={closeEnlargedImage}>
          <img className='enlarged-image' src={enlargedSrc} alt='Enlarged' />
        </div>
      )}
    </div>
  );
};

export default Card;
