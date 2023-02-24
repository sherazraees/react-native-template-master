import {View, Button, Text} from 'react-native';
import React from 'react';

const Registration = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{margin: 20}}>I am in Registration Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
    </View>
  );
};

export default Registration;
