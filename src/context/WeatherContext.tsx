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

// export const initialState :WeatherInfo = {
//     id: 0,
//     dt: 0,
//     name: '',
//     timezone: 0,
//     main:{
//         temp: 0,
//         feels_like: 0,
//         temp_min: 0,
//         temp_max: 0,
//         pressure: 0,
//         humidity: 0,
//     },
//     visibility: 0,
//     wind:{
//         speed: 0,
//         deg: 0,
//     },
//     sys: {
//         country: '',
//         sunrise: 0,
//         sunset: 0,
//     },
//     clouds: {
//         all: 0
//     }
// };

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
