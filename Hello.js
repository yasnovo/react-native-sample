import React, { Component } from 'react';
import {View, Button, Alert, TextInput} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {mapStateToProps, mapDispatchToProps} from './action.js';
import { styles } from './styles.js'

class Hello extends Component {
  static navigationOptions = {
    title: "ハローワールド"
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}

            onChangeText={ (text) => this.props.updateHello(text) }

            value={this.props.hello} />

        <Button title={this.props.hello}
        onPress={this._handlePress.bind(this)} />
        
      </View>
    );
  }
      
  // ボタンをクリックされたら現在のstate.helloをアラートする
  _handlePress(e) {
    Alert.alert(this.props.hello);
  }
}
// かたちぇっく
Hello.propTypes = {
  hello: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
