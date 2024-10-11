import React, {useState, useRef} from 'react';
function App(){
    const [name, setName]=useState(null)
    const inputRef= useRef(null)
const handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Submitted Name:${name}`)
}
const resetInput=()=>{
    inputRef.current.value="";
    setName("")
}
    return(
        <div>
         <h2> UseRef Hook Example</h2>
         <form onSubmit={handleSubmit}>
            <input
            ref={inputRef}
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            >
            </input>
            <button type='Submit'>Submit</button>
         </form>
         <button onClick={resetInput}>Reset</button>


        </div>       
    )}
export default App;