import React, {useContext} from "react";
import { UserContext } from "./UserContext";
const Child1=()=>{
    const user = useContext(UserContext)
    return(
        <div>
            <h1>Child 1</h1>
            <p>Name:{user.name}, Age:{user.age}</p>
        </div>
    )
}
export default Child1