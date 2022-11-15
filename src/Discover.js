import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const PRODUCT_ARRAY = [
  {
    id: 'p1',
    title: 'NIKE',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={45} color={'#ffff'} />,
    color: 'blue',
  },
  {
    id: 'p2',
    title: 'WOODLAND',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-01',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
    color: 'red',
  },
  {
    id: 'p3',
    title: 'PUMA',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-02',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
    color: 'green',
  },
  {
    id: 'p4',
    title: 'JORDAN',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-03',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={45} color={'#ffff'} />,
  },
  {
    id: 'p5',
    title: 'CAMPUS',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-04',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
  },
  {
    id: 'p6',
    title: 'SREELATHERS',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-05',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
  },
  {
    id: 'p7',
    title: 'ADDA',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-06',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={45} color={'#ffff'} />,
  },
  {
    id: 'p8',
    title: 'REDCHEIF',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-07',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
  },
  {
    id: 'p9',
    title: 'SPARX',
    icon: <AntDesign name="hearto" size={25} color={'#fff'} />,
    subName: 'EPIC-REACT-08',
    pice: 150.5,
    image: require('./shoe.png'),
    icon2: <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />,
  },
];

const BRAND = [
  {
    id: 'b1',
    title: 'Nike',
  },
  {
    id: 'b2',
    title: 'WoodLand',
  },
  {
    id: 'b3',
    title: 'Puma',
  },
  {
    id: 'b4',
    title: 'Jordan',
  },
  {
    id: 'b5',
    title: 'Campus',
  },
  {
    id: 'b6',
    title: 'SreeLeathers',
  },
  {
    id: 'b7',
    title: 'Adda',
  },
  {
    id: 'b8',
    title: 'Red Cheif',
  },
  {
    id: 'b9',
    title: 'Adidas',
  },
];

const Discover = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.Headlid1ne}>
          <View style={styles.header}>
            <Text style={styles.HeadText}>Discover</Text>
          </View>
          <View style={styles.ICON}>
            <Ionicons
              name="ios-search-sharp"
              size={25}
              color={'#000'}
              style={{
                backgroundColor: '#f0f0f0',
                margin: 10,
                borderRadius: 5,
              }}
            />
            <MaterialIcons
              name="notifications-none"
              size={25}
              color={'#000'}
              style={{
                backgroundColor: '#f0f0f0',
                margin: 10,
                borderRadius: 5,
              }}
            />
          </View>
        </View>
        {/* <TEXT></TEXT> 2nd section  */}
        {/* <View style={{flexDirection: 'row'}}>

          <View style={styles.CardContainer1}>
            <View style={styles.IconContainer}>
              <Text style={styles.Nike}> NIKE</Text>
              <AntDesign name="hearto" size={25} color={'#fff'} />
            </View>
            <Text style={styles.SubText}>EPIC-REACT</Text>
            <Text style={styles.Rate}>&#x24; 150.00</Text>
            <Image style={styles.Img} source={require('./shoe.png')} />
            <View
              style={{
                marginLeft: 200,
              }}>
              <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />
            </View>
          </View>
          <View style={styles.CardContainer1}>
            <View style={styles.IconContainer}>
              <Text style={styles.Nike}> NIKE</Text>
              <AntDesign name="hearto" size={25} color={'#fff'} />
            </View>
            <Text style={styles.SubText}>EPIC-REACT</Text>
            <Text style={styles.Rate}>&#x24; 150.00</Text>
            <Image style={styles.Img} source={require('./shoe.png')} />
            <View
              style={{
                marginLeft: 200,
              }}>
              <MaterialIcons name="arrow-right-alt" size={40} color={'#ffff'} />
            </View>
          </View>
        </View> */}
        <View>
          <FlatList
            horizontal={true}
            data={BRAND}
            renderItem={({item}) => (
              <View style={styles.SecondContainer}>
                <Text style={styles.SecondText}>{item?.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                marginTop: 40,
                color: 'gray',
                transform: [
                  {
                    rotate: '270deg',
                  },
                ],
              }}>
              UPCOMING
            </Text>
            <Text
              style={{
                color: 'black',
                transform: [
                  {
                    rotate: '270deg',
                  },
                ],
                marginTop: 20,
              }}>
              FEATURED
            </Text>
            <View
              style={{
                transform: [
                  {
                    rotate: '270deg',
                  },
                ],
              }}>
              <Text
                style={{
                  color: 'gray',
                  paddingHorizontal: 10,
                }}>
                NEW
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              contentContainerStyle={{
                paddingRight: 100,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={PRODUCT_ARRAY}
              renderItem={({item, index}) => (
                <>
                  <Pressable
                    style={[
                      styles.CardContainer,
                      {backgroundColor: item.color},
                    ]}
                    onPress={() =>
                      navigation.navigate('DetailsScreen', {product: item})
                    }>
                    <View style={styles.IconContainer}>
                      <Text style={styles.Nike}>{item.title}</Text>
                      {item.icon}
                    </View>
                    <Text style={styles.SubText}>{item.subName}</Text>
                    <Text style={styles.Rate}>&#x24; {item?.pice}</Text>
                    <Image style={styles.Img} source={item?.image} />
                    <View
                      style={{
                        marginLeft: 190,
                      }}>
                      {item?.icon2}
                    </View>
                  </Pressable>
                </>
              )}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#e6e6fa'}}>
          <View style={styles.More}>
            <Text style={styles.More1}>More</Text>
            <MaterialIcons
              name="arrow-right-alt"
              size={35}
              color={'#000'}
              style={{}}
            />
          </View>
          {/* #rd Section  */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            {/* 111 */}
            <View style={styles.subCheck}>
              <View style={styles.New}>
                <Text style={styles.NewText}>NEW</Text>
                <AntDesign
                  name="hearto"
                  size={25}
                  color={'#000'}
                  style={{marginRight: 15, marginTop: 15}}
                />
              </View>
              <Image
                source={require('./designsnacker.png')}
                style={styles.shoeIMG}
              />
              <View style={styles.Text12}>
                <Text style={styles.Text12}>NIKE AIR-MAX</Text>
                <Text style={styles.Text12}>&#x24; 150.00</Text>
              </View>
            </View>

            {/* 222 */}

            <View style={styles.subCheck}>
              <View style={styles.New}>
                <Text style={styles.NewText}>NEW</Text>
                <AntDesign
                  name="hearto"
                  size={25}
                  color={'#000'}
                  style={{marginRight: 15, marginTop: 15}}
                />
              </View>
              <Image source={require('./boot.png')} style={styles.shoeIMG} />
              <View style={styles.Text12}>
                <Text style={styles.Text12}>NIKE AIR-MAX</Text>
                <Text style={styles.Text12}>&#x24; 150.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.FOOTER}>
          <FontAwesome5 name="house-user" size={30} color={'red'} />
          <AntDesign name="hearto" size={25} color={'#000'} />
          <MaterialIcons name="location-city" size={30} color={'#000'} />
          <FontAwesome5 name="luggage-cart" size={30} color={'#000'} />
          <SimpleLineIcons name="user" size={30} color={'#000'} />
        </View>
        {/* 0000 */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#e6e6fa',
  },
  Headlid1ne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
  },
  HeadText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  ICON: {
    flexDirection: 'row',
  },
  SecondContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  SecondText: {
    margin: 8,
    fontSize: 20,
    color: 'gray',
    marginLeft: 18,
  },
  CardContainer: {
    marginTop: 30,
    backgroundColor: '#496EBF',
    width: 250,
    height: 310,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 40,
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  Nike: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 4,
  },
  SubText: {
    color: 'white',
    fontSize: 26,
    marginHorizontal: 12,
  },
  Rate: {
    color: 'white',
    marginHorizontal: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
  Img: {
    width: 300,
    height: 150,
    marginLeft: 30,
  },
  More: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  More1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subCheck: {
    backgroundColor: '#fff',
    height: 240,
    width: 180,
    borderRadius: 10,
    marginLeft: 20,
  },
  New: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NewText: {
    color: '#fffff0',
    transform: [
      {
        rotate: '270deg',
      },
    ],
    marginTop: 20,
    backgroundColor: '#F6446A',
    padding: 6,
    margin: 2,
    fontSize: 13,
  },
  shoeIMG: {
    width: 180,
    height: 130,
  },
  Text12: {
    marginVertical: 3,
    alignItems: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  FOOTER: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    borderColor: 'gray',
    paddingBottom: 20,
  },
});
