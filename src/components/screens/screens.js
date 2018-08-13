import { Navigation } from 'react-native-navigation';
import List from './List';
import Element from './Element';


export default (store, Provider) =>  {
	Navigation.registerComponent('ReactNativeReduxExample.List', () => List, store, Provider);
	Navigation.registerComponent('ReactNativeReduxExample.Element', () => Element, store, Provider);
}