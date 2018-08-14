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
    if (!this.props.element) {
      return <ActivityIndicator />
    } else {
      return (
        <View style={styles.container}>

          <View style={styles.textContainer}>

            <Text>Title: </Text>

            <Text>{this.props.element.title.toUpperCase()}</Text>

          </View>

          <View style={styles.textContainer}>

            <Text>Release year: </Text>

            <Text>{this.props.element.releaseYear}</Text>

          </View>

          <View style={styles.textContainer}>

            <Text>List position: </Text>

            <Text>{this.props.element.id}</Text>

          </View>

        </View>
      );
    }
  }
}

export default connect(state => ({
  element: state.appState.currentElement,
  loading: state.appState.loading,
}), null)(Element);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  }
});
