import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  // const [firstName, setFirstName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const [dateOfBirth, setDateOfBirth] = useState();
  const [Age, setAge] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [alternativeNumber, setAlternativeNumber] = useState();
  const [countryName, setCountryName] = useState();
  const [stateName, setStateName] = useState();
  const [district, setDistrict] = useState();
  const [area, setArea] = useState();
  const [city, setCity] = useState();
  const [pinNumber, setPinNumber] = useState();
  const [plotNumber, setPlotNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);
  // console.log(dateOfbirth);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ///////////////// */}

        <View style={styles.headline}>
          <Octicons name="arrow-left" size={30} color={'#000'} />
          <Text style={styles.firsticon}>Create New Account</Text>
        </View>
        <ImageBackground
          source={require('./2803207.jpg')}
          style={{width: 420, height: 290}}></ImageBackground>
        <View
          style={{
            backgroundColor: '#e9e9f9',
            marginTop: -20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 40,
          }}>
          <View
            style={{
              backgroundColor: 'blue',
              borderRadius: 30,
              marginTop: 30,
              marginHorizontal: 15,
              alignItems: 'center',
              height: 40,
              // width: 380,
            }}>
            {/* Personal Details */}

            <Text style={{fontSize: 20, color: '#fff', marginTop: 4}}>
              Personal Details
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.name}> FIRST NAME</Text>
            <TextInput
              style={styles.first}
              placeholder="   Searching"
              placeholderTextColor={'gray'}
              value={firstName}
              onChangeText={fn => setFirstName(fn)}
            />
          </View>
          <View>
            <Text style={styles.name}> LAST NAME</Text>
            <TextInput
              style={styles.first2}
              placeholder="   Yard,com"
              placeholderTextColor={'gray'}
              value={lastName}
              onChangeText={fn => setLastName(fn)}
            />
          </View>
          <View>
            <Text style={styles.name}>EMAIL</Text>
            <TextInput
              style={styles.first3}
              placeholder="email@searchingyard"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={fn => setEmail(fn)}
            />
          </View>
          <View>
            <Text style={styles.name}> CREATE PASSWORD</Text>
            <View style={styles.first4}>
              <TextInput
                value={password}
                onChangeText={pw => setPassword(pw)}
                placeholder="For Strong Password add likes @ # 123"
                placeholderTextColor={'black'}
                style={{color: 'black'}}
              />
              <TouchableOpacity>
                <Text style={{marginRight: 15, color: '#000'}}>SHOW</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.name}> CONFROM PASSWORD</Text>
            <View style={styles.first4}>
              <TextInput
                value={confirmPassword}
                onChangeText={pw => setConfirmPassword(pw)}
                placeholder="For Strong Password add likes @ # 123"
                placeholderTextColor={'black'}
                style={{color: 'black'}}
              />
              <TouchableOpacity>
                <Text style={{marginRight: 15, color: '#000'}}>SHOW</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <Text style={styles.BIRTH}>DATE OF BIRTH </Text>
            <Text style={styles.nameAge}>AGE </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
            }}>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="01/01/2022"
                placeholderTextColor={'gray'}
                value={dateOfBirth}
                onChangeText={fn => setDateOfBirth(fn)}
                keyboardType={'number-pad'}
              />
            </View>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="   22"
                placeholderTextColor={'gray'}
                value={Age}
                onChangeText={fn => setAge(fn)}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <Text style={styles.BIRTH}>MOBILE NUMBER </Text>
            <Text style={styles.nameNumber}>ALTERNATIVE NUMBER </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
            }}>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="1800 202 202"
                placeholderTextColor={'gray'}
                value={mobileNumber}
                onChangeText={fn => setMobileNumber(fn)}
                keyboardType={'number-pad'}
              />
            </View>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="1800 232 2020"
                placeholderTextColor={'gray'}
                value={alternativeNumber}
                onChangeText={fn => setAlternativeNumber(fn)}
                keyboardType={'number-pad'}
              />
            </View>
          </View>

          {/* Personal Details */}

          <View style={styles.container}>
            <Text style={styles.name}>COUNTRY NAME</Text>
            <TextInput
              style={styles.first}
              placeholder="   INDIA"
              placeholderTextColor={'gray'}
              value={countryName}
              onChangeText={fn => setCountryName(fn)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <Text style={styles.BIRTH}>STATE NAME </Text>
            <Text style={{marginRight: 120, color: '#000'}}>DISTRICT</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
            }}>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="MUMBAI"
                placeholderTextColor={'gray'}
                value={stateName}
                onChangeText={fn => setStateName(fn)}
              />
            </View>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="   KHURDA"
                placeholderTextColor={'gray'}
                value={district}
                onChangeText={fn => setDistrict(fn)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <Text style={styles.BIRTH}>CITY</Text>
            <Text style={{marginRight: 150, color: '#000'}}>AREA</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
            }}>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="  BBSR"
                placeholderTextColor={'gray'}
                value={city}
                onChangeText={fn => setCity(fn)}
              />
            </View>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="  BBSR "
                placeholderTextColor={'gray'}
                value={area}
                onChangeText={fn => setArea(fn)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <Text style={styles.BIRTH}>PLOT NUMBER</Text>
            <Text style={{marginRight: 100, color: '#000'}}>PIN NUMBER</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
            }}>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="  B-19/30"
                placeholderTextColor={'gray'}
                value={plotNumber}
                onChangeText={fn => setPlotNumber(fn)}
              />
            </View>
            <View>
              <TextInput
                style={styles.first5}
                placeholder="   756182"
                placeholderTextColor={'gray'}
                value={pinNumber}
                onChangeText={fn => setPinNumber(fn)}
                keyboardType={'number-pad'}
              />
            </View>
          </View>
          {/* Last Part */}

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <TextInput style={styles.checkbox} />
            <Text style={styles.Terms}>
              By Signing up,you agree to Terms Use
            </Text>
          </View>
          <View style={{padding: 20}}>
            <Button
              title="Register Now"
              color={'blue'}
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !dateOfBirth ||
                !mobileNumber ||
                !alternativeNumber ||
                !countryName ||
                !stateName ||
                !district ||
                !dateOfBirth ||
                !mobileNumber ||
                !area ||
                !plotNumber ||
                !pinNumber ||
                !countryName
                  ? true
                  : false
              }
              onPress={() =>
                navigation.navigate('Database', {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  dateOfBirth: dateOfBirth,
                  Age: Age,
                  mobileNumber: mobileNumber,
                  alternativeNumber: alternativeNumber,
                  countryName: countryName,
                  stateName: stateName,
                  district: district,
                  city: city,
                  area: area,
                  plotNumber: plotNumber,
                  pinNumber: pinNumber,
                })
              }
            />
          </View>

          <View style={styles.other}>
            <Text style={{color: 'gray'}}>Already a Members?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
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
  nameAge: {
    // marginLeft: 40,]
    marginRight: 150,
    color: '#000',
  },
  nameNumber: {
    marginRight: 30,
    color: '#000',
  },
  BIRTH: {
    marginHorizontal: 20,
    color: '#000',
  },
  first: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    color: '#000',
  },
  first2: {
    borderWidth: 1,
    marginTop: 15,
    color: '#000',
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  first3: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    color: '#000',
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
    borderColor: 'gray',
    color: '#000',
  },
  first5: {
    borderWidth: 1,
    marginTop: 15,
    color: '#000',
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    width: 170,
  },
  checkbox: {
    borderWidth: 1,
    marginTop: 10,
    width: 25,
    height: 20,
    marginLeft: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  Terms: {
    marginTop: 10,
    marginLeft: 10,
    color: 'gray',
  },
  other: {
    flexDirection: 'row',
    justifyContent: 'center',

    padding: 20,
  },
});
