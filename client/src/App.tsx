import './App.css'
import { ActionButton } from './components/Buttons'
import Navbar from './components/Navbar'
import chilling from './assets/chilling.png'

function App() {

  return (
    <div className='bg-sweet-purple flex flex-col w-screen min-h-screen font-montserrat'>
      <Navbar />
      <div className=' flex flex-1 flex-col items-center justify-center py-2 '>
        <img src={chilling} className=' size-fit object-none'></img>
        <div className=' flex flex-col items-center max-w-1/2 text-center gap-4'>
          <h1 className=' text-6xl font-extrabold'>
            <span className=' text-cream'>Never the same paint</span> twice again.
          </h1>
          <p className=' text-lg'>You'll know exactly what you have in your drawers – the brand, the quantity, the composition... Well, maybe not the last one, but you get the idea.</p>
          <ActionButton title='Get Started' />
        </div>
      </div>
    </div>
  )
}

export default App
