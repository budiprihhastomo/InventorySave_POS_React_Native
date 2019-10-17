import React from 'react';
import {StatusBar, ScrollView} from 'react-native';

// Import : Native-Base
import {Container, Text, Icon, View, Item, Input} from 'native-base';
// Custom Style
import {styles} from './Home.style';

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
const categoriesData = [
  {
    category: 'Food',
    image: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
  },
  {
    category: 'Beverage',
    image: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
  },
  {
    category: 'Fast Food',
    image: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
  },
  {
    category: 'Appetizers',
    image: 'http://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
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

const Home = props => {
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.sectionItemHorizontal}>
                {recommendedData.map(item => {
                  return (
                    <RecommendedCardItem
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
            </ScrollView>
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
              <View style={styles.wrapLayout}>
                {categoriesData.map(item => {
                  return (
                    <CategoryCardItem
                      key={item.title}
                      style={styles.recommendedItem}
                      title={item.category}
                      image={item.image}
                    />
                  );
                })}
              </View>
            </View>
          </View>
          {/* Categories Card End*/}
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
