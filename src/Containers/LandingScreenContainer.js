import React from 'react';

import ProductListComponent from '../Components/ProductListComponent.js';
import HeaderBar from '../Components/HeaderBar.js';
import { ProductData } from '../stub';


class LandingScreen extends React.Component{
	render(){
        const item=ProductData;
		return(
			<div>
			<HeaderBar />
			<ProductListComponent prod = {item} />
			</div>
			);
	}
}
export default LandingScreen;