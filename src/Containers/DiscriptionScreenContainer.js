import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import ProductDiscription from '../Components/ProductDiscription.js';
// import { ProductData } from '../stub';

import RealtedProductListComponent from '../Components/RealatedProductListComponent.js';
// import NoPageFoundScreen from './NoPageFoundScreen';

import { find } from 'lodash';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class DiscriptionScreen extends React.Component{
	render(){
        //debugger;
        const ProductData=this.props.products
        const l=ProductData.length;
        if(parseInt(this.props.match.params.id)<=l){
		const item = find(ProductData, { id: parseInt(this.props.match.params.id)});

		return(
			<div>
			<HeaderBar />
			<ProductDiscription produc={item} key={item.id}/>
			<div className="rp">Related Products</div>
			<RealtedProductListComponent prod = {item.related_products} />
            </div>
			);
        }
        else
        {
            return (<Redirect to='/notfound' />);
        }
	}
}
function mapStateToProps(state){
    return {
        products:state.prod,
    }
}

export default connect(mapStateToProps)(DiscriptionScreen);
