import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Text} from 'native-base';
import {styles} from './RelatedOrder.style';

const RelatedOrder = props => {
  return (
    <View style={styles.cardRecent}>
      <ImageBackground
        source={require('../../../../public/assets/background_login.jpg')}
        style={styles.imageCard}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.itemRight}>
          <Text style={styles.textTitle}>Nama Masakan</Text>
          <Text style={styles.textCategory}>Food</Text>
        </View>
        <View style={styles.itemRightBottom}>
          <Text style={styles.itemDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nibh ex, efficitur ut odio sit amet, maximus congue purus.
          </Text>
          <Text style={styles.textPrice}>Rp. 45.000.00</Text>
        </View>
      </View>
    </View>
  );
};

export default RelatedOrder;
