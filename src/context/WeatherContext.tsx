import { createContext, ReactElement, useState } from "react";
import { WeatherInfo } from '../types/index';
import { getWeatherInfo } from "../services";

type WeatherContextType = {
    weatherInfo: WeatherInfo,
    searchWeather: (name: string, countryCode: string) => Promise<void>
    errorMsg: string
    loading: boolean
}
export const WeatherContext = createContext({} as WeatherContextType);

export type WeatherProviderProp = {
    children: ReactElement
}
export const WeatherProvider = ( { children }: WeatherProviderProp ) => {

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({} as WeatherInfo)
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const searchWeather = async (name: string, countryCode: string) : Promise<void> =>{
    setLoading(true);
    const newWeatherInfo : WeatherInfo = await getWeatherInfo(name, countryCode);
    if(newWeatherInfo.name){
        setWeatherInfo(newWeatherInfo);
        setErrorMsg('');
    }
    else{
        setErrorMsg("No se puede encontrar la ciudad ingresada!!");
    }
    setLoading(false);
  }

  return (
    <WeatherContext.Provider value={{ weatherInfo, searchWeather, errorMsg, loading }}>
        { children }
    </WeatherContext.Provider>
  )
}
