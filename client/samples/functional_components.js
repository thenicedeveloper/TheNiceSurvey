import React, {Component} from 'React';


function BigBox() {
    return (
        <LittleBox text="Hello JP"/>
    )
}

//Note: always start with uppercase
function LittleBox(props){
    return(
    <h1>Little Box: {console.log(props.text)}</h1>
    )
}




