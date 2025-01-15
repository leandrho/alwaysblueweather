import { WeatherHeader } from './components/WeatherHeader';
import { WeatherHero } from './components/WeatherHero';
import { WeatherPanel } from './components/WeatherPanel';
import { useWeather } from './hooks/useWeather';
function App() {
  const { errorMsg, cleanError } = useWeather();
  return (
    <>
    <div className='flex flex-col h-screen bg-cyan-50'>
      <WeatherHeader />
      <main className='flex flex-grow p-8 bg-hero-summer bg-cover bg-center bg-no-repeat'> {/*bg-hero-summer bg-cover bg-center bg-no-repeat*/}
        <WeatherHero/>
        <WeatherPanel />
        {/* <div className='w-96 h-96 bg-red-600'></div> */}
      </main>
    </div>
    {
      errorMsg.length?
      <div className='bg-red-700 text-white fixed bottom-0 left-0 w-full flex justify-between items-center px-6 py-4'>
        <p className='flex items-center text-base font-semibold'>{errorMsg}</p>
        <button type='button' className='px-8 bg-white text-red-700 rounded-lg hover:bg-gray-200'
         onClick={cleanError}
        >Close</button>
      </div> : ''
    }
    </>
  )
}

export default App;