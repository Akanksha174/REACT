import React, {useState, useMemo} from "react";
const App=()=>{
const [count, setCount]= useState(0);

const resultFun=(num)=>{
    console.log("Result is ...")
    return num*12;
}
const ResValue=useMemo(()=>{
    return resultFun(count);
}, [count])
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <h2> Result is :{ResValue}</h2>

        </div>

    )
}


















