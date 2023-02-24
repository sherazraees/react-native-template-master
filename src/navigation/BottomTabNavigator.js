import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Setting} from '../screens';

const Tab = createBottomTabNavigator();

export default TabNavigator = props => {
  const hide = props.routeName != 'Profile';
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        // ------- Use this code to hide the tab bar
        // options={{
        //   headerShown: false,
        //   tabBarStyle: {display: hide ? 'none' : 'flex'},
        // }}
      />
    </Tab.Navigator>
  );
};
