import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpClientScreen from './SignUpClientScreen';
import SignUpProfesionalScreen from './SignUpProfesionalScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpClientScreen" component={SignUpClientScreen}/>
        <RootStack.Screen name="SignUpProfesionalScreen" component={SignUpProfesionalScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;