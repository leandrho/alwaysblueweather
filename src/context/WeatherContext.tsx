import { createContext, ReactElement, useState } from "react";
import { WeatherInfo } from '../types/index';
import { getWeatherInfo, getWeatherInfoByLatLong } from "../services";
import { kelvinToCelsius } from "../utils";

type WeatherContextType = {
    weatherInfo: WeatherInfo,
    searchWeather: (name: string, countryCode: string) => Promise<void>
    searchWeatherByLatLong: (lat: number, long: number) => Promise<void>
    errorMsg: string
    loading: boolean
}
export const WeatherContext = createContext({} as WeatherContextType);

const initialState :WeatherInfo = {
    name: '',
    timezone: 0,
    main:{
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
    },
    visibility: 0,
    wind:{
        speed: 0,
        deg: 0,
    },
    sys: {
        country: '',
        sunrise: 0,
        sunset: 0,
    }
};

export type WeatherProviderProp = {
    children: ReactElement
}
export const WeatherProvider = ( { children }: WeatherProviderProp ) => {

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>(initialState)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const searchWeather = async (name: string, countryCode: string) : Promise<void> =>{

    setLoading(true);
    const newWeatherInfo : WeatherInfo = await getWeatherInfo(name, countryCode);

    if(newWeatherInfo.name){
        setWeatherInfo({...newWeatherInfo, main: {...newWeatherInfo.main, temp: kelvinToCelsius(newWeatherInfo.main.temp), temp_max: kelvinToCelsius(newWeatherInfo.main.temp_max), temp_min: kelvinToCelsius(newWeatherInfo.main.temp_min)}});
        setErrorMsg('');
    }
    else{
        setErrorMsg("No se puede encontrar la ciudad ingresada!!");
    }
    setLoading(false);
  }
  const searchWeatherByLatLong = async (lat: number, long: number) : Promise<void> =>{

    setLoading(true);
    const newWeatherInfo : WeatherInfo = await getWeatherInfoByLatLong(lat, long);

    if(newWeatherInfo.name){
        setWeatherInfo({...newWeatherInfo, main: {...newWeatherInfo.main, temp: kelvinToCelsius(newWeatherInfo.main.temp), temp_max: kelvinToCelsius(newWeatherInfo.main.temp_max), temp_min: kelvinToCelsius(newWeatherInfo.main.temp_min)}});
        setErrorMsg('');
    }
    else{
        setErrorMsg("No se puede encontrar la ciudad ingresada!!");
    }
    setLoading(false);
  }

  return (
    <WeatherContext.Provider value={{ weatherInfo, searchWeather, searchWeatherByLatLong, errorMsg, loading }}>
        { children }
    </WeatherContext.Provider>
  )
}
