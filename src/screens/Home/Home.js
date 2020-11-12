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
import {styles} from './styles';
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
