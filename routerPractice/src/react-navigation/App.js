/* eslint-disable no-func-assign */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LandingPage from './LandingPage';
import Home from './Home';
import SignUp from './SignUp';
import Welcome from './Welcome';
import GoodBye from './Goodbye';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  function HomeTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Hello" component={Welcome} />
        <Tab.Screen name="GoodBye" component={GoodBye} />
      </Tab.Navigator>
    );
  }

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
                component={HomeTabs}
                options={{
                title: 'Home Screen',
                headerLeft: null
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                title: 'SignUp',
                }}
            />
    </Stack.Navigator>
   </NavigationContainer>
 )
}
