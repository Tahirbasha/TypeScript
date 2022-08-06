type StyleProps={style:React.CSSProperties}

export const StyleComponent=(props:StyleProps)=>{
    return <div style={props.style}>Welcome to React with TypeScript</div>
}