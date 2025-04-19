
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'



function App() {

  return (
    <>
    <Suspense>
      <Bottles></Bottles>
    </Suspense>
    </>
  )
}

export default App
