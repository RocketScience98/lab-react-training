import React from 'react'
export default function IdCard(props) {
//Logica


//JSX
    return (
        <div className="idCard" class="border border-dark d-flex m-4">
         <img src={props.picture} alt="oops" />
         <div><p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
       
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100}m</p>
        <p>Birth: {props.birth.toDateString()}</p>
       </div>

      </div>
    );
  };
