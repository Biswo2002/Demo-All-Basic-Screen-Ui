/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {Home, ReadBook} from './src';
import Account from './src/Account';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/DetailsScreen';
// import Database from './src/Database';
// import Allbook from './src/Allbook';
// import Book from './src/Book';
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
          name="ReadBook"
          component={ReadBook}
          options={{headerShown: true}}
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
