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
        <table className="table-fixed">
            <thead>
                <tr>
                    <th>Código de reserva</th>
                    <th>nombres</th>
                    <th>apellidos</th>
                    <th>correo</th>
                    <th>numero</th>
                    <th>menu</th>
                    <th>cantidad</th>
                    <th>Fecha reserva</th>
                </tr>
            </thead>
            <tbody>
            {
            clients.map(client => (
                
                <tr key={clients.id}>
                    <td>{client.id}</td>
                    <td>{client.names}</td>
                    <td>{client.apellidos}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{client.menu}</td>
                    <td>{client.number}</td>
                    <td>{client.datetime}</td>
                </tr>
                
            ))}
            </tbody>
        </table>
    );
}