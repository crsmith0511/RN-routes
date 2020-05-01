import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class GoodBye extends Component {
  render() {
    return (
      <View>
        <Text>This is the home page</Text>
        <Button
          title="Landing Page"
          onPress={() => this.props.navigation.navigate('Landing Page')}
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
