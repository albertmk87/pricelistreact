import React from 'react';
import PriceList from '../components/PriceList.js';
import classes from './Container.module.css';
import Modal from '../components/Modal.js';
import PlanSummary from '../components/PlanSummary.js';
import Buttons from '../components/Buttons.js';


class Container extends React.Component{
	
	state={
		plans:[],
		currency:"EUR",
		period:1,
		selectedPlan:{},
		clickable:true,
		show:false

	}
	// async componentDidMount(){
	// 	let url="https://api.protonmail.ch/payments/plans?EUR";
 //    	  let obj=await (await fetch(url)).json();
 //    	  this.setState({result:obj});
	// }
	// async componentDidMount() {
 //    const myHeaders = new Headers();

 //    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
 //    myHeaders.append('x-pm-appversion', 'Other');
 //    myHeaders.append('x-pm-apiversion', '3');
 //    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

 //    const myInit = {
 //        method: 'GET',
 //        headers: myHeaders,
 //        mode: 'cors',
 //        cache: 'default'
 //    };

 //    const response = await fetch(`https://api.protonmail.ch/payments/plans?EUR`, myInit)
 //    const results = response.json();
 //    	const result=results.Plans;
 //    this.setState({result:result});
// };
	
	componentDidMount() {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    // https://api.protonmail.ch/payments/plans?USD
    // https://api.protonmail.ch/payments/plans?Currency=EUR
    fetch('https://api.protonmail.ch/payments/plans?Currency=EUR', myInit)
    .then(response=>{
    	return response.json();
    })
    .then(res=>{
    	const plans=res.Plans.slice(2,6);
    	console.log(plans)
    	this.setState({plans:plans});
    })
   
};

	changePeriod=(e)=>{
		const newPeriod=e.target.value;
		this.setState({period:newPeriod});
	}

	changeCurrency=(e)=>{
		const newCurrency=e.target.value;
		console.log(newCurrency)
		const myHeaders = new Headers();

	    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
	    myHeaders.append('x-pm-appversion', 'Other');
	    myHeaders.append('x-pm-apiversion', '3');
	    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    	const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    fetch(`https://api.protonmail.ch/payments/plans?Currency=${newCurrency}`, myInit)
    .then(response=>{
    	return response.json();
    })
    .then(res=>{
    	const plans=res.Plans.slice(2,6);
    	console.log(plans)
    	this.setState({plans:plans, currency:newCurrency});
    })

	}


	selectedPlan=(event,id)=>{
		if(this.state.clickable){
		event.preventDefault();
		const plans=this.state.plans;
		console.log(plans);
		const findPlan=plans.find(plan=>{	
			return plan.ID===id});
		this.setState({selectedPlan:findPlan, show:true, clickable:false});
	}
		
	}

	continuePlan=()=>{
		this.props.history.push({pathname:"/form"});
	}

	removeModal=()=>{
		this.setState({show:false, clickable:true})
	}

	render(){



		let priceLists="";
		const plans=this.state.plans;
		if(plans){
			priceLists=plans.map(plan=>{
				const pricing=plan.Pricing[this.state.period];
				// console.log(plan);
				return <PriceList key={plan.ID} id={plan.ID} selectedPlan={(event)=>this.selectedPlan(event,plan.ID)} title={plan.Title} maxAdresses={plan.MaxAddresses} maxDomains={plan.MaxDomains} maxUsers={plan.MaxMembers} space={plan.MaxSpace} pricing={pricing} period={this.state.period} currency={plan.Currency} />
			})
		}

		return (
			<div>
				<Buttons changePeriod={this.changePeriod} changeCurrency={this.changeCurrency}/>
				<div className={classes.Container}>
					{priceLists}
				</div>

				<Modal show={this.state.show}>
					<PlanSummary continuePlan={this.continuePlan} removeModal={this.removeModal} selectedPlan={this.state.selectedPlan}/>
						
				</Modal>
				</div>
				)
	}
}


export default Container;

 // fetch('https://api.protonmail.ch/payments/plans?EUR', myInit)
 //    .then(res=>res.json())
 //    .then(json=>this.setState({plans:json.Plans}));