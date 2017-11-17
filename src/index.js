import React from 'react';
import ReactDOM from 'react-dom';

import LandingScreen from './Containers/LandingScreenContainer'


//create a component that output html
const App = () => {
    return (
        <div>

          <LandingScreen />
        </div>
        );
}

//add the component to DOM
ReactDOM.render(<App/>, document.querySelector(".container"));