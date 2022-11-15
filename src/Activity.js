import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const Activity = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={30} color={'black'} />
          <Text style={styles.TextContainer}> My Activity</Text>
          <Entypo name="plus" size={30} color={'black'} />
        </View>
        <View style={styles.image}>
          {/* <Image style={styles.picture} source={require('./kid.jpg')} /> */}
          <Image
            style={styles.picture}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2018/04/07/19/39/woman-3299379__340.jpg',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: 'https://img.freepik.com/premium-psd/white-t-shirt-mockup_213086-50.jpg?size=626&ext=jpg&ga=GA1.2.1410483746.1666004354&semt=sph',
            }}
            // source={{
            //   uri: 'https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?w=900&t=st=1667892033~exp=1667892633~hmac=50fc8bc8767c4f0f4499383645082707e79dd70a5bc5fd4560ed63eed780093d',
            // }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: 'https://media.istockphoto.com/id/695460988/photo/men-wearing-sneakers.jpg?b=1&s=170667a&w=0&k=20&c=Pl3A3lridaVhTEyksJxPSaOc8h1vuNTOvLUWkdn0Id4=',
            }}
          />
          <Image
            style={styles.picture}
            source={{
              uri: 'https://img.freepik.com/free-photo/men-clothes-set_1203-8045.jpg?size=626&ext=jpg&ga=GA1.2.1410483746.1666004354&semt=ais',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  TextContainer: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  image: {
    alignItems: 'center',
    marginRight: 6,
  },
  picture: {
    height: 280,
    width: 400,
    margin: 5,
    borderRadius: 10,
  },
});
