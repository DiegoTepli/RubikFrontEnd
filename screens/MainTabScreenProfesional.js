import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ShiftScreen from './ShiftScreen';
import ShiftScreenProfesional from './ShiftScreenProfesional';
import FavouriteScreen from './FavouriteScreen';
import ProfileScreen from './ProfileScreen';
import ProfileScreenProfesional from './ProfileScreenProfesional';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import CardServicesListScreen from './CardServicesListScreen';
import CalendarScreen from './CalendarScreen';
import PaymentScreen from './PaymentScreen';

const HomeStack = createStackNavigator();
const ShiftStackProfesional = createStackNavigator();
const ProfileStackProfesional = createStackNavigator();
const FavouriteStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreenProfesional = () => (
  <Tab.Navigator initialRouteName="Shifts" activeColor="#fff">
    
    <Tab.Screen
      name="Shifts"
      component={ShiftStackScreenProfesional}
      options={{
        tabBarLabel: 'Turnos',
        tabBarColor: '#ff2167',
        tabBarIcon: ({color}) => (
          <Icon name="calendar" color={color} size={26} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreenProfesional}
      options={{
        tabBarLabel: 'Perfil',
        tabBarColor: '#ff2167',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

export default MainTabScreenProfesional;


const ShiftStackScreenProfesional = ({navigation}) => {
  const {colors} = useTheme();
  return(
  <ShiftStackProfesional.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#ff2167',
      shadowColor: colors.background, // iOS
      elevation: 0, // Android
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 25
    },
    }}>
    <ShiftStackProfesional.Screen
      name="Shifts"
      component={ShiftScreenProfesional}
      options={{
        title: 'Turnos'
      }}
    />
  </ShiftStackProfesional.Navigator>
)};



const ProfileStackScreenProfesional = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStackProfesional.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff2167',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 25,
        marginRight: 50
      },
      }}>
      <ProfileStackProfesional.Screen
        name="Perfil"
        component={ProfileScreenProfesional}
        options={{
          title: 'Perfil',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-settings"
                size={25}
                backgroundColor= '#ff2167'
                color= '#fff'
                
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          
        }}
      />
      <ProfileStackProfesional.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStackProfesional.Navigator>
  );
};


