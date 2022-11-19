import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
const Allbook = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Headline}>
          <Octicons name="three-bars" size={25} color={'#000'} />
          <Text style={styles.HeadlineBook}>All Books</Text>
          <Ionicons name="md-search-sharp" size={25} color="#000" />
        </View>

        {/* Head Button */}

        <View style={styles.Headbutton}>
          <TouchableOpacity style={styles.TouchHead}>
            <Text style={styles.Ebook}> Ebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.Audiobooks}>Audiobooks</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, paddingVertical: 10}}>
          <View style={styles.BookIMG2}>
            <TouchableOpacity>
              <View>
                <Image source={require('./bs5.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('./bs2.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.BookIMG2}>
            <TouchableOpacity>
              <View>
                <Image source={require('./bs1.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('./1234568.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.BookIMG2}>
            <TouchableOpacity>
              <View>
                <Image source={require('./bs4.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('./bs3.jpg')} style={styles.f1IMG} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.Button}>
        <Ionicons name="ios-home-outline" size={30} color={'gray'} />
        <MaterialIcons name="location-city" size={30} color={'gray'} />
        <Feather name="mic" size={30} color={'gray'} />
        <Feather name="message-square" size={30} color={'gray'} />
        <Feather name="user" size={30} color={'gray'} />
      </View>
    </SafeAreaView>
  );
};

export default Allbook;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  Headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  HeadlineBook: {
    color: '#271944',
    fontSize: 23,
  },
  TouchHead: {
    backgroundColor: '#ffff',
    width: 170,
    height: 45,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 50,
  },
  Headbutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f7f7',
    width: 380,
    height: 55,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    // marginRight: 30,
  },
  Ebook: {
    color: '#271944',
    fontSize: 25,
    marginVertical: 4,
  },
  Audiobooks: {
    color: '#271944',
    fontSize: 22,
    marginRight: 30,
  },
  BookImg: {
    marginTop: 20,
    paddingTop: 20,
  },
  BookIMG2: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 5,
  },
  f1IMG: {
    width: 185,
    height: 300,
    borderRadius: 20,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 55,
  },
});
