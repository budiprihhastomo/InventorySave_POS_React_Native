import React, {useEffect} from 'react';
import {StatusBar, ScrollView, FlatList} from 'react-native';

// Import : Native-Base
import {Container, Text, Icon, View, Item, Input} from 'native-base';
// Custom Style
import {styles} from './Home.style';
import Rupiah from 'rupiah-format';
import {BACKEND_API_URL} from 'react-native-dotenv';

// REVIEW
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../../public/redux/actions/Products';
import {getCategories} from '../../../public/redux/actions/Categories';

// Import : Componenet
import CategoryCircleItem from '../../Components/CategoryItem/CategoryCircle/Category';
import CategoryCardItem from '../../Components/CategoryItem/CategoryCard/Category';
import RecommendedCardItem from '../../Components/CardFoodItem/Recommended/CardFood';
import NewMenuCardItem from '../../Components/CardFoodItem/NewMenu/CardFood';

const categoryData = [
  {
    category: 'Food',
    icon: 'nutrition',
    color: '#0be881',
  },
  {
    category: 'Beverage',
    icon: 'wine',
    color: '#4bcffa',
  },
  {
    category: 'Fast Food',
    icon: 'pizza',
    color: '#ffc048',
  },
  {
    category: 'Appetizers',
    icon: 'md-ice-cream',
    color: '#ff5e57',
  },
  {
    category: 'Dessert',
    icon: 'md-egg',
    color: '#575fcf',
  },
];
const recommendedData = [
  {
    title: 'Sate Ayam',
    category: 'Food',
    image: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
    price: 'Rp. 20.000.00',
  },
  {
    title: 'Beef Cheesee Burger',
    category: 'Food',
    image:
      'https://www.thespruceeats.com/thmb/xZU__qGyThuUAq8mTosBd1cmLAs=/1333x1000/smart/filters:no_upscale()/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg',
    price: 'Rp. 30.000.00',
  },
];

const colorCard = [
  '#27ae60',
  '#2980b9',
  '#e74c3c',
  '#d35400',
  '#2c3e50',
  '#16a085',
  '#95a5a6',
  '#34495e',
  '#e67e22e67e22',
];

const Home = props => {
  const resProducts = useSelector(state => state.Products.productLists);
  const resCategories = useSelector(state => state.Categories.categoryLists);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const fetchProducts = await getProducts();
    dispatch(fetchProducts);
    const fetchCategories = await getCategories();
    dispatch(fetchCategories);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.section_half}>
              <Icon
                name="menu"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 25,
                  color: '#fff',
                }}
              />
              <Text style={styles.textWelcome}>Welcome Back!</Text>
              <Text style={styles.textIntro}>What you like?</Text>
              <Item regular style={styles.searchBarItem}>
                <Input
                  placeholder="Find your favorite food..."
                  placeholderTextColor="#95a5a6"
                  style={styles.searchBar}
                />
                <Icon name="ios-search" />
              </Item>
            </View>

            {/* Category Section */}
            <View style={styles.section_half}>
              <Text style={[styles.titleSection, {color: '#fff'}]}>
                Category
              </Text>
              <View style={styles.sectionItemHorizontal}>
                {categoryData.map(item => {
                  return (
                    <CategoryCircleItem
                      key={item.category}
                      category={item.category}
                      icon={item.icon}
                      color={item.color}
                    />
                  );
                })}
              </View>
            </View>
            {/* Category End */}
          </View>

          {/* Recommended Section */}
          <View style={styles.section_full}>
            <Text style={[styles.titleSection, {marginLeft: 25}]}>
              Recommended
            </Text>
            <View style={styles.sectionItemHorizontal}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={resProducts}
                renderItem={({item}) => (
                  <RecommendedCardItem
                    style={styles.recommendedItem}
                    title={item.product_name}
                    category={item.category_name}
                    price={Rupiah.convert(item.product_price)}
                    image={`${BACKEND_API_URL}${item.product_image}`}
                  />
                )}
                keyExtractor={item => item.product_id}
              />
            </View>
          </View>
          {/* Recommended End */}

          {/* This Weeks Section */}
          <View style={styles.section_full}>
            <Text style={[styles.titleSection, {marginLeft: 25}]}>
              This Weeks
            </Text>
            <View style={styles.sectionItemVertical}>
              {recommendedData.map(item => {
                return (
                  <NewMenuCardItem
                    key={item.title}
                    style={styles.recommendedItem}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                  />
                );
              })}
            </View>
          </View>
          {/* This Weeks End */}

          {/* Categories Card */}
          <View style={styles.section_full}>
            <Text style={[styles.titleSection, {marginLeft: 25}]}>
              Food Categories
            </Text>
            <View style={styles.sectionItemVertical}>
              <FlatList
                numColumns={2}
                data={resCategories}
                renderItem={({item}) => (
                  <CategoryCardItem
                    style={{
                      backgroundColor:
                        colorCard[Math.floor(Math.random() * colorCard.length)],
                    }}
                    title={item.category_name}
                    image={item.image}
                  />
                )}
                keyExtractor={item => item.category_id}
              />
            </View>
          </View>
          {/* Categories Card End*/}
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
