import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
          source={require('../../assets/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/user-profile.jpg')}
            style={styles.backgroundImage}
          />
          <Text style={styles.name}>John Doe</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.price}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={styles.list}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomPart}>
        <BottomList
          name="share-social-outline"
          size={22}
          text="Tell a Friend"
        />
        <BottomList name="exit-outline" size={22} text="Sign Out" />
      </View>
    </View>
  );
};

export default CustomDrawer;

const BottomList = ({name, size, text}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={{paddingVertical: 5}}>
      <View style={styles.bottomView}>
        <Ionicons name={name} size={size} />
        <Text style={styles.share}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
