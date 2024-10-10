import React, {UserContext} from './UserContext';
import Child1 from './Child1';
const ParentComponent=()=>{
    const user={
        name:'abcd',
        age: 45,
    }
    return(
        <UserContext.Provider value={user}>
            <div>
                <h1>ParentComponent</h1>
                <p>Name:{user.name},Age:{user.age}</p>
                <Child1/>
            </div>
        </UserContext.Provider>
    )
}
export default ParentComponent