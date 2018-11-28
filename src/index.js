// import libaries
import React from 'react'
import ReactDOM from 'react-dom'

// import styles
import './styles/css/main.css';

//  import components
import App from './App'
import * as serviceWorker from './serviceWorker'


const root: ?Element = document.getElementById('root');

// initilize the app component into the root Element
if (root != null) {
   ReactDOM.render(<App/>, root)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
