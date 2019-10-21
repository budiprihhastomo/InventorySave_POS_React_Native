import React from 'react';
import {ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {View, Text, Icon} from 'native-base';
import {styles} from './DetailOrder.style';
import {BACKEND_API_URL} from 'react-native-dotenv';

// Import : Component
import DetailOrderCard from '../../Components/CardFoodItem/DetailOrder/DetailOrder';
import RelatedCard from '../../Components/CardFoodItem/RelatedOrder/RelatedOrder';

// Import : React-Redux
import {useSelector} from 'react-redux';

const DetailOrder = props => {
  const resProducts = useSelector(state => state.getProducts.productLists);
  const product_id = props.navigation.getParam('id');
  const getProduct = resProducts.find(a => a.product_id === product_id);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => props.navigation.navigation('Home')}>
          <Icon name="ios-arrow-back" style={styles.iconButton} />
        </TouchableOpacity>
        <ImageBackground
          source={{uri: `${BACKEND_API_URL}${getProduct.product_image}`}}
          style={styles.imageHeader}
        />
        <View style={{flex: 1, paddingTop: 210}}>
          <DetailOrderCard {...getProduct} />

          <Text style={[styles.titleSection, {marginLeft: 25}]}>Related</Text>
          <RelatedCard />
          <RelatedCard />
          <RelatedCard />
          <RelatedCard />
          <RelatedCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailOrder;
