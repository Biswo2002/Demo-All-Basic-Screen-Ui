import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BOOK_READ = [
  {
    id: 'BOOK1',
    image: require('./bs5.jpg'),
    title: 'Always forgive your enemies, nothing annoys.',
    history: 'HISTORY',
    published: 'published from istudio',
    date: '21 Nov, 2022',
    rate: 4.7,
    icon: <AntDesign name="star" size={20} />,
    review: '892 Ratings on Google play',
    text: 'I failed the first quarter of a class in school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end-year cards, and my mom got it before I could intercept...Read more',
  },
  {
    id: 'BOOK2',
    image: require('./bs2.jpg'),
  },
  {
    id: 'BOOK3',
    image: require('./bs3.jpg'),
  },
  {
    id: 'BOOK4',
    image: require('./bs1.jpg'),
  },
  {
    id: 'BOOK5',
    image: require('./bs1.jpg'),
  },

  {
    id: 'BOOK6',
    image: require('./bs3.jpg'),
  },

  {
    id: 'BOOK7',
    image: require('./bs2.jpg'),
  },
  {
    id: 'BOOK8',
    image: require('./1234568.jpg'),
  },
  {
    id: 'BOOK9',
    image: require('./bs1.jpg'),
  },
  {
    id: 'BOOK10',
    image: require('./bs5.jpg'),
  },
];
const AllBook2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.FlatList}>
        <FlatList
          numColumns={2}
          ListHeaderComponent={
            <>
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
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <Text style={styles.Audiobooks}>Audiobooks</Text>
                </TouchableOpacity>
              </View>
            </>
          }
          ListFooterComponent={
            <View style={styles.Button}>
              <Ionicons name="ios-home-outline" size={30} color={'gray'} />
              <MaterialIcons name="location-city" size={30} color={'gray'} />
              <Feather name="mic" size={30} color={'gray'} />
              <Feather name="message-square" size={30} color={'gray'} />
              <Feather name="user" size={30} color={'gray'} />
            </View>
          }
          data={BOOK_READ}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.BookIMG2}
              onPress={() => navigation.navigate('ReadBook', {Read: item})}>
              <Image
                // style={[styles.f1IMG, {height: index % 2 === 0 ? 300 : 330}]}
                style={styles.f1IMG}
                source={item?.image}
              />
              {/* <Text style={styles.SubText}>{item.Name}</Text> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default AllBook2;

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
    height: 55,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 50,
  },
  Headbutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f7f7',
    width: 380,
    height: 65,
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
  BookIMG2: {
    flexDirection: 'row',
    marginHorizontal: 3,
    paddingTop: 10,
    width: Dimensions.get('window').width / 2.1,
  },
  f1IMG: {
    width: 199,
    height: 300,
    borderRadius: 20,
  },
  FlatList: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 3,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 55,
  },
  SubText: {
    fontSize: 22,
  },
});
