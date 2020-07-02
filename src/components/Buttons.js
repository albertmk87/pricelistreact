import React from 'react';
import classes from './Buttons.module.css';


const Buttons=(props)=>{
	return(
			<div className={classes.Buttons}>
				<select onChange={props.changePeriod} className={classes.selectBtn} id="periodTime" name="time">
					  <option value="1">Monthly</option>
					  <option value="12">Annualy</option>
					  <option value="24">2 years</option>
				</select>
				  <select onChange={props.changeCurrency} className={classes.selectBtn} id="currency" name="currency">
					  <option value="EUR">EUR</option>
					  <option value="CHF">CHF</option>
					  <option value="USD">USD</option>
				</select>

			</div>
			)
}


export default Buttons;