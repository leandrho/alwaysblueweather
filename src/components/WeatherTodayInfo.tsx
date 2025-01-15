import { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather"
import { SimpleIcon, WeatherInfo } from "../types";
import { WeatherSimpleDetail } from './WeatherSimpleDetail';

export const WeatherTodayInfo = () => {

  const {weatherInfo, selectedWeatherID} = useWeather();
  const [winfo, setWinfo] = useState<WeatherInfo>();
  useEffect(() => {
   const win : WeatherInfo | undefined = weatherInfo.find( wi => wi.id === selectedWeatherID);
   if(win)
      setWinfo(win);
  }, [selectedWeatherID])
  
  
  return (
    <>
          {
          winfo?
          <div className="px-10">
              <WeatherSimpleDetail title={"Temp max"} value={winfo.main.temp_max} icon={SimpleIcon.TempMax} unit={'°'}/> 
              <WeatherSimpleDetail title={"Temp min"} value={winfo.main.temp_min} icon={SimpleIcon.TempMin} unit={'°'}/> 
              <WeatherSimpleDetail title={"Humadity"} value={winfo.main.humidity} icon={SimpleIcon.Humadity} unit={'%'}/> 
              <WeatherSimpleDetail title={"Cloudy"} value={winfo.clouds.all} icon={SimpleIcon.Cloudy} unit={'%'}/> 
              <WeatherSimpleDetail title={"Wind"} value={winfo.wind.speed} icon={SimpleIcon.Windy} unit={'km/h'}/> 
          </div>
          : ''
          }
    </>
  )
}
