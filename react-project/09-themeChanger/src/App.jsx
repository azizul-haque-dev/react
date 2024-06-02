import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [themeMode, setTheme] = useState('light')
const darkMode = ()=> setTheme('dark')
const lightMode= ()=> setTheme('light')
useEffect(()=>{
  const html = document.querySelector('html')
  html.classList.remove('light','dark')
  html.classList.add(themeMode)
},[themeMode])
  return (
    <ThemeProvider value = {{themeMode, darkMode,lightMode}}> 
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

            </ThemeProvider>
   
  )
}

export default App
