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
export default App;