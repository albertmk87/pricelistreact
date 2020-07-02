import React from 'react';
import classes from './Form.module.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';



   class Form extends React.Component {

   	state={
   		fullName:'',
   		email:'',
   		address:'',
   	}

   	ID=()=> {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
 	 return '_' + Math.random().toString(36).substr(2, 9);
			};

   	sendInfo=()=>{
		if(this.state.fullName!=="" && this.state.email !=="" && this.state.address!==""){
			const newInfo={
				id:this.ID(),
				fullName:this.state.fullName,
				email:this.state.email,
				address:this.state.address
			}
			
					this.props.history.push({pathname:"/"});
		}
	}



   	render(){

   			let info=<h2>Fill in all fields and we will contact you shortly</h2>;
   			

   		return(
   				  <div className={classes.wrapper}>
   				    <div className={classes.formWrapper}>
        		  {info}
          <form onSubmit={this.handleSubmit} noValidate >
            <div className={classes.fullName}>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={(event) => this.setState({fullName: event.target.value})} noValidate />
            </div>
            <div className={classes.email}>
              <label htmlFor="email">Email</label>
              <input type='email' name='email'onChange={(event) => this.setState({email: event.target.value})} noValidate />
            </div>
           <div className={classes.address}>
              <label htmlFor="address">Address</label>
              <input type='text' name='address' onChange={(event) => this.setState({address: event.target.value})} noValidate />
            </div>
          	
            <div className={classes.submit}>
              <button onClick={this.sendInfo}>Submit</button>
            </div>
          </form>
        </div>
   				</div>

   			)
   	}


}


export default Form;