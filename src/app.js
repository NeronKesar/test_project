import React, { Component } from 'react';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import { Navigation } from 'react-native-navigation';
import registerScreens from './components/screens/screens.js';
import * as reducers from "./reducers/index";
import thunk from "redux-thunk";
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App extends Component {

  constructor(props) {
    super(props);

    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'List',
          screen: 'ReactNativeReduxExample.List',
          icon: require('./img/checkmark.png'),
          selectedIcon: require('./img/checkmark.png'),
          title: 'test_project',
          overrideBackPress: false,
          navigatorStyle: {}
        },

        {
          label: 'Element',
          screen: 'ReactNativeReduxExample.Element',
          icon: require('./img/checkmark.png'),
          selectedIcon: require('./img/checkmark.png'),
          title: 'test_project',
          navigatorStyle: {}
        }
      ],
    });
  }
}
