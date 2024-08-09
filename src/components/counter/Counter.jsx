import { useState } from 'react';
import './Counter.css'

function Counter() {
    // const estadoContador = useState(100)
    // let counter = estadoContador[0];
    // const setCounter = estadoContador[1]
    const [ counter, setCounter ] = useState(100)



    function incrementarValor() {
        setCounter(() => counter + 10)
    }

    function decrementarValor() {
        setCounter(() => counter - 10)
    }

    return <div className="counter-card">
        <div className="counter-value">
            { counter }
        </div>
        <div className="btn-container">
            <button className="btn" onClick={  () => decrementarValor()  }>
                -
            </button>
            <button className="btn" onClick={  () => incrementarValor()  }>
                +
            </button>
        </div>
    </div>

}

export default Counter;
