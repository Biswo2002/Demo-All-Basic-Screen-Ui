import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const ReadBook = () => {
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Text>{route.params.Read.id}</Text>
      <Image
        source={route.params.Read.image}
        style={{height: 300, width: 300}}
      />
    </View>
  );
};

export default ReadBook;

const styles = StyleSheet.create({});
