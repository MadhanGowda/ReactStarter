import React from 'react';

class ProductDiscription extends React.Component{
	render(){
		const product = this.props.produc;
		return(
			
			<div className='productdetail'>
			<img src={product.url}/>
					<div className='delatilbox'>	
	    			<div className="title">{product.name}</div>
	    				    			<div className="price">Description</div>
	    			<div className="discription">{product.description}</div>

	    			<div className="price">Rs/- {product.price}</div>
	    			<div className="quantity-ct">Quantity{'  '}
	    			<button className="btonp"> 
	    				<i className="fa fa-plus"></i>{'   '}
	    				</button>
	    				<button className="btonm">
	    				<i className="fa fa-minus"></i>
	    				</button>
	    			</div>
				</div>
			</div>
			
			);
	}
}
export default ProductDiscription;