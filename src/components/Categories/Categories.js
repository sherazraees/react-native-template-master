import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {items} from '../../utils/data';
import styles from './styles';

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
