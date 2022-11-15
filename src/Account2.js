import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headline}>
          <Octicons name="arrow-left" size={30} color={'#000'} />
          <Text style={styles.firsticon}>Create New Account</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.name}> FIRST NAME</Text>
          <TextInput
            style={styles.first}
            placeholder="   Searching"
            placeholderTextColor={'gray'}
          />
        </View>
        <View>
          <Text style={styles.name}> LAST NAME</Text>
          <TextInput
            style={styles.first2}
            placeholder="   Yard,com"
            placeholderTextColor={'gray'}
          />
        </View>
        <View>
          <Text style={styles.name}>EMAIL</Text>
          <TextInput
            style={styles.first3}
            placeholder="   email@searchingyard"
            placeholderTextColor={'gray'}
          />
        </View>
        <View>
          <Text style={styles.name}> CREATE PASSWORD</Text>
          <View style={styles.first4}>
            <TextInput placeholder="For Strong Password add likes @ # 123" />
            <TouchableOpacity>
              <Text style={{marginRight: 15, color: '#000'}}>SHOW</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.name}>DATE OF BIRTH </Text>
          <TextInput
            style={styles.first5}
            placeholder="   01/01/2022"
            placeholderTextColor={'gray'}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
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
          }}
          onPress={() => navigation.navigate('Feed')}>
          <Text style={{color: 'white', paddingVertical: 10, fontSize: 15}}>
            REGISTER NOW
          </Text>
        </TouchableOpacity>
        <View style={styles.other}>
          <Text style={{color: 'gray'}}>Already a Members?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e9e9f4',
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
    paddingLeft: 25,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 15,
    position: 'relative',
  },
  container: {
    marginTop: 20,
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
    borderRadius: 5,
    backgroundColor: 'white',
  },
  first2: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  first3: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  first4: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  first5: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  checkbox: {
    borderWidth: 1,
    marginTop: 10,
    width: 25,
    height: 20,
    marginLeft: 35,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  Terms: {
    marginTop: 10,
    marginLeft: 10,
    color: 'gray',
  },
  other: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
