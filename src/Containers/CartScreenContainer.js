import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import CartTable from '../Components/CartTable.js';

// import { ProductData } from '../stub';
import { connect } from 'react-redux';

class CartScreenContainer extends React.Component{
	render(){
		const itemlist = this.props.products;
		return(
			<div>
				<HeaderBar />
				<CartTable items={itemlist}/>
			</div>
			);
	}
}
function mapStateToProps(state){
    return {
        products:state.prod,
    }
}
export default connect(mapStateToProps)(CartScreenContainer);