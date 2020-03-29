import React, { useState } from 'react'
import './global.scss'
import Routes from './routes'

function App() {

    // const [counter, setCounter] = useState(0)

    // function increment() {
    //     setCounter(counter + 1)
    // }

    //     return (
    //         <>
    //         <Header title="Semana OmniStack">Semana OmniStack Children</Header>
    //         <div>Contador: {counter}</div>
    //         <button onClick={increment}>Incrementar</button>
    //         </>
    //     )

    return (
        <Routes />
    )

}

export default App
