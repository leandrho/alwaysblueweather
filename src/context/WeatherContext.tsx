import { createContext, ReactElement } from "react";
import { WeatherInfo } from '../types/index';
import { useWeatherState } from "../hooks/useWeatherState";

export type WeatherContextType = {
    weatherInfo: WeatherInfo[];
    searchWeather: (name: string, countryCode: string) => Promise<void>;
    searchWeatherByLatLong: (lat: number, long: number) => Promise<void>;
    errorMsg: string;
    loading: boolean;
    cleanError: () => void;
    selectedWeatherID: number;
    setCurrentWeatherID: (id: number) => void;
    removeWeatherInfo: (id: number) => void;
}
export const WeatherContext = createContext({} as WeatherContextType);

export type WeatherProviderProp = {
    children: ReactElement
}
export const WeatherProvider = ( { children }: WeatherProviderProp ) => {
   const useweatherstate = useWeatherState();
 
  return (
    <WeatherContext.Provider value={ useweatherstate }>
        { children }
    </WeatherContext.Provider>
  )
}
