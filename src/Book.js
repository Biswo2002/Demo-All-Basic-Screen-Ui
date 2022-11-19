import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Book = () => {
  return (
    <View>
      <Text>Book</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({});
