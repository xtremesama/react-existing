import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function useInput (initialValue)
{
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (event) => setValue(event.target.value)
        },
        () => setValue(initialValue)
    ]
}

function App({ library }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (event) => {
        event.preventDefault();
        alert(`${titleProps.value} ${colorProps.value}`);

        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="color title..." />
            <input {...colorProps} type="color" />
            <button>Add</button>
        </form>
    );
}

export default App;
