import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View>
        <Text>Would you like to sign out</Text>
        </View>
        <View>
        <Button
          title="SignOut"
          onPress={() => this.props.navigation.navigate('Landing Page')}
        />
        </View>
      </View>
    );
  }
}
