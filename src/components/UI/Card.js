import React from "react";
import './Card.css';


function Card(props){
    const classes = 'card ' + props.className;                //* <-- classes property aadd
    return <div className={classes}>{props.children}</div>   
  
}



export default Card;