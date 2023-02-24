import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import MenuStackNavigator from './MenuNavigator';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
        <Stack.Screen name="Menu" component={MenuStackNavigator} />
        {/* <Stack.Screen name="Menu" component={BottomTabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
