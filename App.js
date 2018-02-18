import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Devin'},
            {key: 'Devin'},
            {key: 'Devin'},
            {key: 'Devin'},
            {key: 'Devin'},
            {key: 'Devin'},
          ]}
          renderItem={
            ({item}) => <Text style={styles.item}>{item.key}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
