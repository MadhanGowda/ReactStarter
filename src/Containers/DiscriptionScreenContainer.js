import React from 'react';

import HeaderBar from '../Components/HeaderBar.js';
import ProductDiscription from '../Components/ProductDiscription.js';

class DiscriptionScreen extends React.Component{
	render(){
		return(
			<div>
			<HeaderBar />
			<ProductDiscription />
			</div>
			);
	}
}
export default DiscriptionScreen;