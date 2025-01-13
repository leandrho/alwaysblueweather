import { WeatherHeader } from './components/WeatherHeader';
import { WeatherHero } from './components/WeatherHero';
import { WeatherPanel } from './components/WeatherPanel';
function App() {
  
  return (
    <div className='flex flex-col h-screen bg-cyan-50'>
      <WeatherHeader/>
      <main className='flex flex-grow p-8'> {/*bg-hero-summer bg-cover bg-center bg-no-repeat*/}
        <WeatherHero/>
        <WeatherPanel />
        {/* <div className='w-96 h-96 bg-red-600'></div> */}
      </main>
    </div>
  )
}

export default App;