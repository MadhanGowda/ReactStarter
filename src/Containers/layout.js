import React from 'react';

// import { ProductData } from '../stub';
import { connect } from 'react-redux';
import { poplateProducts } from '../Actions/productAction';
import { addToCartInitial } from '../Actions/cart';
import axios from 'axios';


class Layout extends React.Component{
	componentWillMount(){
		// this.props.poplateProducts(ProductData);
		// debugger;
		axios.get('http://127.0.0.1:8000/product/')
		  .then((response) => {
		  	this.props.poplateProducts(response.data);
		  	this.props.addToCartInitial(response.data);
		    
		  })
		  .catch(function (error) {
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
		},
		addToCartInitial: function(ProductData){
			dispatch(addToCartInitial(ProductData))
		}
		
	}
};

export default connect(null, mapDispatchToProps)(Layout);