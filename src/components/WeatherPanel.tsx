import { useWeather } from '../hooks/useWeather';
import { WeatherLoading } from './WeatherLoading';
import { WeatherSearch } from './WeatherSearch';
import { WeatherTodayInfo } from './WeatherTodayInfo';


export const WeatherPanel = () => {
  const {loading} = useWeather();
  return (
    <div className="flex flex-col gap-4 max-w-[640px]">
        <WeatherSearch />
        {
          loading ?<WeatherLoading />
                  :<WeatherTodayInfo />
        }
        
    </div>
  )
}
