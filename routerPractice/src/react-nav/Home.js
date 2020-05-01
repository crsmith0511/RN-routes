import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the home page</Text>
        <Button
          title="LandingPage"
          onPress={() => this.props.navigation.navigate('Landing Page')}
        />
        <Button
          title="GoodBye"
          onPress={() => this.props.navigation.navigate('GoodBye')}
        />
      </View>
    );
  }
}
