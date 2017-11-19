import React from 'react';

class NoPageFoundScreen extends React.Component{
	render(){
		return(
			<div className='pagenotfound'>
				<img src="../../style/cartlogo.png"/>
				<div className="pnf">Sorry, Page Not Found....</div>
			</div>
		);
	}
}
export default NoPageFoundScreen;