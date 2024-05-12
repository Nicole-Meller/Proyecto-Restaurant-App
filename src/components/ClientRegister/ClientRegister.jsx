import { useEffect, useState  } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import React from 'react';

export const ClientRegister = () =>{

    const [ clients, setClients ] = useState([])

    const clientsCollectionReference = collection(db,'reservas')

    const getClient = async() => {
        const data = await getDocs(clientsCollectionReference);
        setClients(
            data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            
        )
    }

    useEffect(() => {
        getClient()
    }, [])

    return(
    <div className="overflow-x-auto max-w-full">
        <table className="border-separate border-spacing-2">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 border hidden sm:table-cell">Código</th>
                    <th className="py-2 border">Nombre Cliente</th>
                    <th className="py-2 border">Apellido Cliente</th>
                    <th className="py-2 border">Correo de contacto</th>
                    <th className="py-2 border">Número de contacto</th>
                    <th className="py-2 border">Menú seleccionado</th>
                    <th className="py-2 border">Cantidad Asistentes</th>
                    <th className="py-2 border">Fecha de reserva</th>
                </tr>
            </thead>
            <tbody className="overflow-y-scroll">
                {
                    clients.map(client => (
                        <tr key={client.id} className="border-b border-gray-200">
                            <td className="py-2 text-center hidden sm:table-cell">{client.id}</td>
                            <td className="py-2 text-center">{client.names}</td>
                            <td className="py-2 text-center">{client.apellidos}</td>
                            <td className="py-2 text-center">{client.email}</td>
                            <td className="py-2 text-center">{client.phone}</td>
                            <td className="py-2 text-center">{client.menu}</td>
                            <td className="py-2 text-center">{client.number}</td>
                            <td className="py-2 text-center">{client.datetime}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    );
}