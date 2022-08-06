import { useState } from "react";

export const UseStateComp=()=>{

// In situations where the value of useState can be any datatype we use the following method <datatype|datatype|datatype>
    const [Value,ValSetter]=useState<null|boolean|string>(null)
    const isLogin=()=>{ValSetter(true)}
    const isLoggedOut=()=>{ValSetter('false')} // passing String
     return <div>

        <h5>You are {Value ?'logged in':'logged out'}</h5>
        <button onClick={isLogin}>log in</button>
        <button onClick={isLoggedOut}>Log out</button>
        <h1>{Value}</h1>
    </div>

}
