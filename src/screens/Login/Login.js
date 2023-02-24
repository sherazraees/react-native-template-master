import {View, Button, Text} from 'react-native';
import React from 'react';

function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{margin: 20}}>This is the Login Screen</Text>
      <Button onPress={() => navigation.navigate('Menu')} title="Go to Home" />
    </View>
  );
}

export default Login;
