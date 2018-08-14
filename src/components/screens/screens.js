import { Navigation } from 'react-native-navigation';
import List from './List';
import Element from './Element';


export default (store, Provider) =>  {
	Navigation.registerComponent('test_project.List', () => List, store, Provider);
	Navigation.registerComponent('test_project.Element', () => Element, store, Provider);
}