import React from "react";
import './Card.css';


function Card(props){
    const classes = 'card ' + props.className;                //* <-- classes property add provide Card Component
    return <div className={classes}>{props.children}</div>    //* <--  property data add provide Card Component
  
}



export default Card;