import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// import LandingScreen from './Containers/LandingScreenContainer'
// import DiscriptionScreen from './Containers/DiscriptionScreenContainer'

// import ProductListComponent from './Components/ProductListComponent'

import Routes from './routes';
import store from './store';

//create a component that output html
const App = () => {
    return (
        <Provider store={store}>
          <Routes />
        </Provider>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
