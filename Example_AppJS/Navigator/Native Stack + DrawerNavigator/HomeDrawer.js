import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import FeedScreen from './FeedScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Messages" component={MessageScreen} />
    </Drawer.Navigator>
  );
}

export default HomeTabs;
