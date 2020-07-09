import React from 'react';
import classes from './Form.module.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Input from '../components/Input.js';
import axios from 'axios';

   class Form extends React.Component {

   	state={
      dataInfo:{
        fullName:{
          type:'input',
          config:{
            type:'text',
            placeholder:"Full name"
          },
          value:'',
          validation:{
            required:true
          },
          touched:false,
          valid:false
        },
         email:{
          type:'input',
          config:{
            type:'email',
            placeholder:"Your e-mail"
          },
          value:'',
          validation:{
            required:true
          },
          touched:false,
          valid:false
        },
         address:{
          type:'input',
          config:{
            type:'text',
            placeholder:"Your address"
          },
          value:'',
          validation:{
            required:true
          },
          touched:false,
          valid:false
        },
      },
      formValid:false
   		
   	}

   	ID=()=> {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
 	 return '_' + Math.random().toString(36).substr(2, 9);
			};

   	handleSubmit=(e)=>{
		      e.preventDefault();
          let dataToServer={};

          for(let name in this.state.dataInfo){
            dataToServer[name]=this.state.dataInfo[name].value;
          }
          axios.post('https://burgerapp-27da3.firebaseio.com/contactInfo.json', dataToServer)
          .then(response=>{
                this.props.history.push({pathname:"/"});
          })
			
		}


    proceedChange=(event,name)=>{
           let newForm={...this.state.dataInfo};
        let elToBeUpdated={...newForm[name]};
        elToBeUpdated.value=event.target.value;

        if(elToBeUpdated.validation.required===true){
          elToBeUpdated.valid=elToBeUpdated.value.trim() !=='';
        }
        let formValid=true;

        for(let name in newForm){
          formValid=newForm[name].valid && formValid;
        }
        elToBeUpdated.touched=true;



        newForm[name]=elToBeUpdated;
        this.setState({dataInfo:newForm, formValid:formValid});
    }


   	render(){
      let forms=[];
      for(let el in this.state.dataInfo){
        forms.push({
          main:el,
          rest:this.state.dataInfo[el]
        })
      }
        console.log(forms)
        let result=forms.map(input =>{
          return <Input key={input.main} valid={input.rest.valid} label={input.main} type={input.rest.type} touched={input.rest.touched} validation={input.rest.validation.required} changed={(event)=>this.proceedChange(event,input.main)} config={input.rest.config} value={input.rest.value}/>
        })

   			let info=<h2>Fill in all fields and we will contact you shortly</h2>;
   			

   		return(
   				  <div className={classes.wrapper}>
   				    <div className={classes.formWrapper}>
        		  {info}
          <form onSubmit={this.handleSubmit} noValidate >
              {result}
               <button disabled={!this.state.formValid} className={classes.submit}>Submit info</button>
          </form>
        </div>
   				</div>

   			)
   	}


}


export default Form;