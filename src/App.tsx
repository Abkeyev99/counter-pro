import React, {useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    const incHandler = () =>{setCount(count +1)}

    const resetHandler = () =>{setCount( 0)}

    const setHandler = () =>{}

    return (
        <div className="App">
            <div className={count < 10 ? "positive" : "negative" } >{count}</div>
            <div className="button">
                <button  className="button-inc" onClick={incHandler} disabled={count === 10}>inc</button>
                <button className="button-reset"  onClick={resetHandler}>reset</button>
                <button className="button-set"  onClick={setHandler}>set</button>
            </div>
        </div>
    );
}

export default App;
