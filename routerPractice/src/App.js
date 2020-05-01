import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import LandingPage from './LandingPage';
import Home from './Home';
import GoodBye from './GoodBye';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/goodbye" component={GoodBye} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
