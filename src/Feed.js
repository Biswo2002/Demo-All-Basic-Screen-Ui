import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Feed = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headline}>
          <FontAwesome name="bars" size={25} color={'black'} />
          <Text style={styles.firsticon}>Feed</Text>
          <FontAwesome name="search" size={25} color={'black'} />
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.firstimg}>
            <Image style={styles.logo} source={require('./image.jpg')} />
          </View>

          <View style={styles.secondimg}>
            <View>
              <Image style={styles.logo1} source={require('./maa.jpg')} />
            </View>
            <View style={{width: 310, paddingLeft: 10}}>
              <View>
                <Text style={styles.text}>Reyanshi Raj Rajkumari </Text>
              </View>
              <View style={styles.third}>
                <View style={styles.indiaicon}>
                  <Entypo
                    name="location"
                    size={18}
                    style={styles.n2}
                    color="blue"
                  />
                  <Text style={{marginLeft: 10, color: 'black'}}>India </Text>
                </View>
                <View>
                  <Text style={styles.N2}>30 min ago </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.number}>
            <View style={styles.heart}>
              <Entypo name="heart-outlined" size={20} color="blue" />
              <Text style={styles.threethusend}>3000</Text>
            </View>
            <View style={styles.like}>
              <AntDesign name="like1" size={20} color="red" />
              <Text style={styles.threethusend}>3000</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={25}
              color="black"
              style={styles.dot}
            />
          </View>
        </View>
        {/* 2nd Section */}

        <View style={styles.secondContainer}>
          <View style={styles.firstimg}>
            <Image style={styles.logo} source={require('./pic.jpg')} />
          </View>

          <View style={styles.secondimg}>
            <View>
              <Image style={styles.logo1} source={require('./img.jpg')} />
            </View>
            <View style={{width: 310, paddingLeft: 10}}>
              <View>
                <Text style={styles.text}>Sai Smarak Kuamar </Text>
              </View>
              <View style={styles.third}>
                <View style={styles.indiaicon}>
                  <Entypo
                    name="location"
                    size={18}
                    style={styles.n2}
                    color="blue"
                  />
                  <Text style={{marginLeft: 10, color: 'black'}}>Colombo </Text>
                </View>
                <View>
                  <Text style={styles.N2}>10 min ago </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.number}>
            <View style={styles.heart}>
              <Entypo name="heart-outlined" size={20} color="blue" />
              <Text style={styles.threethusend}>30M</Text>
            </View>
            <View style={styles.like}>
              <AntDesign name="like1" size={20} color="red" />
              <Text style={styles.threethusend}>55K</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={25}
              color="black"
              style={styles.dot}
            />
          </View>
        </View>

        {/* 3re Section */}

        <View style={styles.secondContainer}>
          <View style={styles.firstimg}>
            <Image style={styles.logo} source={require('./logo.jpg')} />
          </View>

          <View style={styles.secondimg}>
            <View>
              <Image
                style={styles.logo1}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743__340.jpg',
                }}
              />
            </View>
            <View style={{width: 310, paddingLeft: 10}}>
              <View>
                <Text style={styles.text}>John Shna </Text>
              </View>
              <View style={styles.third}>
                <View style={styles.indiaicon}>
                  <Entypo
                    name="location"
                    size={18}
                    style={styles.n2}
                    color="blue"
                  />
                  <Text style={{marginLeft: 10, color: 'black'}}>Odisha </Text>
                </View>
                <View>
                  <Text style={styles.N2}>20 min ago </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.number}>
            <View style={styles.heart}>
              <Entypo name="heart-outlined" size={20} color="blue" />
              <Text style={styles.threethusend}>50M</Text>
            </View>
            <View style={styles.like}>
              <AntDesign name="like1" size={20} color="red" />
              <Text style={styles.threethusend}>1505K</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={25}
              color="black"
              style={styles.dot}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f9',
    flex: 1,
    marginHorizontal: 5,
  },
  firsticon: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 135,
  },
  headline: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 25,
  },

  logo: {
    width: 390,
    height: 350,
    marginHorizontal: 50,
    borderRadius: 20,
  },
  firstimg: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  secondimg: {
    // marginTop: 30,
    // marginRight: 20,
    // alignItems: 'center',
    // marginLeft: 15,
    // flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  logo1: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },

  third: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indiaicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  threethusend: {marginLeft: 8, color: 'black'},
  number: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
  },
  heart: {
    flexDirection: 'row',
    marginRight: 20,
  },
  like: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  dot: {
    marginLeft: 60,
    paddingLeft: 130,
  },
});
