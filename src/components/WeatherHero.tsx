import { useWeather } from '../hooks/useWeather';
import { WeatherLoading } from './WeatherLoading';
import { WeatherWidgetList } from './WeatherWidgetList';

export const WeatherHero = () => {
  const {loading } = useWeather();
  return (
    <section className="flex-grow flex flex-col gap-4 justify-center self-center">
       {
        loading ?<WeatherLoading />
                :<WeatherWidgetList />

       }
    </section>
  )
}
