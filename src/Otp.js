import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const Otp = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headline}>
        <Octicons name="arrow-left" size={30} color={'black'} />
        <Text style={styles.firsticon}>Create New Account</Text>
      </View>
      <View style={styles.picture}>
        <Image style={styles.logo} source={require('./123.png')} />
      </View>
      <View style={styles.InputContainer}>
        <TextInput style={styles.first} />
        <TextInput style={styles.first} />
        <TextInput style={styles.first} />
        <TextInput style={styles.first} />
      </View>
      <View style={styles.message}>
        <Text style={styles.sms}>Check your SMS messages, we have sent</Text>
        <Text style={styles.sms}>you the Pin at +91 1800 2522</Text>
      </View>
      <View style={styles.mainlogin}>
        {/* FACEBOOK */}

        <TouchableOpacity style={styles.logincontainer1}>
          <Text style={styles.facebook}>Didn't recive SMS</Text>
        </TouchableOpacity>

        {/* google */}

        <TouchableOpacity style={styles.logincontainer2}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 25,
              alignItems: 'center',
            }}>
            <Text style={styles.google}>Resend OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  firsticon: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 60,
  },
  headline: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 25,
  },
  picture: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 210,
    marginRight: 40,
  },
  InputContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  first: {
    borderWidth: 1,
    borderRadius: 5,
    width: 65,
    marginHorizontal: 15,
    backgroundColor: '#F1F2F6',
    textAlign: 'center',
  },
  message: {
    alignItems: 'center',
    marginHorizontal: 40,
    justifyContent: 'center',
    marginTop: 30,
    fontSize: 15,
  },
  sms: {fontSize: 16},
  mainlogin: {
    flexDirection: 'row',

    justifyContent: 'center',
    marginTop: 40,
  },
  logincontainer1: {
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    width: 140,
  },
  logincontainer2: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    height: 40,
  },
});
