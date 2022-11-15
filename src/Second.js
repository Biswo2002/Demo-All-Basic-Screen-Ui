import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Second = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={require('./sneakers.jpg')}
        style={styles.background}>
        <View style={styles.Container}>
          <View style={styles.Text}>
            <Text style={styles.text}>
              Huge collection of all type of Sneakers in the world.
            </Text>
          </View>
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
              color="#fff"
              style={styles.icon}
            />
            <FontAwesome
              name="minus"
              size={25}
              color="#fff"
              style={styles.icon}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.register}>
              <Text style={{color: 'black', paddingVertical: 10, fontSize: 18}}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login}>
              <Text style={{color: 'white', paddingVertical: 10, fontSize: 18}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.last}>
            <FontAwesome name="facebook-official" color={'white'} size={27} />
            <Text style={styles.Facebook}>Continue with Facebook</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Second;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  background: {
    height: Dimensions.get('window').height,
    // width: 450,
  },
  Text: {
    marginTop: 400,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 37,
    color: '#ffff',
  },
  icon1: {
    padding: 3,
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    margin: 2,
    // marginHorizontal: 1,
    marginLeft: 5,
  },
  btn: {
    flexDirection: 'row',
  },
  login: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 2,
    width: 120,
  },
  register: {
    backgroundColor: '#ffff',
    marginHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 30,
    width: 120,
  },
  last: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 50,
  },
  Facebook: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
