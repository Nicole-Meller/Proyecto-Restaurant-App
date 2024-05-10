export const Form = ({handleSubmit,names,setNames,apellidos,setApellidos,phone,setPhone,email,setEmail,date,setDate,hour,setHour,number,setNumber}) => {
return(
    <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                            Nombres
                        </label>
                        <input type="text" value={names}
                        onChange={(event) => setNames(event.target.value)} 
                        name="name" id="name" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                            Apellidos
                        </label>
                        <input type="text" value={apellidos}
                        onChange={(event) => setApellidos(event.target.value)} 
                        name="name" id="name" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                            Número de contacto
                        </label>
                        <input type="text" value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        name="phone" id="phone" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                            Correo Electrónico
                        </label>
                        <input type="text" value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email" id="email" 
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Fecha asistencia
                        </label>
                        <input type="date" value={date}
                        onChange={(event) => setDate(event.target.value)}
                        name="date" id="date"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Hora asistencia
                        </label>
                        <input type="time" value={hour}
                        onChange={(event) => setHour(event.target.value)}
                        name="time" id="time"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div class="mb-5 pt-3">
            <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">Detalles reserva</label>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <div class="flex flex-wrap items-center">
                    <label for="select" class="mb-3 block text-base font-medium text-[#07074D] sm:w-1/3">
                        Menú
                    </label>
                    <div class="w-full sm:w-2/3">
                        <select name="select" id="select" class="w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                            <option value="" class="font-semibold text-slate-300">Seleccione menú</option>
                            <option value="menuUno">Menu Uno</option>
                            <option value="menuDos">Menu Dos</option>
                            <option value="menuTres">Menu Tres</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <input type="text" 
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                placeholder="Cantidad asistentes"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
        </div>
    </div>
</div>
<div>
    <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
        Crear reservación
    </button>
</div>
        </form>
    </div>
</div>

)
}