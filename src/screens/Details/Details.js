import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles';
export const Details = ({route, navigation}) => {
  console.log(route.params);
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <Text>{'id :' + data.id}</Text>
      <Text>{'text : ' + data.text}</Text>
      <Text>{'image : ' + data.image}</Text>
    </View>
  );
};
