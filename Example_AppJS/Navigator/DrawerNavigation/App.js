import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'ホーム画面'}}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{title: 'ユーザ画面'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
