import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {styles} from './styles.js';

class HomeScreen extends Component {
  static navigationOptions = {
    title: "ホーム"
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Hello" onPress={ () => navigate('Hello')} />
        <Button title="Check" onPress={ () => navigate('Check')} />
        <Button title="Http API" onPress={ () => navigate('Http')} />
      </View>
    );
  }
}

export default HomeScreen;
