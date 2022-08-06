

type WpropType={
    PrimaryProps:'red'|'blue'
} & React.ComponentProps<'button'>

export const WrapComponent=({PrimaryProps,children,...rest}:WpropType)=>{

return <button style={{backgroundColor:PrimaryProps}} {...rest}>{children}</button>

}