import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { changeElement } from '../../actions';
import { getList } from '../../actions';

class List extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList();
  }

  keyExtractor = (item) => item.title;

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.changeElement(item);
          this.props.navigator.switchToTab({ tabIndex: 1 });
        }}
      >
        <Text style={styles.item}>
          {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  };

  render() {
    if (this.props.loading) {
      return <ActivityIndicator />
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.props.list}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      );
    }
  }
}

export default connect(state => ({
  list: state.appState.list,
  loading: state.appState.loading,
}), { changeElement, getList }, null, { pure: false })(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

