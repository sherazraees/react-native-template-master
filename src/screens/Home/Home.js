import {View, Text, Button} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const Home = ({navigation, user}) => {
  console.log(user);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{margin: 20}}>I am in Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Setting')}
        title="Go to Setting"
      />
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
