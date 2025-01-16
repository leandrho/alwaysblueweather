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
          <div className="px-10  bg-white/20  backdrop-blur-xl min-w-[475px] rounded-xl shadow-md">
              <div className="border-b-2 border-blue-950">
                <h3 className="text-blue-950 text-sm font-bold pt-4 pb-2 text-center uppercase">Weather Details</h3>
                <p className="text-blue-950 text-3xl font-bold pb-2 text-center">{winfo.name}</p>
              </div>
              <WeatherSimpleDetail title={"Feels like"} value={winfo.main.feels_like} icon={SimpleIcon.Temp} unit={'°'}/> 
              <WeatherSimpleDetail title={"Temp max"} value={winfo.main.temp_max} icon={SimpleIcon.TempMax} unit={'°'}/> 
              <WeatherSimpleDetail title={"Temp min"} value={winfo.main.temp_min} icon={SimpleIcon.TempMin} unit={'°'}/> 
              <WeatherSimpleDetail title={"Humadity"} value={winfo.main.humidity} icon={SimpleIcon.Humadity} unit={'%'}/> 
              <WeatherSimpleDetail title={"Cloudy"} value={winfo.clouds.all} icon={SimpleIcon.Cloudy} unit={'%'}/> 
              <WeatherSimpleDetail title={"Wind"} value={Number((winfo.wind.speed * 3.6).toFixed(1))} icon={SimpleIcon.Windy} unit={'km/h'}/> 
          </div>
          : ''
          }
    </>
  )
}
