import { WeatherWidget } from './WeatherWidget';

export const WeatherHero = () => {
  return (
    <section className="flex-grow flex flex-col gap-4 justify-center ml-20">
        <WeatherWidget />
    </section>
  )
}
