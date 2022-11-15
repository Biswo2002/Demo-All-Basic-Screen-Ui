import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const route = useRoute();
  console.log(route.params.product);
  return (
    <View style={{marginLeft: 40}}>
      <Text style={{color: 'black'}}>{route.params.product.title}</Text>
      <Text style={{color: 'black'}}>&#8377; {route.params.product.pice}</Text>
      <Text style={{color: 'black'}}>{route.params.product.subName}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
