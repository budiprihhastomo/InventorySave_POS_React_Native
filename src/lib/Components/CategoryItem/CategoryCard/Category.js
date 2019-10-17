import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import {View, Text} from 'native-base';
import {styles} from './Category.style';

const CategoryCard = props => {
  return (
    <View style={styles.cardItem}>
      <ImageBackground
        source={{
          uri: props.image,
        }}
        style={{width: 170, height: 80}}
      />
      <View style={styles.cardGroupItem}>
        <Text style={styles.cardCategory}>{props.title}</Text>
      </View>
    </View>
  );
};

export default CategoryCard;
