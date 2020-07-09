import React from 'react';

import classes from "./Input.module.css";


const Input=(props)=>{
	let name=props.label;
	let inputElement='';
	let inputClass=[classes.fullName]

	if(props.valid===false && props.validation && props.touched){
		inputClass.push(classes.inValid)
	}

	switch(props.type){
		case('input'):
		inputElement=<input {...props.config} value={props.value} className={inputClass.join(' ')} onChange={props.changed}/>
			break;
	}


	return (

			<div className={classes.form}>
			  <label htmlFor={name}>{props.label}</label>
			  {inputElement}
			</div>
			)
}

export default Input;