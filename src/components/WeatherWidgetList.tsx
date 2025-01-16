import { useWeather } from "../hooks/useWeather";
import { WeatherWidget } from "./WeatherWidget";

export const WeatherWidgetList = () => {
    const {weatherInfo, selectedWeatherID, setCurrentWeatherID, removeWeatherInfo} = useWeather();
    const setActive = (id: number):void => {
        setCurrentWeatherID(id);
    }
    const removeWidget = (id: number) :void => {
        removeWeatherInfo(id);
    }
    return (
        <div className="flex flex-col gap-2">
            {
                weatherInfo.map( (winfo)=>(
                    <WeatherWidget
                        key={winfo.id} 
                        temp={winfo.main.temp} 
                        location={winfo.name} 
                        id={winfo.id} 
                        date={winfo.dt} 
                        active={selectedWeatherID===winfo.id}
                        setActive={setActive}
                        removeWidget={removeWidget}
                    />
                ) )
            }
        </div>
    )
}
