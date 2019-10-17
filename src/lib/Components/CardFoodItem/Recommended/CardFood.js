import React from 'react';
import {Image} from 'react-native';
import {View, Text} from 'native-base';
import {styles} from './CardFood.style.js';

const CardFood = props => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{width: 250, height: 135}}
        />
      </View>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroupItem}>
          <Text style={styles.cardTitle}>{props.title}</Text>
          <Text style={styles.cardCategory}>{props.category}</Text>
        </View>
        <View style={[styles.cardGroupItem, styles.cardPriceItem]}>
          <Text style={styles.cardPrice}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardFood;
