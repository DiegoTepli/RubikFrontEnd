import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import InitScreen from "./InitScreen";
import SignInScreen from "./SignInScreen";
import SignUpClientScreen from "./SignUpClientScreen";
import SignUpProfesionalScreen from "./SignUpProfesionalScreen";
import SignUpProfesionalCardScreen from "./SignUpProfesionalCardScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="InitScreen" component={InitScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen
      name="SignUpClientScreen"
      component={SignUpClientScreen}
    />
    <RootStack.Screen
      name="SignUpProfesionalScreen"
      component={SignUpProfesionalScreen}
    />
     <RootStack.Screen
      name="SignUpProfesionalCardScreen"
      component={SignUpProfesionalCardScreen}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
