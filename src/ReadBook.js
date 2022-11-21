import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const ReadBook = () => {
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView>
      <View>
        <Text style={{color: 'red'}}>{route.params.Read.history}</Text>
      </View>
      <View>
        <Text style={{color: '#000'}}>{route.params.Read.title}</Text>
      </View>
      <View>
        <View>
          <Text style={{color: ''}}>{route.params.Read.published}</Text>
          <View>
            <Text style={{color: ''}}>{route.params.Read.date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainImage}>
        <Image source={route.params.Read.image} style={styles.img} />
      </View>
      <View>
        <View>
          <Text style={{color: ''}}>{route.params.Read.rate}</Text>
        </View>
        <View>
          <Text>{route.params.Read.icon}</Text>
          <Text>{route.params.Read.icon}</Text>
          <Text>{route.params.Read.icon}</Text>
          <Text>{route.params.Read.icon}</Text>
          <Text>{route.params.Read.icon}</Text>
        </View>
      </View>
      <View>
        <Text>{route.params.Read.review}</Text>
      </View>
      <View>
        <Text>{route.params.Read.text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReadBook;

const styles = StyleSheet.create({
  History: {
    color: 'red',
    fontSize: 18,
    padding: 5,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  img: {
    width: 300,
    height: 200,
  },
  mainImage: {
    alignItems: 'flex-end',
  },
});
