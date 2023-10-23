import { useReducer } from "react";

const handle = (state, action) => {
    if (action.type === "buy-stuff") return {balance: state.balance - 100}
    if (action.type === "sell-stuff") return {balance: state.balance +100}
    return state
}

const initialBalance = {balance: 500}


export default function MyWallet() {
    const [state, dispatch] = useReducer(handle, initialBalance)
    return (
        <div>
            Balance: {state.balance}
        <button onClick={() => dispatch({type: "buy-stuff"})}>Buy some stuff!</button>
        <button onClick={() => dispatch({type: "sell-stuff"})}>Sell some stuff!</button>
        </div>
    )
}
