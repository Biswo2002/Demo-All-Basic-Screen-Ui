import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const Account = () => {
  return (
    <View style={styles.main}>
      <View style={styles.headline}>
        <Octicons name="arrow-left" size={30} color={'black'} />
        <Text style={styles.firsticon}>Create New Account</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.name}> FIRST NAME</Text>
        <TextInput style={styles.first} placeholder="   Searching" />
      </View>
      <View>
        <Text style={styles.name}> LAST NAME</Text>
        <TextInput style={styles.first2} placeholder="   Yard,com" />
      </View>
      <View>
        <Text style={styles.name}>EMAIL</Text>
        <TextInput style={styles.first3} placeholder="   email@searchingyard" />
      </View>
      <View>
        <Text style={styles.name}> CREATE PASSWORD</Text>
        <TextInput style={styles.first4} />
      </View>
      <View>
        <Text style={styles.name}>DATE OF BIRTH </Text>
        <TextInput style={styles.first5} placeholder="   01/01/2022" />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <TextInput style={styles.checkbox} />
        <Text style={styles.Terms}>By Signing up,you agree to Terms Use</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#F93C64',
          marginHorizontal: 40,
          alignItems: 'center',
          marginTop: 20,
          borderRadius: 10,
          marginTop: 40,
        }}>
        <Text style={{color: 'white', paddingVertical: 10, fontSize: 15}}>
          REGISTER NOW
        </Text>
      </TouchableOpacity>
      <View style={styles.other}>
        <Text style={''}>Already a Members?</Text>
        <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}>
          Sign in{' '}
        </Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
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
  container: {
    marginTop: 30,
  },
  name: {
    marginHorizontal: 30,
    marginTop: 20,
    color: 'black',
    fontSize: 12,
  },
  first: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 3,
  },
  first2: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 3,
  },
  first3: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 3,
  },
  first4: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 3,
  },
  first5: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 3,
  },

  checkbox: {
    borderWidth: 1,
    marginTop: 10,
    width: 25,
    height: 20,
    marginLeft: 35,
    borderRadius: 5,
  },
  Terms: {
    marginTop: 10,
    marginLeft: 10,
  },
  other: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
