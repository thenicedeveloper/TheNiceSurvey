import React, {createContext, Component} from 'react';
//React Context Review with react classes

const NameContext = createContext() 
//createContext returns a context object with two properties: Provider & Consumer (components)
//Provider component sends the state while Consumer consumes the state
// There are concerns when you need to use multiple providers/consumers
//# There would need to be a lot of nesting: context Hell

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: 'Billy Shakespeare'
    }
  }

  render(){
    return (
      <div className="text-center m-2">
        <NameContext.Provider value={this.state.name}>
          <Child />
          {/* <h1 id="myAlert alert alert-danger">Hello</h1> */}
        </NameContext.Provider> 
      </div>
           
    )
  }

}
class Child extends Component{

  render(){
    return(
      <section className="child">
        <GrandChild />
      </section>
    )
  }
} 
class GrandChild extends Component{

  render(){
    return(
      <div className="grandchild">        
        <Button />
      </div>
    )
  }
} 
class Button extends Component{

  render(){

    return (

      <NameContext.Consumer>
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>

    )    
  }

}

export default App;