type ArrayProps={arr:{a:string,b:string}[]}


export const Aoperation=(props:ArrayProps)=>{
    console.log(props.arr)
    return <div>
        {props.arr.map(each=>{
            return <h1>{each.a}{each.b}</h1>
        })}
</div>
}