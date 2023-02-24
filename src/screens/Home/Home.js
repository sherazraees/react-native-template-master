import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {Categories, Header, SearchBar, RestaurantItem} from '../../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation, user}) => {
  console.log(user);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <Header />
        <SearchBar />
      </View>
      <Categories />
      <ScrollView showsVerticalScrollIndicator>
        <RestaurantItem />
      </ScrollView>
      <View style={{width: '100%', height: 60}}>
        <BottomTabs />
      </View>
    </SafeAreaView>
  );
};

function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
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
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{
          marginBottom: 3,
          alignSelf: 'center',
          color: 'black',
        }}
      />
      <Text
        style={{
          color: 'black',
        }}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
