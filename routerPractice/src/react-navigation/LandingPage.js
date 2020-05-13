/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, TextInput, StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    // this.usernameTyped = this.usernameTyped.bind(this);
  }

  signIn = (event) => {
    event.preventDefault();
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            style={styles.textInput}
            placeholder="Username"
          />
          <TextInput
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            style={styles.textInput}
            placeholder="Password"
          />
        </View>
        <View>
          <Button onPress={this.signIn} title="Sign In" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: 'black',
  },
});
