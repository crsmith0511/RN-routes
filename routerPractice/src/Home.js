import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({history}) => (
  <View>
    <Text>This is the home page</Text>
    <Button title="LandingPage" onPress={() => history.push('/')} />
    <Button title="GoodBye" onPress={() => history.push('/goodbye')} />
  </View>
);
