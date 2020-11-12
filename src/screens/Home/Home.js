import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

import data from '../../../data/test_data.json';
export const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigateToDetails(item)}
      style={styles.itemWrapper}>
      <View style={styles.leftWrapper}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/download.png')}
        />
      </View>
      <View style={styles.rightWrapper}>
        <Text style={styles.text}>{item.text}</Text>
      </View>

      {/*   <Image style={styles.image} source={{uri: item.image}} /> */}
    </TouchableOpacity>
  );

  const navigateToDetails = (data) => {
    navigation.navigate('Details', {data: data});
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={{position: 'absolute', bottom: 0}}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 50,
    flexWrap: 'wrap',
  },
  leftWrapper: {
    flex: 1,
  },
  rightWrapper: {
    flex: 2,
    marginLeft: 15,
  },
});
