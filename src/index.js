import React from 'react';
import ReactDOM from 'react-dom';

import ProductDetailsContiner from './Containers/ProductContiner'

//create a component that output html
const App = () => {
    return (
        <div>
          Hello World
          <ProductDetailsContiner />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));