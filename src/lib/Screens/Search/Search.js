import React from 'react';
import {
  View,
  Icon,
  Button,
  Title,
  Container,
  Left,
  Right,
  Item,
  Input,
  Header,
  Body,
} from 'native-base';
import {ScrollView} from 'react-native';
import {styles} from './Search.style';

// Import : Card
import CardItem from '../../Components/CardFoodItem/SearchPage/CardFood';

const Search = props => {
  return (
    <Container>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Button
            transparent
            onPress={() => props.navigation.navigate('HomeScreen')}>
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
            />
            <Icon name="ios-search" />
          </Item>
        </View>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <CardItem
            title="Nasi Goreng"
            category="Food"
            price="Rp. 12.000.00"
            desc="Lorem ipsum is text beta tester to try content management when build a component."
            image="https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg"
          />
          <CardItem
            title="Nasi Goreng"
            category="Food"
            price="Rp. 12.000.00"
            desc="Lorem ipsum is text beta tester to try content management when build a component."
            image="https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg"
          />
          <CardItem
            title="Nasi Goreng"
            category="Food"
            price="Rp. 12.000.00"
            desc="Lorem ipsum is text beta tester to try content management when build a component."
            image="https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg"
          />
          <CardItem
            title="Nasi Goreng"
            category="Food"
            price="Rp. 12.000.00"
            desc="Lorem ipsum is text beta tester to try content management when build a component."
            image="https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg"
          />
          <CardItem
            title="Nasi Goreng"
            category="Food"
            price="Rp. 12.000.00"
            desc="Lorem ipsum is text beta tester to try content management when build a component."
            image="https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-nasi-goreng-seafood-620x440.jpg"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Search;
