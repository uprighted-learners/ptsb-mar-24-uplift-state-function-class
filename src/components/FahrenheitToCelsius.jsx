// Component: FahrenheitToCelsius
// Receives prop from App.jsx called onTemperatureChange
function FahrenheitToCelsius({ onTemperatureChange }) {

    // Submit event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.ftc.value);
        // Get value from input field
        const fahrenheitValue = parseFloat(e.target.ftc.value);

        // Using the fahrenheit, calculate the celsius
        const celsiusValue = (fahrenheitValue - 32) * (5/9);

        console.log(celsiusValue);
        // Trigger the onTemperatureChange function which will trigger handleFahrenheitToCelsiusChange within App.jsx
        // This will send the celsius to the App.jsx component. This will update the celsius state variable inside App.jsx
        // celsius is being spit out onto the page within App.jsx
        onTemperatureChange(celsiusValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ftc">Temperature: Fahrenheit to Celsius</label>
            <input 
                type="text"
                id="ftc"
                name="ftc"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default FahrenheitToCelsius;