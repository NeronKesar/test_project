import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

class Element extends Component {
  render() {
    console.log('ELEMENT', this.props.element);
    return (
      <View style={styles.container}>
        <Text>text</Text>
      </View>
    );
  }
}

export default connect(state => ({
  element: state.appState.currentElement,
  loading: state.appState.loading,
}), null)(Element);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});
