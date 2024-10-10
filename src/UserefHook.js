// import React, {useState, useCallback} from "react";
// const App=()=>{
//     const[count, setCount]=useState(0);
//     return(
//         <div>
//             <h2>UseCallBack Hook</h2>
//             <p>without UseCallBack {count}</p>
//             <button>Increment with useCallback</button>
//             <p>with UseCallBack {count}</p>
//             <button>Increment without useCallback</button>
//             <button>Another State</button>
//         </div>
//     )
// }

// export default App;


import React, {useState, useMemo} from "react";
const App=()=>{
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false)
    const resultCount=(num)=>{
        console.log('result count calculated')
        return num*10
    }
    const memoValue = useMemo((=>{
        
    
    }))
}
export default App;