import { useWeather } from "../hooks/useWeather"
import { SimpleIcon } from "../types";
import { WeatherSimpleDetail } from './WeatherSimpleDetail';

export const WeatherTodayInfo = () => {
    const {weatherInfo} = useWeather();
  return (
    <div className="px-10">
        <WeatherSimpleDetail title={"Temp max"} value={weatherInfo.main.temp_max} icon={SimpleIcon.TempMax} unit={'°'}/> 
        <WeatherSimpleDetail title={"Temp min"} value={weatherInfo.main.temp_min} icon={SimpleIcon.TempMin} unit={'°'}/> 
        <WeatherSimpleDetail title={"Humadity"} value={weatherInfo.main.humidity} icon={SimpleIcon.Humadity} unit={'%'}/> 
        <WeatherSimpleDetail title={"Cloudy"} value={weatherInfo.clouds.all} icon={SimpleIcon.Cloudy} unit={'%'}/> 
        <WeatherSimpleDetail title={"Wind"} value={weatherInfo.wind.speed} icon={SimpleIcon.Windy} unit={'km/h'}/> 
    </div>
  )
}
