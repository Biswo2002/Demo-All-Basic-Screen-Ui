import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/03/02/16/34/woman-6063087__340.jpg',
          }}
        />
        <Text style={{color: 'white', fontSize: 20, paddingLeft: 20}}>
          Searching Yard
        </Text>
      </View>
      <View style={styles.section1}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="home" size={25} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>HOME</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name="store-alt" size={20} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            AFFILIATE CENTER
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name="indent" size={20} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            PRODUCTS
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="shopping-bag" size={20} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            MY BAG
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="heart" size={20} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            WISHLISTS
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="areachart" size={20} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>SALES</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="setting" size={22} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            ACCOUNT SETTING
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="ticket" size={22} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            COUPON
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="notification" size={21} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            NOTIFICATION
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="help-with-circle" size={22} color={'white'} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>HELP</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="logout" color={'white'} size={20} />
          <Text style={{color: 'white', padding: 18, fontSize: 20}}>
            LOGOUT
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2f4f4f',
    // paddingTop: 10,
    marginRight: 15,
    marginLeft: 10,
    marginTop: 5,
    flex: 0.99,
    borderRadius: 5,
  },

  container: {
    marginTop: 30,
    marginRight: 20,
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  picture: {
    height: 110,
    width: 110,
    borderRadius: 600,
  },

  section1: {
    paddingTop: 50,
    padding: 30,
  },
  // hometext: {color: 'white', padding: 18, fontSize: 20},
});

// One Sectionj is Complited
