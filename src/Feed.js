import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Feed = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headline}>
        <FontAwesome name="bars" size={25} color={'black'} />
        <Text style={styles.firsticon}>Feed</Text>
        <FontAwesome name="search" size={25} color={'black'} />
      </View>
      <View style={styles.firstimg}>
        <Image style={styles.logo} source={require('./image.jpg')} />
      </View>
      <View style={styles.secondimg}>
        <Image style={styles.logo1} source={require('./maa.jpg')} />
        <Text style={styles.N1}>Reyanshi Raj Rajkumari </Text>
      </View>
      <View style={styles.N2Time}>
        <Entypo name="location" size={18} style={styles.n2} color="blue" />
        <Text style={styles.N2}>India </Text>
        <Text style={styles.N3}>30 min ago </Text>
      </View>
      <View style={styles.number}>
        <View style={styles.heart}>
          <Entypo name="heart-outlined" size={20} color="blue" />
          <Text style={{marginLeft: 8, color: 'black'}}>3000</Text>
        </View>
        <View style={styles.like}>
          <AntDesign name="like1" size={20} color="red" />
          <Text style={{marginLeft: 8, color: 'black'}}>5000</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={25}
          color="black"
          style={styles.dot}
        />
      </View>
      <View style={styles.firstimg}>
        <Image style={styles.logo} source={require('./pic.jpg')} />
      </View>
    </SafeAreaView>
  );
};

export default Feed;
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f9',
    flex: 1,
    marginHorizontal: 2,
  },
  firsticon: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 135,
  },
  headline: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 25,
  },

  logo: {
    width: 380,
    height: 300,
    marginHorizontal: 50,
    borderRadius: 20,
  },
  firstimg: {
    marginTop: 30,
    marginRight: 20,
    alignItems: 'center',
    marginLeft: 15,
  },
  secondimg: {
    marginTop: 30,
    marginRight: 20,
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
  },
  logo1: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  N1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignContent: 20,
    // marginHorizontal: 15,
  },
  N2Time: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 20,
  },
  N2: {
    marginLeft: 15,
    color: 'gray',
    fontSize: 16,
  },
  n2: {
    marginLeft: 15,
    fontSize: 16,
  },
  N3: {
    marginLeft: 230,
    color: 'gray',
    fontSize: 16,
  },
  number: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
  },
  heart: {
    flexDirection: 'row',
    marginRight: 20,
  },
  like: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  dot: {
    marginLeft: 60,
    paddingLeft: 130,
  },
});
