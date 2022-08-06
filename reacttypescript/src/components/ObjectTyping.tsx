type PersonProps={
    obj:{fname:string,Lname:string}
}

export const Person=(props:PersonProps)=>{
    const {obj}=props
    const {fname,Lname}=obj

    return <h1>{fname}{Lname}</h1>
}