import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Main from "./components/Main";
import Landing from "./components/Landing"
import Register from "./components/register/register";
import Login from "./components/Login";
export const myContext = createContext();

function App() {
  return (
    <myContext.Provider value={[]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </myContext.Provider>
  );
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
