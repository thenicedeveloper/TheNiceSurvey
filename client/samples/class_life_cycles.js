import React, {Component} from 'react';

//Class Life Cycle methods (Old School):
//ComponentDidMount ---> Invoked when a component is first mounted
//#executes after rendered for the first time
//Here you can make a request to an api, create event listeners.

//ComponentDidUpdate(prevProps, prevState)  ---> Invoked after a DOM update or rerendered
//# a re-render occurs everytime there is a prop or state change

//ComponentWillUnmount --> Invoked write before a component is removed from the DOM
//#This ends things that you tipically setup componentDidMount
//# You may have components that you want to hide or toggle, so you may need to use the ComponentWillUnmount

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      active: false
    }
  }

  render(){
    console.log(this.state.active)
    let {active} = this.state;
    return(
      <div className="text-center mt-4">
        <button className="btn btn-lg" onClick={()=> this.setState({active:!active})}>Show / Hide count</button>

        {active && <Count />} 
      </div>           
    )
  }


}

class Count extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log("ComponontDidMount, invoked after component mounted")
  }

  componentDidUpdate(prevProps,prevState){
    console.log("ComponentDidUpdate, Invoked after component updated/re-rendered")
  }

  componentWillUnmount(){
    console.log("This component is being removed...")
  }

  render(){
    console.log("Render method")
    let {count} = this.state;
    return(
      <div className="text-center m-2">
        <h1>{this.state.count}</h1>
        <button className="btn m-1" onClick={() => this.setState({count: count-1})}>Decrease</button>
        <button className="btn m-1" onClick={() => this.setState({count: count+1})}>Increase</button>
      </div>
    )
  }
}


export default App;