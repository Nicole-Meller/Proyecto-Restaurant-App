import { useState } from "react"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase.config' 
import { Form } from "../Formu/Formu"
import Swal from 'sweetalert2';
import React from 'react';

export const CreateForm = () => {

    const [ names, setNames ] = useState('')
    const [ apellidos, setApellidos ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] =  useState('')
    const [ menu, setMenu ] = useState('')
    const [ datetime, setDatetime ] = useState('')
    const [ number, setNumber ] = useState('')

    const clientsCollectionReference = collection(db,'reservas')

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!names || !apellidos || !email || !phone || !menu || !datetime || !number) {
            Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: 'Por favor, completa todos los campos antes de enviar el formulario.',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
        const client = {
            names,
            apellidos,
            email,
            phone,
            menu,
            datetime,
            number
        };
        try {
            await addDoc(clientsCollectionReference, client);
            Swal.fire({
                icon: 'success',
                title: '¡Datos guardados correctamente!',
                text:'Se ha enviado su código de reserva a su correo',
                showConfirmButton: false,
                timer: 1500
            });
            setNames('');
            setApellidos('');
            setEmail('');
            setPhone('');
            setMenu('');
            setDatetime('');
            setNumber('');
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            Swal.fire({
                icon: 'error',
                title: '¡Ups! Algo salió mal.',
                text: 'No se pudieron guardar los datos. Por favor, inténtalo de nuevo.',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Form 
                        handleSubmit={onSubmit}
                        names={names}
                        setNames={setNames}
                        apellidos={apellidos}
                        setApellidos={setApellidos}
                        phone={phone}
                        setPhone={setPhone}
                        email={email}
                        setEmail={setEmail}
                        datetime={datetime}
                        setDatetime={setDatetime}
                        menu={menu}
                        setMenu={setMenu}
                        number={number}
                        setNumber={setNumber}
                        button='Crear reservación'
                    />
                </div>
            </div>
        </div>
        </>
    )
}