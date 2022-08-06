type ReceivedProps={name:string}

export const Greet=(props:ReceivedProps)=>{
    return <h1>{props.name}</h1>
}

