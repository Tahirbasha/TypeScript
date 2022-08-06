type ListProps<T> = {
    items: T[]
    Action : (value: T ) => void
}
export const List = <T extends {id:number}>({items, Action}:ListProps<T>)=>{
    return(
    <div>
        <h2>List of items</h2>
        {items.map((each, index) => {
            return (
                <div key={index} onClick={() => Action(each)}>
                 
                  {JSON.stringify(each)} {/*As Object is not directly rendered by browser so we are making it as string */}
                    </div>
              )
            })}
              
          </div>
          )
    }