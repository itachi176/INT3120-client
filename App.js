/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screen/Login';
import BottomTabs from './src/components/BottomTab';
import Search from './src/screen/Search';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './src/screen/Profile';
import HomeStack from './src/routes/HomeStack';
import Register from './src/screen/Register';
const Stack = createStackNavigator();

const App = () => {
  //Hide splash screen on app load
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <BottomTabs /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
