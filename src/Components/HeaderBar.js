import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderBar extends React.Component{
	render(){
		const num=this.props.num;
	return(
		<div className="headerbar">
		<div>
			<div >
			<Link to ={`/`}>
				<img src="../../style/logo.png"/>
				</Link>
				<Link to ={`/cart`}>
			<button className="cartbtn" >
				<i className="fa fa-shopping-cart"></i>
				{'  '}CART{'  '} 
				<button className="cartnum">{num}</button>
				</button>
				</Link>
		</div>
		</div>
		</div>
		);
	}
}
const mapSetToProps  = (state) =>{
//debugger;
var num1=0;
if(state.cart.items==undefined){
	return {num: 0};
}
else{
	for(var i=0;i<state.cart.items.length;i++)
	{
		num1=num1+state.cart.items[i].quantity;
	}
return {num: num1};
}
};
const mapDispathToProps = () => ({});

export default connect(mapSetToProps, mapDispathToProps)(HeaderBar);