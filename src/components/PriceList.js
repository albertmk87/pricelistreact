import React from 'react';
import classes from './PriceList.module.css';
import Button from './Button.js';

const PriceList=(props)=>{
		const moneySign='';

		const spaceGB=props.space/1024/1024/1024;
		const currency=props.currency;
		console.log(props.period)
	return (
		 	 <div className={classes.PriceList}>
            <h2 className="header">{props.title}</h2>
            <h3><sup>{currency==="EUR" ? "€" : currency==="USD" ? "$" : "CHf"}</sup>{props.pricing}<span className="small">{props.period==1 ? "/mo" : props.period=="12" ? "/year" : "/2Year"}</span></h3>
            <p>Full-featured mailbox with advanced protection</p>
             <ul className={classes.priceList}>
                <li>{props.maxUsers} user</li>
                <li>{spaceGB} GB storage per user *</li>
                <li>{props.maxAdresses} addresses per user*</li>
                <li>Supports {props.maxDomains} domains *</li>
                <li>Catch all email, multi user management, priority support and more</li>
           		<li>ProtonVPN (optional)*</li>
            </ul>      
            <div className={classes.Btn}> 
            <Button btnType="Success" className={classes.button} clicked={props.selectedPlan}>Select</Button>   
    		</div>     
        </div>
		)
}


export default PriceList;