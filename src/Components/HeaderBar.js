import React from 'react';

class HeaderBar extends React.Component{
	render(){
		const num=0;
	return(
		<div className="headerbar">
		<div>
			<div >
				<img src="../../style/logo.png"/>
			<button className="cartbtn">
				<i className="fa fa-shopping-cart"></i>
				{'  '}CART{'  '} 
				<button className="cartnum">{num}</button>
				</button>
		</div>
		</div>
		</div>
		);
	}
}
export default HeaderBar;