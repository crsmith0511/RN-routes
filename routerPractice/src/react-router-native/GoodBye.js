import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({history}) => (
  <View>
    <Text>GoodBye</Text>
    <Button title="LandingPage" onPress={() => history.push('/')} />
    <Button title="Home" onPress={() => history.push('/home')} />
  </View>
);
