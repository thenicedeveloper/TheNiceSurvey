import React, {Component} from 'react';


class Fruits extends Component {
    constructor(props){ //Accept props
        super(props); //Ensures proper inheritance scheme from the component class

        //initialize your state
        this.state = {
            activated: false
        }
    }

    handleActiveChange(){
        // this.setState({activated: !this.state.activated})  //would also work
        this.setState((preState) => {
            return {
                activated: !prevState.activated
            }            
        })
    }

    render(){
        const buttonText = this.state.activated ? 'Active' : 'Inactive'
        return(
            <button onClick={this.handleActiveChange()}>{buttonText}</button>
            //wont work until you bind this
        )
    }
}