import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{marginBottom: 30}}
          // onPress={
          // () =>
          // navigation.navigate("RestaurantDetail", {
          //   name: restaurant.name,
          //   image: restaurant.image_url,
          //   price: restaurant.price,
          //   reviews: restaurant.review_count,
          //   rating: restaurant.rating,
          //   categories: restaurant.categories,
          // })
          //  }
        >
          <View style={styles.container}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View style={styles.miniContainer}>
    <View>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>30-45 • min</Text>
    </View>
    <View style={styles.rating}>
      <Text style={{color: 'black'}}>{props.rating}</Text>
    </View>
  </View>
);
