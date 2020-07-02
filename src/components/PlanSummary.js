import React from 'react';
import Button from './Button.js';
import classes from './PlanSummary.module.css';



class OrderSummary extends React.Component{


render() {
		
		const plan=this.props.selectedPlan;
		const spaceGB=plan.MaxSpace/1024/1024/1024;
	return (
				<div>
					<h2>You choose the {plan.Title} plan</h2>
					<p>We believe privacy is a fundamental human right so we provide free accounts as a public service. You can still support us by telling your friends and family about ProtonMail, or making a donation. </p>
					<div className={classes.PlanSummary}>	
					<p>Our {plan.Title} plan includes: </p>
					<ul>
						<li>{spaceGB} GB storage per user</li>
						<li>Supports {plan.MaxDomains} domains</li>
						
					</ul>
					<div className={classes.Btn}> 
					<Button clicked={this.props.continuePlan} btnType="Success"> Continue</Button>
					<Button clicked={this.props.removeModal} btnType="Danger"> Go back</Button>
					</div>
					</div>
				</div>
		)
}
}


export default OrderSummary;