//import React, {useState, useRef} from 'react';
// function App(){
//     const [name, setName]=useState(null)
//     const inputRef= useRef(null)
// const handleSubmit=(event)=>{
//     event.preventDefault();
//     alert(`Submitted Name:${name}`)
// }
// const resetInput=()=>{
//     inputRef.current.value="";
//     setName("")
// }
//     return(
//         <div>
//          <h2> UseRef Hook Example</h2>
//          <form onSubmit={handleSubmit}>
//             <input
//             ref={inputRef}
//             type='text'
//             placeholder='Enter your name'
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             >
//             </input>
//             <button type='Submit'>Submit</button>
//          </form>
//          <button onClick={resetInput}>Reset</button>


//         </div>       
//     )}
// export default App;

import React, {useReducer} from 'react';
const intialState={count:0}
function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1}        
        case 'DECREMENT':
            return {count:state.count-1}     
        case 'RESET':
            return {count:0}
        default:
            return state;
    }
}
function App(){
    const [state, dispatch]=useReducer(reducer,intialState);
    return(
        <div>
            <h2>Reducer Example</h2>
            <p>current Count {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment </button>
            <button onClick={}>Decrement</button>
            <button onClick={}>Reset</button>

        </div>
    )
}
export default App;