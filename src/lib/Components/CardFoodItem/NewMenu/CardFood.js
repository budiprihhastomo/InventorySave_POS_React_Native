import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {View, Text} from 'native-base';
import {styles} from './CardFood.style.js';

const WIDTH_DEVICE = Dimensions.get('window').width;
const CardFood = props => {
  return (
    <View style={styles.cardItem}>
      <ImageBackground
        source={{
          uri: props.image,
        }}
        style={{width: WIDTH_DEVICE - 45, height: 180}}
      />
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupItem}>
          <Text style={styles.cardTitle}>{props.title}</Text>
        </View>
        <View style={[styles.cardGroupItem]}>
          <Text style={styles.cardCategory}>{props.category}</Text>
          <Text style={styles.cardPrice}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardFood;
