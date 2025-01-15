import { useWeather } from '../hooks/useWeather';
import { WeatherLoading } from './WeatherLoading';
import { WeatherWidget } from './WeatherWidget';

export const WeatherHero = () => {
  const {loading } = useWeather();
  return (
    <section className="flex-grow flex flex-col gap-4 justify-center ml-20">
       {
        loading ?<WeatherLoading />
                :<WeatherWidget />

       }
    </section>
  )
}
