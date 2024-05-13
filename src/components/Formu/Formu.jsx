import React from 'react';

export const Form = ({handleSubmit,names,setNames,apellidos,setApellidos,phone,setPhone,email,setEmail,datetime,setDatetime,menu,setMenu,number,setNumber,button}) => {
    return(
        <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit}>
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl text-center">Ingresa tus datos personales para completar la reserva:</label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Nombres
                            </label>
                            <input type="text" value={names}
                            onChange={(event) => setNames(event.target.value)} 
                            name="name" id="name" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                Apellidos
                            </label>
                            <input type="text" value={apellidos}
                            onChange={(event) => setApellidos(event.target.value)} 
                            name="name" id="name" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/1">
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Correo Electrónico
                            </label>
                            <input type="text" value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            name="email" id="email" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Número de contacto
                            </label>
                            <input type="text" value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            name="phone" id="phone" 
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="fechaHora" className="mb-3 block text-base font-medium text-[#07074D]">
                            Selecciona Fecha y Hora:
                            </label>
                            <input type="datetime-local" value={datetime}
                            onChange={(event) => setDatetime(event.target.value)}
                            name="fechaHora" id="fechaHora"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">Detalles reserva</label>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <div className="flex flex-wrap items-center">
                        <label htmlFor="select" className="mb-3 block text-base font-medium text-[#07074D] sm:w-1/3">
                            Menú
                        </label>
                        <div className="w-full sm:w-2/3">
                            <select name="select" id="select" 
                            value={menu}
                            onChange={(event) => setMenu(event.target.value)}
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                                <option value="" className="font-semibold text-slate-300">Seleccione menú</option>
                                <option value="menuUno">Menu uno</option>
                                <option value="menuDos">Menu dos</option>
                                <option value="menuTres">Menu tres</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                    <input type="number" 
                    value={number}
                    onChange={(event) => {
                        const inputValue = event.target.value;
                        if (parseInt(inputValue) < 1 || isNaN(parseInt(inputValue))) {
                            setNumber(1);
                        } else {
                            setNumber(inputValue);
                        }
                    }}
                    placeholder="Cantidad asistentes"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
        </div>
    </div>
    <div>
        <button className="hover:shadow-form w-full rounded-md bg-[#FFFFCC] py-3 px-8 text-center text-base font-semibold text-black outline-none">
            {button}
        </button>
    </div>
            </form>
        </div>
    </div>
    
    )
    }