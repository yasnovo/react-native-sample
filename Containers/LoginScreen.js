import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>I am Login Screen</Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Go to Signup
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')} >
          Go to Forget Password
        </Text>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Pretend we logged in
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    color: 'blue',
    paddingTop: 10
  }
});
