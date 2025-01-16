import { useEffect, useRef, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { getLatLong } from "../services";



export const WeatherSearch = () => {

    const [error, setError] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const {searchWeather, searchWeatherByLatLong} = useWeather();

      useEffect(() => {
          const init = async () => {
            const {lat, long} = await getLatLong();
            await searchWeatherByLatLong(lat, long);
          }
          init();
      }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(inputRef.current && selectRef.current){
            let value = inputRef.current.value.trim();
            let selvalue = selectRef.current.value.trim();
            console.log('VAlues: ', value, selvalue)
            if(!value || !selvalue){
                setError(true);
                return;
            }
            setError(false);
            if(value && selvalue){
                searchWeather(value, selvalue);
                inputRef.current.value='';
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4  bg-white/20  backdrop-blur-xl min-w-[475px] rounded-xl shadow-md">
            {
                error ? <div className="text-white font-bold text-base text-center bg-red-500/80 py-2 rounded-md">
                            <p>Todos los campos son obligatorios..</p>
                        </div>
                      : ''
            }
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-white font-black">Location</label>
                <input id='city' name="city" ref={inputRef} type="text" className="p-4 w-full rounded-md" aria-label="search text"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-white font-black">Country</label>
                <select ref={selectRef} name="country" id="country" className="p-4 w-full rounded-md">
                    <option value="" className="rounded-md">- - select country - -</option>
                    <option value="AR" className="rounded-md">Argentina</option>
                    <option value="AU" className="rounded-md">Australia</option>
                    <option value="BR" className="rounded-md">Brasil</option>
                    <option value="CA" className="rounded-md">Canada</option>
                    <option value="CL" className="rounded-md">Chile</option>
                    <option value="CO" className="rounded-md">Colombia</option>
                    <option value="US" className="rounded-md">EE.UU</option>
                    <option value="MX" className="rounded-md">Mexico</option>
                    <option value="UY" className="rounded-md">Uruguay</option>
                </select>
            </div>
            <button type="submit" className="font-bold bg-blue-950 text-white p-4 rounded-md">Buscar</button>
        </form>
    )
}
