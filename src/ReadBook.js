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
        <View style={styles.Header}>
          <AntDesign name="left" size={30} color={'#000'} />
          <Entypo name="dots-three-horizontal" size={30} color={'#000'} />
        </View>
        <Text style={styles.History}>{route.params.Read.id}</Text>
        <Text style={styles.History}>{route.params.Read.Name}</Text>

        <Image
          source={route.params.Read.image}
          style={{height: 300, width: 300}}
        />
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
});
