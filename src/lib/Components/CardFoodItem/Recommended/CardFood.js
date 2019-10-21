import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {View, Text, Content} from 'native-base';
import {styles} from './CardFood.style.js';

const CardFood = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.navigation.navigate('DetailOrder', {...props})}>
      <Content style={styles.cardItem}>
        <View style={styles.cardHeader}>
          <ImageBackground
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
      </Content>
    </TouchableOpacity>
  );
};

export default CardFood;
