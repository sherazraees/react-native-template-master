import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = props => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={20} style={styles.icon} />
      <Text
        style={{
          color: 'black',
        }}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
