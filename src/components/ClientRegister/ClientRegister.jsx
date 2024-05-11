import { useEffect, useState  } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase.config'

export const ClientRegister = () =>{

    const [ clients, setClients ] = useState([])

    const clientsCollectionReference = collection(db,'reservas')

    const getClient = async() => {
        const data = await getDocs(clientsCollectionReference);
        setClients(
            data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            
        )
        console.log(clients)
    }

    useEffect(() => {
        getClient()
    }, [])

    return(
        <table className="table-fixed w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="w-1/8 py-2">Código de reserva</th>
                    <th className="w-1/8 py-2">Nombre Cliente</th>
                    <th className="w-1/8 py-2">Apellido Cliente</th>
                    <th className="w-1/8 py-2">Correo de contacto</th>
                    <th className="w-1/8 py-2">Número de contacto</th>
                    <th className="w-1/8 py-2">Menú seleccionado</th>
                    <th className="w-1/8 py-2">Cantidad Asistentes</th>
                    <th className="w-1/8 py-2">Fecha de reserva</th>
                </tr>
            </thead>
            <tbody>
            {
            clients.map(client => (
                
                <tr key={clients.id} className="border-b border-gray-200">
                    <td className="py-2 text-center">{client.id}</td>
                    <td className="py-2 text-center">{client.names}</td>
                    <td className="py-2 text-center">{client.apellidos}</td>
                    <td className="py-2 text-center">{client.email}</td>
                    <td className="py-2 text-center">{client.phone}</td>
                    <td className="py-2 text-center">{client.menu}</td>
                    <td className="py-2 text-center">{client.number}</td>
                    <td className="py-2 text-center">{client.datetime}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}