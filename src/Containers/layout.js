import React from 'react';

import { ProductData } from '../stub';
import { connect } from 'react-redux';
import { poplateProducts } from '../Actions/productAction'

import axios from 'axios';

class Layout extends React.Component{
	componentWillMount(){
		// this.props.poplateProducts(ProductData);

		// Make a request for a user with a given ID
		axios.get('https://demo3188996.mockable.io/products')
	  .then((response) => {
	    console.log(response.data);
	    this.props.poplateProducts(response.data);
	  })
	  .catch((error) => {
	  	// debugger;
	    console.log(error);
	  });

	}

	render(){
        return this.props.children;
	}
}

function mapDispatchToProps (dispatch){
	return{
		poplateProducts: function(ProductData){
			dispatch(poplateProducts(ProductData))
		}
	}
};

export default connect(null, mapDispatchToProps)(Layout);
