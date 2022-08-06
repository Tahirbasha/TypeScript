import './App.css';

import { WrapComponent } from './components/WrapHTML';

// import { Toast } from './components/TemplateIteralProp';


// import { List } from './components/GenericProps';

// import { UserComp } from './components/FutureValContext/UserFile';
// import { UserContextProvider } from './components/FutureValContext/UserContext';

// Fixed Context Value code
// import{ThemeContextProvider}from'./components/context/ThemeContext'
// import{Box}from'./components/context/Box'

// import { Greet } from './components/Greet';

// import {Person} from "./components/ObjectTyping"

// import { Aoperation } from './components/arrayOperations';

// import { MoreProps } from './components/UnionTyping';

// import {CProps} from "./components/ChildrenProps"

// import { Button } from './components/EventProps';

// import { Changecomponent } from "./components/onChange"

// import { StyleComponent } from "./components/StyleProps"

// import {UseStateComp} from "./components/useState"

import { ReducerCom } from './components/useReducer';

const App = () => {

  // const Obj={fname:"Tahir",Lname:"Basha"}

  // const MyArray=[{a:"apple",b:"ball"},{a:"ant",b:"bat"},{a:"ace",b:"base"}]

  // const message="loading"

  // external event implementation
  //   const Btnevent=(Arg1:React.MouseEvent,Arg2:number)=>{
  // console.log('Button clicked',Arg1,Arg2)
  //   }


  // return <div className="main_container">

  return (
  <WrapComponent PrimaryProps='red' onClick={()=>console.log('html inline event')}>HTML WRAP components</WrapComponent>
)


    {/* <Toast position='center'/> */}
    {/* <Greet name="basha"/>

  <Person obj={Obj} />

  <Aoperation arr={MyArray}/>

  <MoreProps msg={message}/>

  <CProps>Hello Children Props</CProps> */}


    {/* <Button handleClick={Btnevent}/> */}

    {/*Inline event implementation 
  <Button handleclick={(Arg1,Arg2)=>{console.log(Arg1,Arg2,"no datatype application is required")}}/>
  */}

    {/* <Changecomponent ChangeHandler={(Arg1,Arg2)=>console.log(Arg1,Arg2,"onchange event")} />

  <StyleComponent style={{backgroundColor:'red',padding:'20px'}}/>

  <UseStateComp/> */}

    {/* <ReducerCom/> */}




    {/* Fixed Context Value  */}
    {/* <ThemeContextProvider>
  <Box/>
</ThemeContextProvider> */}


    {/* <UserContextProvider>
  <UserComp />
  </UserContextProvider> */}
    {/*<List
  items={['Batman',
  onclick={(item)=>console.log(item)}
<List items={[1,2,3]}onClick={(item)=>console.log(item)}/>*/}

    
      {/* <List items={[1, 2, 3]}  Action={(item) => console.log(item)}/>
      <List items={["Tahir", "Basha"]} Action={(item) => console.log(item)} /> */}
      {/* <List items={[{ id: 1, first: 'Bruce', last: 'Wayne' }, {id: 2, first: 'Clark', last: 'Kent'},{id: 3, first: 'Princess',last: 'Diana'}]}  Action={(item) => console.log(item)}/> */}
    {/* </div> */}
      
}
  
export default App