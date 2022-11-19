/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {Home} from './src';
import Account from './src/Account';
import Account2 from './src/Account2';
import Login from './src/Login';
import Otp from './src/Otp';
import Feed from './src/Feed';
import Second from './src/Second';
import Shadow from './src/Shadow';
import Activity from './src/Activity';
import Add from './src/Add';
import Discover from './src/Discover';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/DetailsScreen';
import Database from './src/Database';
import Allbook from './src/Allbook';
import Book from './src/Book';
import AllBook2 from './src/AllBook2';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllBook2">
        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        <Stack.Screen
          name="Book"
          component={Book}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen
          name="AllBook2"
          component={AllBook2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
