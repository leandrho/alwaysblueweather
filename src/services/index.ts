
import axios from "axios";
import { WeatherInfo } from "../types";
import { WeatherSchema } from "../schema/weather-schema";

export const getWeatherInfo = async (name: string, code: string) : Promise<WeatherInfo> => {

    try {
        const urlCoord = `https://api.openweathermap.org/data/2.5/weather?q=${name},${code}&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`;
        const {data} = await axios.get(urlCoord);
        const res  = WeatherSchema.safeParse(data);
        return res.success ? res.data : {} as WeatherInfo;

    } catch (error) {
        throw new Error("Can't get info from openweather - Error: "+error);
    }
}
export const getWeatherInfoByLatLong = async (lat: number, long: number) : Promise<WeatherInfo> => {

    try {
        const urlCoord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${import.meta.env.VITE_OPEN_WEATHER_KEY}`;
        const {data} = await axios.get(urlCoord);
        const res  = WeatherSchema.safeParse(data);
        return res.success ? res.data : {} as WeatherInfo;

    } catch (error) {
        throw new Error("Can't get info from openweather - Error: "+error);
    }
}

export const getLatLong = async () : Promise<{lat: number, long: number}> => {
  
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
            ( pos: GeolocationPosition )=>{ resolve({lat: pos.coords.latitude, long:pos.coords.longitude}) }
            ,(error)=>{reject(error)}
        );
    })
}