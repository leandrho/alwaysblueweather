import { useEffect, useRef } from "react";
import { useWeather } from "../hooks/useWeather";
import { getLatLong } from "../services";



export const WeatherSearch = () => {
    const inputRef = useRef<HTMLInputElement>(null);
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
        if(inputRef.current){
            let value = inputRef.current.value.trim();
            if(value)
                searchWeather(value, 'AR');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-1">
            <input ref={inputRef} type="text" className="p-4 w-full rounded-md" aria-label="search text"/>
            <button type="submit" className="font-bold bg-blue-950 text-white p-4 rounded-md">Buscar</button>
        </form>
    )
}
