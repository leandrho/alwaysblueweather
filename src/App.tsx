import { WeatherHeader } from './components/WeatherHeader';
import { WeatherHero } from './components/WeatherHero';
function App() {
  
  return (
    <div className='flex flex-col h-screen'>
      <WeatherHeader/>
      <main className='flex flex-grow p-8'> {/*bg-hero-summer bg-cover bg-center bg-no-repeat*/}
        <WeatherHero/>
        {/* <div className='w-96 h-96 bg-red-600'></div> */}
      </main>
    </div>
  )
}

export default App;