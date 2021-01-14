import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InputContent from '../pages/InputContent';
import ViewContent from '../pages/ViewContent';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
  <NavStack.Navigator
    screenOptions={{
      headerShown: true,
    }}
    initialRouteName="ViewContent">
    {/* <NavStack.Screen name="ListBoards" component={ListBoards} options={{ title: 'Overview' }}/> */}
    <NavStack.Screen
      name="InputContent"
      component={InputContent}
      options={{ title: 'Add New Content' }}
    />
    <NavStack.Screen
      name="ViewContent"
      component={ViewContent}
      options={{ title: 'Content List' }}
    />
  </NavStack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
);

export default Navigation;