import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	//This could be a functional component and doesnt need to be a class. Jsut converted to test this componentDidUpdate() 
	componentDidUpdate() {
		console.log('[OrderSummary] componentDidUpdate');
    }

	render() {

		const ingredientSumary = Object.keys(this.props.ingredients)
			.map(igKey => {
				return (
					<li key={igKey}>
						<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
					</li>)
			});
		return (
			<Auxiliary>
				<h3>Your Order</h3>
				<p>Has the following ingredients:</p>
				<ul>
					{ingredientSumary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Auxiliary >
		);
		
    }
}

export default OrderSummary;