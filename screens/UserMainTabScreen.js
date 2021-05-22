import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import UserHomeScreen from "./UserHomeScreen";
import UserShiftScreen from "./UserShiftScreen";

import UserProfileScreen from "./UserProfileScreen";

import { useTheme } from "react-native-paper";
import { View } from "react-native-animatable";
import UserCardListScreen from "./UserCardListScreen";
import UserProfSelected from "./UserProfSelected";
import UserCardServicesListScreen from "./UserCardServicesListScreen";
import UserCalendarScreen from "./UserCalendarScreen";
import UserPaymentCreditScreen from "./UserPaymentCreditScreen";
import UserPaymentDebitScreen from "./UserPaymentDebitScreen";
import UserSaveCardScreen from "./UserSaveCardScreen";
const UserHomeStack = createStackNavigator();
const UserShiftStack = createStackNavigator();
const UserProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const UserMainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="UserHome"
    activeColor="#fff"
    barStyle={{ backgroundColor: "#ff2167" }}
  >
    <Tab.Screen
      name="UserHome"
      component={UserHomeStackScreen}
      options={{
        tabBarLabel: "Inicio",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="UserShifts"
      component={UserShiftStackScreen}
      options={{
        tabBarLabel: "Turnos",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="calendar" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="UserProfile"
      component={UserProfileStackScreen}
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

export default UserMainTabScreen;

const UserHomeStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <UserHomeStack.Navigator
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
      <UserHomeStack.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          title: "Categorías",
        }}
      />
      <UserHomeStack.Screen
        name="UserCardListScreen"
        component={UserCardListScreen}
        options={({ route }) => ({
          title: route.params.category,
          headerBackTitleVisible: false,
        })}
      />
      <UserHomeStack.Screen
        name="UserProfSelected"
        component={UserProfSelected}
        options={({ route }) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <UserHomeStack.Screen
        name="UserCardServicesListScreen"
        component={UserCardServicesListScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <UserHomeStack.Screen
        name="UserCalendarScreen"
        component={UserCalendarScreen}
        options={({ route }) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <UserHomeStack.Screen
        name="UserPaymentCreditScreen"
        component={UserPaymentCreditScreen}
        options={({ route }) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <UserHomeStack.Screen
        name="UserPaymentDebitScreen"
        component={UserPaymentDebitScreen}
        options={({ route }) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
    </UserHomeStack.Navigator>
  );
};

const UserShiftStackScreen = ({ navigation }) => (
  <UserShiftStack.Navigator
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
    <UserShiftStack.Screen name="Turnos" component={UserShiftScreen} />
  </UserShiftStack.Navigator>
);

const UserProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <UserProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff2167",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: 25,
          marginRight: 50,
        },
      }}
    >
      <UserProfileStack.Screen
        name="Perfil"
        component={UserProfileScreen}
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
                onPress={() => navigation.navigate("UserSaveCardScreen")}
              />
            </View>
          ),
        }}
      />
      
      <UserProfileStack.Screen
        name="UserSaveCardScreen"
        options={{
          title: "Perfil",
        }}
        component={UserSaveCardScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
    </UserProfileStack.Navigator>
  );
};
