import { useCallback, useEffect, useState } from 'react';
import { WeatherInfo } from '../types/index';
import { getWeatherInfo, getWeatherInfoByLatLong } from '../services';
import { kelvinToCelsius } from '../utils';

export const useWeatherState = () => {
    
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo[]>([]);
    const [selectedWeatherID, setSelectedWeatherID] = useState<number>(0);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      if(weatherInfo.length > 0)
        setSelectedWeatherID(weatherInfo[weatherInfo.length-1].id);

    }, [weatherInfo])
    

    const searchWeather = useCallback( async (name: string, countryCode: string) : Promise<void> =>{
  
        if(weatherInfo.some((w)=>w.name.toLowerCase()==name.toLowerCase()))
            return;
        setLoading(true);
        try {
            const newWeatherInfo : WeatherInfo = await getWeatherInfo(name, countryCode);
            const n = {...newWeatherInfo, id: Date.now(), main: {...newWeatherInfo.main, feels_like: kelvinToCelsius(newWeatherInfo.main.feels_like), temp: kelvinToCelsius(newWeatherInfo.main.temp), temp_max: kelvinToCelsius(newWeatherInfo.main.temp_max), temp_min: kelvinToCelsius(newWeatherInfo.main.temp_min)}};
            setWeatherInfo((prev)=>[...prev, n]);
            setErrorMsg('');
           
        } catch (error) {
            setErrorMsg(`No se puede encontrar la ciudad : ${name}`);
        }
        finally{
            setLoading(false);
        }
    }, []);
    const searchWeatherByLatLong = useCallback( async (lat: number, long: number) : Promise<void> =>{
  
        setLoading(true);
        try {
            const newWeatherInfo : WeatherInfo = await getWeatherInfoByLatLong(lat, long);
            const n = {...newWeatherInfo, id: Date.now(), main: {...newWeatherInfo.main, feels_like: kelvinToCelsius(newWeatherInfo.main.feels_like), temp: kelvinToCelsius(newWeatherInfo.main.temp), temp_max: kelvinToCelsius(newWeatherInfo.main.temp_max), temp_min: kelvinToCelsius(newWeatherInfo.main.temp_min)}};
            setWeatherInfo([n]);
            setErrorMsg('');
           
        } catch (error) {
            setErrorMsg(`No se puede encontrar la ciudad actual`);
        }
        finally{
            setLoading(false);
        }
    }, [])
    const cleanError = useCallback( () => {
        setErrorMsg('');
    },[]);
    const setCurrentWeatherID = useCallback( (id: number):void=>{
        setSelectedWeatherID(id);
    }, [])
    const removeWeatherInfo = useCallback( (id: number):void => {
        setWeatherInfo((prev)=>prev.filter(info => info.id!== id));
    }, [])
    return {
        weatherInfo,
        selectedWeatherID,
        errorMsg,
        loading,
        searchWeather,
        searchWeatherByLatLong,
        cleanError,
        setCurrentWeatherID,
        removeWeatherInfo
    };
}
