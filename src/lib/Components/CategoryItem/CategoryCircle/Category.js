import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Icon, Text} from 'native-base';
import {styles} from './Category.style.js';

const Category = props => {
  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity>
        <View
          style={[styles.categoryGroupIcon, {backgroundColor: props.color}]}>
          <Icon name={props.icon} style={styles.categoryIcon} />
        </View>
      </TouchableOpacity>
      <Text style={styles.categoryText}>{props.category}</Text>
    </View>
  );
};

export default Category;
