import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import ShiftScreenProfesional from "./ShiftScreenProfesional";
import ProfileScreenProfesional from "./ProfileScreenProfesional";
import ProfileScreenViewProfesional from "./ProfileScreenViewProfesional";
import ProfileScreenServicesProfesional from "./ProfileScreenServicesProfesional";
import { useTheme } from "react-native-paper";
import { View } from "react-native-animatable";
import PaymentScreenProfesional from "./PaymentScreenProfesional";
const HomeStack = createStackNavigator();
const ShiftStackProfesional = createStackNavigator();
const ProfileStackProfesional = createStackNavigator();
const FavouriteStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreenProfesional = () => (
  <Tab.Navigator
    initialRouteName="Shifts"
    activeColor="#fff"
    barStyle={{ backgroundColor: "#ff2167" }}
  >
    <Tab.Screen
      name="Shifts"
      component={ShiftStackScreenProfesional}
      options={{
        tabBarLabel: "Turnos",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="calendar" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileStackScreenProfesional}
      options={{
        tabBarLabel: "Perfil",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreenProfesional;

const ShiftStackScreenProfesional = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ShiftStackProfesional.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff2167",
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 25,
        },
      }}
    >
      <ShiftStackProfesional.Screen
        name="Shifts"
        component={ShiftScreenProfesional}
        options={{
          title: "Turnos",
        }}
      />
    </ShiftStackProfesional.Navigator>
  );
};

const ProfileStackScreenProfesional = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStackProfesional.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff2167",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 25,
        },
      }}
    >
      <ProfileStackProfesional.Screen
        name="Perfil"
        component={ProfileScreenProfesional}
        options={{
          title: "Perfil",
          headerLeft: () => (
            <View
              style={{ marginLeft: 10, marginBottom: 2, flexDirection: "row" }}
            >
              <Icon.Button
                name="ios-settings"
                size={25}
                backgroundColor="#ff2167"
                color="#fff"
                onPress={() => navigation.openDrawer()}
              />
              <Icon.Button
                name="ios-card"
                size={27}
                backgroundColor="#ff2167"
                color="#fff"
                onPress={() => navigation.navigate("PaymentScreenProfesional")}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{ marginLeft: 10, marginBottom: 2, flexDirection: "row" }}
            >
              <Icon.Button
                name="ios-eye"
                size={40}
                backgroundColor="#ff2167"
                color="#fff"
                onPress={() =>
                  navigation.navigate("ProfileScreenViewProfesional")
                }
              />
              <Icon.Button
                name="ios-add"
                size={40}
                backgroundColor="#ff2167"
                color="#fff"
                onPress={() =>
                  navigation.navigate("ProfileScreenServicesProfesional")
                }
              />
            </View>
          ),
        }}
      />
      <ProfileStackProfesional.Screen
        name="ProfileScreenViewProfesional"
        options={{
          title: "View",
        }}
        component={ProfileScreenViewProfesional}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfileStackProfesional.Screen
        name="ProfileScreenServicesProfesional"
        options={{
          title: "View",
        }}
        component={ProfileScreenServicesProfesional}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfileStackProfesional.Screen
        name="PaymentScreenProfesional"
        options={{
          title: "View",
        }}
        component={PaymentScreenProfesional}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
    </ProfileStackProfesional.Navigator>
  );
};
