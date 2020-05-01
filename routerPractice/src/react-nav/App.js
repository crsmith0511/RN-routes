/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingPage from './LandingPage';
import Home from './Home';
import GoodBye from './GoodBye';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
                name="Landing Page"
                component={LandingPage}
                options={{
                title: 'Landing Page',
                }}
        />    
        <Stack.Screen
                name="Home"
                component={Home}
                options={{
                title: 'Home Screen',
                }}
            />
            <Stack.Screen
                name="GoodBye"
                component={GoodBye}
                options={{
                title: 'GoodBye Screen',
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
