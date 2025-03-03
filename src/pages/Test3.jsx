//useState: useState is a React Hook that allows functional components to manage state. it enables components to:Store dynamic data, Update the UI when state changes,Keep track of user interactions
//useEffect: is a React Hook that lets you perform side effects in functional component: Fetching API data, Updating the page title or DOM, Setting up and cleaning up event listeners,..
//--> Get API
//--> Update Dom
//--> Event

// useSearchParams is a React Router hook that helps manage query parameters in the URL.Searching, filtering, pagination
//useParams is a React Router hook that helps retrieve dynamic parameters from the URL.Routing with dynamic segments
// Props: allow data to be passed from a parent component to a child component in React.
//  Parent Component (Test3.jsx) passes a user prop to UseCard.
// Child Component (UseCard.jsx) receives and displays the prop.

import { useState,useEffect } from "react";
import UseCard from "../components/UseCard";
import { useSearchParams } from "react-router-dom";
const Test3 = ()=>{
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const genre = searchParams.get("genre") || "All";
    const genres = ["All", "Action", "Comedy", "Drama"];
    

    const fetchUser = async () => {
        try {
          const response = await fetch("https://randomuser.me/api/");
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();
          setUser(data.results[0]); 
        } 
        catch (error) {
          setError(error.message);
        } 
        setLoading(false);
    };

    useEffect(() => { 
        fetchUser();
    }, []); // Runs only once when component mounts

    const handleChange = (e) => {
        const genre = genres.find(g => g.name === e.target.value);
        setSelectedGenre(genre);
    };
    

    return(
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Counter: {count}</h1>
        <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}
            >Increment </button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
            Decrement
            </button> 
        </div>
        <div>
                {/* Toggle */}
                <h1 className="mb-4">Toggle Text Example</h1>
                {isVisible && <p className="alert alert-info">Hello, this is a toggled text!</p>}
               
                <button 
                    className="btn btn-warning" 
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Hide" : "Show"} Text
                </button>
        </div>
        {/* UseEffect */}
        <div className="mt-4">
        <h3>Random User</h3>
        {error && <p className="text-danger">{error}</p>}
        {/* {!user ? <p>Loading...</p> : (
            // <div className="card p-3">
            // <img src={user.picture.medium} alt="User" className="rounded-circle" width="150" height ="150" />
            // <h5>{user.name.first} {user.name.last}</h5>
            // <p>{user.email}</p>
            // </div>
           
        )} */}
        {loading ? <p>Loading...</p> : user && <UseCard user={user} />}
        <button className="btn btn-primary mt-3" onClick={fetchUser} disabled={loading}>
        {loading ? "Loading..." : "Get New User"}
        </button>
        </div>
        {/* useSearchParams */}
        <br />
        <div>
            <label>Select Genre: </label>
            <select value={genre} onChange={(e) => setSearchParams({ genre: e.target.value })}>
                {genres.map((g) => (
                    <option key={g} value={g}>
                        {g}
                    </option>
                ))}
            </select>
            <p>Selected Genre: {genre}</p>
        </div>
        </div>
    )
    
}
export default Test3;