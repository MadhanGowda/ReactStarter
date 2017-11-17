import React from 'react';

import ProductListComponent from '../Components/ProductListComponent.js';
import HeaderBar from '../Components/HeaderBar.js';

import { ProductData } from '../stub';

class LandingScreen extends React.Component{
	render(){
		return(
			<div>
  			<HeaderBar />
  			<ProductListComponent products={ProductData} />
			</div>
			);
	}
}
export default LandingScreen;
