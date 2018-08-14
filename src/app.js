import React, { Component } from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import registerScreens from './components/screens/screens.js';
import * as reducers from './reducers';
import { getList } from './actions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

export default class App extends Component {

  constructor(props) {
    super(props);

    store.dispatch(getList());

    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'List',
          screen: 'test_project.List',
          icon: require('./img/icon1.png'),
          selectedIcon: require('./img/icon1_selected.png'),
          title: 'test_project',
          overrideBackPress: false,
          navigatorStyle: {}
        },

        {
          label: 'Element',
          screen: 'test_project.Element',
          icon: require('./img/icon2.png'),
          selectedIcon: require('./img/icon2_selected.png'),
          title: 'test_project',
          navigatorStyle: {}
        }
      ],
      appStyle: {
        tabBarBackgroundColor: 'transparent',
        tabBarButtonColor: 'red',
      }
    });
  }
}
