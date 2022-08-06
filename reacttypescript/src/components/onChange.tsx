import React from "react"
type ChangeType={ChangeHandler:(event:React.ChangeEvent<HTMLInputElement>,s:string)=>void}
// The event received from app.tsx is stored in ChangeType.ChangeHandler and is accessed accordingly

export const Changecomponent=(props:ChangeType)=>{

    return <input type="text" onChange={(event)=>props.ChangeHandler(event,"I am Basha")}/>


}