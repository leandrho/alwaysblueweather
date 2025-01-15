import { useWeather } from '../hooks/useWeather';
import { WeatherLoading } from './WeatherLoading';
import { WeatherSearch } from './WeatherSearch';
import { WeatherTodayInfo } from './WeatherTodayInfo';


export const WeatherPanel = () => {
  const {loading} = useWeather();
  return (
    <div className="flex flex-col gap-4 justify-center bg-white/20  backdrop-blur-xl min-w-[475px] rounded-xl shadow-md">
        <WeatherSearch />
        {
          loading ?<WeatherLoading />
                  :<WeatherTodayInfo />
        }
        
    </div>
  )
}
