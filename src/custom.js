
//custom Hooks'

import { useState } from "react";
function useCounter(initialValue=0){
    const[count, setCount] = useState(initialValue)
    const increment=()=>setCount((count)=>count+1)
    const decrement=()=>setCount((count)=>count-1)
    const reset=()=>setCount((count)=>count=0)
    return {count, increment, decrement, reset}
}
export default useCounter;