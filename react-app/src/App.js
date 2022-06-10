import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App({ library }) {
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");

    useEffect(() => {
        console.log(`It's ${emotion} right now`)
    }, [emotion, secondary]);

    useEffect(() => {
        console.log(`It's ${secondary} right now`)
    }, [secondary]);

    return (
        <div className="App">
            <h1>Current emotion is {emotion}</h1>
            <button onClick={() => setEmotion("sad")}>Sad</button>
            <button onClick={() => setEmotion("excited")}>Excited</button>
            <h2>Current secondary emotion is {secondary}</h2>
            <button onClick={() => setSecondary("grateful")}>Grateful</button>
        </div>
    );
}

export default App;
