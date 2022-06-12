import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function GithubUser({ name, location, avatar })
{
    return (
        <div>
            <h1>{name}</h1>
            <h1>{location}</h1>
            <img src={avatar} height={100} />
        </div>
    );
}

function App () {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("https://api.github.com/users/xtremesama")
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, []);

    if (loading)
    {
        return <h1>Loading...</h1>;
    }

    if (error)
    {
        return <pre>{JSON.stringify(error)}</pre>;
    }

    if (!data)
    {
        return null;
    }


    return (
        <GithubUser name={data.login} location={data.html_url} avatar={data.avatar_url} />
    );
}

export default App;
