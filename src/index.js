import React from 'react';
import ReactDOM from 'react-dom';

import LandingScreen from './Containers/LandingScreenContainer'
import DiscriptionScreen from './Containers/DiscriptionScreenContainer'

import ProductListComponent from './Components/ProductListComponent'


//create a component that output html
const App = () => {
    return (
        <div>
          <ProductListComponent />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
