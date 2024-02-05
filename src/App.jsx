import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title/Title'
import Logo from './components/ourItems/OurItems'
import Items from './components/items/Items'
import Status from './components/status/Status'

function App() {
    return (
      <>
         <div className='flex flex-col justify-center '> 
                 <Title/>
                 <Items/>
                 <Status/>
    <footer className='flex bg-orange-400 h-[3rem] items-center justify-center text-xl'> 
      <p >PROUDLY US FROM NIGERIA  (^_^)</p>
    </footer>
         </div>
      </>
    
  )
}

export default App
