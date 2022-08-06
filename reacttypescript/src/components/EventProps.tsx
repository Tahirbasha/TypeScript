import React from'react'
type ButtonProps={
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number)=>void //As handleClick is a function and instead of mentioning datatype
  // in the function call we are creating a type ...as the function have props as 1)event and 2) number
}
// The function from app.tsx is received and stored in ButtonProps.handleClick and used accordingly
// Here we are passing props to the function in app.tsx from Button component
//  similar to deleting item in ccbp react projects
export const Button=(props:ButtonProps)=>{
  return<button onClick={(event)=>props.handleClick(event,1)}>Click</button>
}