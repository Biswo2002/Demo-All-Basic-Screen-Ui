import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const Shadow = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground source={require('./girl.jpg')} style={styles.background}>
        <View style={styles.icon}>
          <AntDesign name="arrowleft" size={30} color={'white'} />
          <AntDesign name="hearto" size={30} color={'white'} />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.maintext}>
          <Text style={styles.header}>How To Use Eye Shadow Like the Star</Text>
        </View>
        <View style={styles.subtext}>
          <Text style={styles.text1}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            it has roots in a piece of classical latin literature from 45 BC,
            making it over 2000 years old.
          </Text>
          <Text style={styles.text2}>
            There are many variations of passages of lorem ipsum available, but
            the majority
          </Text>
        </View>
      </View>
      <View style={styles.secondpic}>
        <Image style={styles.picture} source={require('./kid.jpg')} />
      </View>
    </SafeAreaView>
  );
};

export default Shadow;
const styles = StyleSheet.create({
  main: {
    // flex: 1,
  },
  background: {
    height: 350,
    // marginTop: 2,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  container: {
    backgroundColor: '#fff',
  },
  maintext: {
    marginTop: 20,
  },
  header: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  subtext: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text1: {
    fontSize: 16,
    color: 'gray',
  },
  text2: {
    fontSize: 16,
    marginTop: 20,
    color: 'gray',
  },
  secondpic: {
    alignItems: 'center',
    marginTop: 15,
  },
  picture: {
    width: 400,
    height: 350,
    marginRight: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
});
