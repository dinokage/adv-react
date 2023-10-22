import { useState, useEffect } from "react"
export default function ToggleButton() {
    const handleClick = () => {
        setToggle(!toggle)    
    }
    const[ toggle, setToggle] = useState(true)
    useEffect(() => {
        document.title = toggle ? "votkay" : "kayvot"
    }, [toggle])
    return (
        <div>
            <button onClick={handleClick}>swap title with this button lol</button>
        </div>
    )
}