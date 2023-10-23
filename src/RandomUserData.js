import { useState, useEffect } from "react";

export default function RandomUserData() {
    const [user, setUser] = useState([])

    const fetchData = () => {
        fetch("https://randomuser.me/api/?result=3")
        .then(response => response.json())
        .then(data => setUser(data)).then(console.log(user))
    }
    useEffect(() => {
        fetchData();
    }, [])

    return Object.keys(user).length > 0 ? <h1>User fetched
        Name :- {user.results[0].name.first} {user.results[0].name.last}
    </h1> : <h1>User fetching...</h1>

}   