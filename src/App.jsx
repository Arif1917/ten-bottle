
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlePromise = fetch('./bottle.json')
.then( res => res.json())

function App() {
 
  return (
    <>
    <Suspense fallback={<h2>Bottle are loading</h2>}>
      <Bottles bottlePromise={bottlePromise}></Bottles>
    </Suspense>
    </>
  )
}

export default App
