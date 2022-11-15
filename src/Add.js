import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Add = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require('./bg_girl-removebg.png')}></ImageBackground>
      <View style={styles.Text}>
        <View style={styles.MainText}>
          <Text style={styles.text}>Buy easy from anywhere</Text>
          <Text style={styles.text1}>
            After you have registered your number and signal, You can start
            communicating privately, with other Signal users.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.TextContainer}>Skip</Text>
          <View style={styles.icon1}>
            <FontAwesome
              name="minus"
              size={25}
              color="red"
              style={styles.icon}
            />
            <FontAwesome
              name="minus"
              size={25}
              color="gray"
              style={styles.icon}
            />
            <FontAwesome
              name="minus"
              size={25}
              color="gray"
              style={styles.icon}
            />
          </View>
          <Text style={styles.TextContainer1} color={'#000'}>
            Next
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Add;
const styles = StyleSheet.create({
  background: {
    height: 600,
  },
  MainText: {
    alignItems: 'center',
  },
  Text: {
    backgroundColor: '#ffffff',
    marginTop: -30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginRight: 5,
    height: 400,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },
  text1: {
    marginTop: 25,
    color: '#000',
    fontSize: 18,
    marginHorizontal: 20,
    letterSpacing: 1,
    lineHeight: 25,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    // marginVertical: 15,
    marginTop: 40,
  },
  TextContainer: {
    fontSize: 20,
    color: 'gray',
    // fontWeight: 'bold',
  },
  TextContainer1: {
    color: 'black',
    fontSize: 20,
  },
  icon1: {
    // padding: 3,
    flexDirection: 'row',
    margin: 2,
    // marginHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    margin: 2,
    // marginHorizontal: 1,
    marginLeft: 5,
  },
});
