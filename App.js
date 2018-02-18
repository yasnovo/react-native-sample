import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';


export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
