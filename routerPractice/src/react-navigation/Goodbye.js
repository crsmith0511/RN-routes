/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import SwitchSelector from "react-native-switch-selector";

export default class Home extends Component {
  render() {
    return (
      <View>
        <View>
          <SwitchSelector
            initial={0}
            onPress={value => this.setState({ gender: value })}
            textColor='white'
            selectedColor='black'
            buttonColor='white'
            borderColor='black'
            backgroundColor='grey'
            borderRadius={5}
            hasPadding={true}
            valuePadding={5}
            style={{marginBottom: 5}}
            options={[
              { label: "Option 1", value: "f"}, //images.feminino = require('./path_to/assets/img/feminino.png')
              { label: "Option 2", value: "m"} //images.masculino = require('./path_to/assets/img/masculino.png')
            ]}
          />
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
