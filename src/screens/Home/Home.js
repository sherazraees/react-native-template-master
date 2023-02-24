import {View, Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {Header} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation, user}) => {
  console.log(user);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
