import React, {useState, useEffect} from 'react';
import {View, Text, Button, Icon, Item, Input} from 'native-base';
import {styles} from './DetailOrder.style';
import Rupiah from 'rupiah-format';

// Import : React-Redux
import {useSelector, useDispatch} from 'react-redux';

const DetailOrder = props => {
  const resProducts = useSelector(state => state.manageProducts.orderLists);
  const [totalPrice, setTotalPrice] = useState(0);
  const getData = resProducts.find(
    item => item.product_id === props.product_id,
  );
  const objIndex = resProducts.findIndex(
    item => item.product_id === props.product_id,
  );
  const dispatch = useDispatch();

  const countTotalPrice = () => {
    let TotalPrice = 0;
    resProducts.forEach(item => {
      TotalPrice += item.product_price * item.qty;
    });
    setTotalPrice(TotalPrice);
    console.log(totalPrice);
  };

  const handleAddItemToCart = () => {
    console.log(getData);
    countTotalPrice();
    if (!getData) {
      return dispatch({
        type: 'SET_CART_ADD',
        payload: {
          product_id: props.product_id,
          product_price: props.product_price,
          qty: 1,
        },
      });
    } else if (resProducts[objIndex].qty < props.product_qty) {
      resProducts[objIndex].qty += 1;
      return dispatch({type: 'SET_CART_ADD_QTY', payload: resProducts});
    }
  };

  const handleRemItemToCart = () => {
    console.log(getData);
    if (getData && resProducts[objIndex].qty > 1) {
      resProducts[objIndex].qty -= 1;
      return dispatch({type: 'SET_CART_MIN_QTY', payload: resProducts});
    } else {
      resProducts.splice(objIndex, 1);
      return dispatch({type: 'DEL_CART_PRODUCT', payload: resProducts});
    }
  };

  return (
    <View style={styles.cardHeader}>
      <View style={styles.itemTop}>
        <Text style={styles.textTitle}>{props.product_name}</Text>
        <Text style={styles.textCategory}>{props.category_name}</Text>
      </View>
      <View style={styles.itemBottom}>
        <Text style={styles.textDesc}>{props.product_description}</Text>
      </View>
      <View style={styles.qtyGroup}>
        <View style={{flex: 1}}>
          <Text style={styles.textPrice}>
            {Rupiah.convert(props.product_price)}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button style={styles.btnQty} onPress={() => handleRemItemToCart()}>
            <Icon name="ios-remove" style={{fontSize: 12, color: '#0fbcf9'}} />
          </Button>
          <Item regular style={styles.inputQty}>
            <Input
              value={props.product_qty}
              disabled
              style={{textAlign: 'center'}}
            />
          </Item>
          <Button style={styles.btnQty} onPress={() => handleAddItemToCart()}>
            <Icon name="ios-add" style={{fontSize: 12, color: '#0fbcf9'}} />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DetailOrder;
