import { useState } from "react"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase.config' 
import { Form } from "../Formu/Formu"

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
        event.preventDefault()
        const client = {
            names,
            apellidos,
            email,
            phone,
            menu,
            datetime,
            number
        }
        await addDoc( clientsCollectionReference, client)
       
    }

    
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