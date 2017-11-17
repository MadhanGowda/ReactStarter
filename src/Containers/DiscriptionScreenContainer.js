import React from 'react';
import PropType from 'prop-types';
import { find } from 'lodash';
import { connect } from 'react-redux'

import HeaderBar from '../Components/HeaderBar.js';
import ProductDiscription from '../Components/ProductDiscription.js';

import { ProductData } from '../stub';


class DiscriptionScreen extends React.Component{
	render(){

    const item = find(ProductData, { id: parseInt(this.props.match.params.id)});
		return(
			<div>
			<HeaderBar />
			<ProductDiscription product={item} />
			</div>
			);
	}
}

DiscriptionScreen.propTypes = {
  match: PropType.object.isRequired,
}

export default DiscriptionScreen;
