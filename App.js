import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}


export default class LotsOfGreetings  extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jania' />
                <Greeting name='Valeera' />
            <Image source={pic} style={{width: 200, height: 200}}/>
            </View>
        );
    }
}

/*
export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 200, height: 200}}/>
        );
    }
}*/
