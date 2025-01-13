import { WeatherSearch } from './WeatherSearch';

export const WeatherPanel = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-cyan-100 min-w-[475px] rounded-xl shadow-md">
        <WeatherSearch />

    </div>
  )
}
