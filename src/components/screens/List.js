import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import { changeElement } from '../../actions';

class List extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.changeElement('Home')}>
            List
        </Text>
      </View>
    );
  }
}

export default connect(state => ({
  state: state.currentElement
}), { changeElement })(List);

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

