import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrollDownAndWhatHappendNextShockedMe extends Component {
  render () {
    let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me Plz</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={{fontSize: 96}}>Scroll me Plz</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={{fontSize: 96}}>Scroll me Plz</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={{fontSize: 96}}>Scroll me Plz</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Image source={pic} style={{width: 193, height: 110}}/>

      </ScrollView>
    );
  }
}
