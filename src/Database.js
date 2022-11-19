import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
// const navigation = useNavigation();

const Database = () => {
  console.log(route);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('./2803207.jpg')}
          style={{width: 420, height: 280}}></ImageBackground>
        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              paddingTop: 20,
              paddingHorizontal: 15,
              backgroundColor: '#3730a3',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderRadius: 40,
              marginTop: -20,
              height: 550,
            }}>
            <View style={{marginTop: 30}}>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>FIRSTNAME</Text>
                  <Text style={styles.params}>{route.params.firstName}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.LASTNAME}>LASTNAME</Text>
                  <Text style={styles.params}>{route.params.lastName}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>EMAIL I'D</Text>
                  <Text style={styles.params}>{route.params.email}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.BIRTH}>DATE OF BIRTH</Text>
                  <Text style={styles.params}>{route.params.dateOfBirth}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>AGE</Text>
                  <Text style={styles.params}>{route.params.Age}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.input}>MOBILE NUMBER</Text>
                  <Text style={styles.params}>{route.params.mobileNumber}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>ALTER NATIVE NUMBER</Text>
                  <Text style={styles.params}>
                    {route.params.alternativeNumber}
                  </Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.COUNTRY}>COUNTRY</Text>
                  <Text style={styles.params}>{route.params.countryName}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>STATE NAME </Text>
                  <Text style={styles.params}>{route.params.stateName}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.DISTRICT}>DISTRICT</Text>
                  <Text style={styles.params}>{route.params.district}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>CITY</Text>
                  <Text style={styles.params}>{route.params.city}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.AREA}>AREA</Text>
                  <Text style={styles.params}>{route.params.area}</Text>
                </View>
              </View>
              <View style={styles.inputName1}>
                <View style={styles.inputName}>
                  <Text style={styles.input}>PIN NUMBER</Text>
                  <Text style={styles.params}>{route.params.pinNumber}</Text>
                </View>
                <View style={styles.inputName}>
                  <Text style={styles.PlotNumber}>PLOTNUMBER</Text>
                  <Text style={styles.params}>{route.params.plotNumber}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
            marginBottom: 20,
            height: 90,
            alignItems: 'center',
          }}>
          <View style={{width: 100}}>
            <Button
              title="EDIT"
              color={'blue'}
              // onPress={() => navigation.navigate('Account2')}
            />
          </View>
          <View style={{width: 100}}>
            <Button title="DRAFT" color={'#b22222'} />
          </View>
          <View style={{width: 100}}>
            <Button title="SUBMIT" color={'#6a5acd'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Database;

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    color: '#fff',
  },
  params: {
    color: '#fff',
    fontSize: 17,
    padding: 5,
  },
  inputName1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  LASTNAME: {
    marginRight: 41,
    color: '#ffff',
    fontWeight: 'bold',
  },
  BIRTH: {
    marginRight: 15,
    color: '#ffff',
    fontWeight: 'bold',
  },
  COUNTRY: {
    marginRight: 48,
    color: '#ffff',
    fontWeight: 'bold',
  },
  DISTRICT: {
    marginRight: 53,
    color: '#ffff',
    fontWeight: 'bold',
  },
  AREA: {
    marginRight: 80,
    color: '#ffff',
    fontWeight: 'bold',
  },
  PlotNumber: {
    marginRight: 28,
    color: '#ffff',
    fontWeight: 'bold',
  },
});
