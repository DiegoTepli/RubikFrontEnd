import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";
import ProfFAQScreen from "./ProfFAQScreen";
import ProfShiftScreen from "./ProfShiftScreen";
import ProfProfileScreen from "./ProfProfileScreen";
import ProfProfileScreenView from "./ProfProfileScreenView";
import ProfProfileScreenServices from "./ProfProfileScreenServices";
import ProfPaymentCreditScreen from "./ProfPaymentCreditScreen";
import ProfPaymentDebitScreen from "./ProfPaymentDebitScreen";
import { useTheme } from "react-native-paper";
import { View } from "react-native-animatable";
import ProfSaveCardScreen from "./ProfSaveCardScreen";
const ProfShiftStack = createStackNavigator();
const ProfProfileStack = createStackNavigator();
const ProfFAQStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const ProfMainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="ProfShifts"
    activeColor="#fff"
    barStyle={{ backgroundColor: "#ff2167" }}
  >
    <Tab.Screen
      name="ProfShifts"
      component={ProfShiftStackScreen}
      options={{
        tabBarLabel: "Turnos",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="calendar" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="ProfProfile"
      component={ProfProfileStackScreen}
      options={{
        tabBarLabel: "Perfil",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfFAQ"
      component={ProfFAQStackScreen}
      options={{
        tabBarLabel: "FAQ",
        tabBarColor: "#ff2167",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-information-circle" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default ProfMainTabScreen;

const ProfShiftStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ProfShiftStack.Navigator
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
      <ProfShiftStack.Screen
        name="ProfShifts"
        component={ProfShiftScreen}
        options={{
          title: "Turnos",
        }}
      />
    </ProfShiftStack.Navigator>
  );
};

const ProfProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfProfileStack.Navigator
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
      <ProfProfileStack.Screen
        name="Perfil"
        component={ProfProfileScreen}
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
                onPress={() => navigation.navigate("ProfSaveCardScreen")}
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
                  navigation.navigate("ProfProfileScreenView")
                }
              />
              <Icon.Button
                name="ios-add"
                size={40}
                backgroundColor="#ff2167"
                color="#fff"
                onPress={() =>
                  navigation.navigate("ProfProfileScreenServices")
                }
              />
            </View>
          ),
        }}
      />
      <ProfProfileStack.Screen
        name="ProfProfileScreenView"
        options={{
          title: "View",
        }}
        component={ProfProfileScreenView}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfProfileStack.Screen
        name="ProfProfileScreenServices"
        options={{
          title: "View",
        }}
        component={ProfProfileScreenServices}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfProfileStack.Screen
        name="ProfSaveCardScreen"
        options={{
          title: "View",
        }}
        component={ProfSaveCardScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfProfileStack.Screen
        name="ProfPaymentCreditScreen"
        options={{
          title: "View",
        }}
        component={ProfPaymentCreditScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfProfileStack.Screen
        name="ProfPaymentDebitScreen"
        options={{
          title: "View",
        }}
        component={ProfPaymentDebitScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
      <ProfProfileStack.Screen
        name="ProfCardServices"
        options={{
          title: "View",
        }}
        component={ProfPaymentDebitScreen}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "#fff",
        })}
      />
    </ProfProfileStack.Navigator>
  );
};

const ProfFAQStackScreen = ({ navigation }) => (
  <ProfFAQStack.Navigator
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
    <ProfFAQStack.Screen name="FAQ" component={ProfFAQScreen} />
  </ProfFAQStack.Navigator>
);