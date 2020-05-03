import React, {createContext} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Main from './components/Main';
// import Landing from './components/Landing';
import Login from './components/Login';
export const myContext = createContext();


function App(){

  return (
    <myContext.Provider     
      value={[]} >       
      
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} exact />
        <Route exact path="/main" component={Main} exact />
        {/* <Route path="/landing" component={Landing} exact /> */}
        <Route exact path="/login" component={Login} exact />

      </Switch>
    </myContext.Provider>
  )
}




export default App;



//Removed code

// useEffect( () => {      
//     return () =>{           
//         setTimeout(() => {              
//           setAddedQuestionAlert(false)
//          }, 2000)
//     }      
// },[addedQuestionAlert])

