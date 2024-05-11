import { useState } from "react"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase.config' 
import { useNavigate } from 'react-router-dom'

import { Form } from "../Form/Form"

export const CreateForm = () => {

    const [ names, setNames ] = useState('')
    const [ apellidos, setApellidos ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] =  useState('')
    const [ menu, setMenu ] = useState(0)
    const [ datetime, setDatetime ] = useState('')
    const [ number, setNumber ] = useState('')

    const navigate = useNavigate()

    const clientsCollectionReference = collection(db, 'reservas')

    const onSubmit = async (event) => {
        event.preventDefault()
        const client = {
            names,
            apellidos,
            email,
            RUT,
            phone,
            menu,
            datetime,
            number,
            status: false
        }
        await addDoc( clientsCollectionReference, client)
        navigate('/')
    }

    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Create New User</h2>

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