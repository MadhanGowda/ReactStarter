import React from 'react';

import RelatedProduct from '../Components/RealatedProduct';
import { ProductData } from '../stub';


class RealtedProductListComponent extends React.Component{
	constructor(props){
			super(props);
		}
	render(){
		const a=this.props.prod;
		if(a.length==0){
			return(
				<div className="nrpf">
					No Related products Found....
				</div>
				);
		}
		else
		{
		const ProductList = [];
		for(var i=0;i<a.length;i++){
			const aa=parseInt(a[i].id);
			const item1 = _.find(ProductData, { 'id': aa});
			if(item1){
					ProductList.push(<RelatedProduct produc={item1} key={a[i].id}/>);
				}
		}
		return(
			<div>
			<ul className="ullist">
					{ProductList}
					</ul>
				</div>
			);
		}
	}
}

export default RealtedProductListComponent;