
type HorizontalProp='left'|'right'|'center'
type VerticalProp='top'|'bottm'|'center'

type TemplateLiteralProp={position:Exclude<`${HorizontalProp}-${VerticalProp}`,'center-center'>|'center'}
// The props which are after comma are excluded from typing...syntax--> Exclude<needed,excepted>

export const Toast=({position}:TemplateLiteralProp)=>{
    return <h1>Template Literal Props-{position}</h1>
}