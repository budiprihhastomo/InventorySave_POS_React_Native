import React, {useState} from 'react';
import {
  View,
  Icon,
  Button,
  Title,
  Container,
  Item,
  Input,
  Text,
} from 'native-base';
import {FlatList, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Search.style';
import {getProductsByName} from '../../../public/redux/actions/Products';
import Rupiah from 'rupiah-format';
import {BACKEND_API_URL} from 'react-native-dotenv';

// Import : Card
import CardItem from '../../Components/CardFoodItem/SearchPage/CardFood';

const Search = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const resProducts = useSelector(
    state => state.getProducts.productFilterLists,
  );

  const getFilterData = async () => {
    const fetchProducts = await getProductsByName(search);
    dispatch(fetchProducts);
  };

  const backHome = () => {
    if (resProducts.length > 0) {
      setSearch('');
      return dispatch({type: 'DELETE_PRODUCTS_FILTER'});
    } else {
      props.navigation.navigate('Home');
    }
  };

  const contentFilter = () => {
    if (resProducts.length > 0) {
      return (
        <FlatList
          data={resProducts}
          renderItem={({item}) => (
            <CardItem
              title={item.product_name}
              category={item.category_name}
              price={Rupiah.convert(item.product_price)}
              desc={item.product_description}
              image={`${BACKEND_API_URL}${item.product_image}`}
            />
          )}
          keyExtractor={item => item.product_id}
        />
      );
    } else {
      return (
        <View style={styles.emptyFilter}>
          <ImageBackground
            source={require('../../../public/assets/login_screen.png')}
            style={{width: '100%', height: 200}}
          />
          <View style={styles.textGroup}>
            <Text style={styles.textNotFound}>Find your favorite food!</Text>
            <Text style={styles.textSub}>
              You can find any food in here, Let's Go Find!
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <Container>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Button transparent onPress={() => backHome()}>
            <Icon name="arrow-back" style={{color: '#000'}} />
          </Button>
          <View style={{flex: 1, alignSelf: 'center', right: 15}}>
            <Title style={styles.titleText}>Find Products</Title>
          </View>
        </View>
        <View style={styles.container}>
          <Item regular style={styles.searchBarItem}>
            <Input
              placeholder="Find your favorite food..."
              placeholderTextColor="#95a5a6"
              style={styles.searchBar}
              autoFocus={true}
              onChangeText={val => setSearch(val)}
              onSubmitEditing={() => getFilterData()}
              value={search}
            />
            <Icon name="ios-search" />
          </Item>
        </View>
      </View>
      {contentFilter()}
    </Container>
  );
};

export default Search;
