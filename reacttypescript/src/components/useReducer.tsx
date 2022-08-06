import { useReducer } from 'react'


//Discriminative Union Types
// In the below code if we try to set the count to 0,we can't set the payload directly to 0, it raise error 
//in the reducer function..letting us know missing payload as we send only {type:'reset}. In such situations Discriminative Union types are useful

type IncrementDecrement = {
    type: 'increment' | 'decrement',
    payload: number
}

type Reset = { type: 'reset' }

type CounterAction = IncrementDecrement | Reset // Union Typing either with payload or without



// type CounterAction={
//  type:string
//   payload:number
// }


type CounterState = {
    count: number
}


const initialState = { count: 0 }
function reducer(state: CounterState, action: CounterAction) {
    console.log(action)
    switch (action.type) {
        case 'increment':

            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const ReducerCom = () => {
    //dispatch argument is action and state is initial state object
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count:{state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}