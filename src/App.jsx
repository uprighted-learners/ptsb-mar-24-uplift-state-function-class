import { useState } from 'react'
import FahrenheitToCelsius from './components/FahrenheitToCelsius'
import './App.css'

// This App.jsx demonstrates how to send information from child component to parent component

// Functional child component: Hello.
// Hello receives a prop called name.
function Hello({ name }) {
  return <h1>Hello, {name}</h1>
}

function App() {
  // Create celsius state variable.
  // setCelsius is the state variable updater function for celsius
  const [celsius, setCelsius] = useState(0);
  const helloName = "Frank";

  // This function exists on the App.jsx component.
  // This will be passed to the child component FahrenheitToCelsius as a prop value.
  // When the child component calls this, this will update the celsius value
  function handleFahrenheitToCelsiusChange(celsiusValue) {
    setCelsius(celsiusValue)
  }

  return (
    <>
      {/* Child component: FahrenheitToCelsius */}
      {/* This component takes a prop called onTemperatureChange that binds to the handleFahrenheitToCelsiusChange function above */}
      <FahrenheitToCelsius onTemperatureChange={handleFahrenheitToCelsiusChange} />

      <p>The celsius is {celsius}</p>

      {/* Hello component is receiving a prop called 'name' from App.jsx */}
      <Hello name={helloName}/>
    </>
  )
}

export default App
