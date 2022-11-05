import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743__340.jpg',
          }}
        />
        <Text style={{color: 'white', fontSize: 20, paddingLeft: 20}}>
          Port Dixie
        </Text>
      </View>
      <View style={styles.section1}>
        <Text style={styles.hometext}>HOME</Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>
          AFFILIATE CENTER{' '}
        </Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>
          PRODUCTS
        </Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>MY BAG</Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>
          WISHLISTS
        </Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>SALES</Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>
          ACCOUNT SETTING
        </Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>COUPON</Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>
          NOTIFICATION
        </Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>HELP</Text>
        <Text style={{color: 'white', padding: 18, fontSize: 20}}>LOGOUT</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#708090',
    paddingTop: 10,
    marginRight: 15,
    marginLeft: 10,
    flex: 0.99,
    borderRadius: 20,
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
  hometext: {color: 'white', padding: 18, fontSize: 20},
});
