import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {styles} from './CardFood.style.js';

const AddCart = props => (
  <TouchableOpacity>
    <View style={styles.btnCart}>
      <Icon name="cart" style={{fontSize: 20, color: '#fff'}} />
    </View>
  </TouchableOpacity>
);

const CardFood = props => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.imageHeader}
        />
        <AddCart />
        <View style={styles.cardGroupItem}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardCategory}>{props.category}</Text>
            <Text style={styles.cardPrice}>{props.price}</Text>
          </View>
          <Text style={styles.cardTitle}>{props.title}</Text>
          <Text style={styles.cardDesc}>{props.desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardFood;
