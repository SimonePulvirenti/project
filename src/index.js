import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './components/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './components/config/fbConfig'
import LogRocket from 'logrocket';
LogRocket.init('6p9d7t/we');
const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig, {useFirestoreForProfile: true , userProfile : 'users' , attachAuthIsReady: true}), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
  );
  store.firebaseAuthIsReady.then( () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    serviceWorker.register( );
  }) 
