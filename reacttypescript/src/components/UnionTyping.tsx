type AdProps={msg:"loading"|"started"|"failed"}


export const MoreProps=(props:AdProps)=>{
let result=props.msg
const SampleFun=()=>{
    if(result==="failed"){
    return<h1>Opeartion{result}</h1>
}else if(result==="started"){
    return<h1>Opeartion{result}</h1>
} 
else if(result==="loading"){
    return<h1>Opeartion {result}</h1>
} 
}
return <div>{SampleFun()}</div>

}