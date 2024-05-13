import React from 'react';
import {NavLink} from 'react-router-dom'

export const DetailsResto = () => {
  return (
    <div className=" bg-yellow-50 bg-opacity-60 text-black p-4 mt-3">
      <div className="text-center">
        <NavLink to='/menu'>
            <h2 className="text-lg font-bold m-8 underline">Reserva con nosotros</h2>
        </NavLink>
        <p className="m-4">Recibirás un correo electrónico con tu número de reserva. Estamos aquí para ayudarte en caso de cualquier pregunta o consulta que tengas.</p>
        <p className="m-4">Teléfono: +569 8569 5236</p>
        <p className="m-4">Correo electrónico: mantelrojo@gmail.com</p>
      </div>
    </div>
  );
};
