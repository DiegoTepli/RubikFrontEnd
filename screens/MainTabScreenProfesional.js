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
import ProfileScreenViewProfesional from './ProfileScreenViewProfesional';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';
import ProfileScreenServicesProfesional from './ProfileScreenServicesProfesional';
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
  <Tab.Navigator initialRouteName="Shifts" activeColor="#fff" barStyle={{ backgroundColor: '#ff2167' }}>
    
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
          headerRight: () => (
            <View style={{marginLeft: 10, marginBottom: 2, flexDirection: 'row'}}>
              <Icon.Button
                name="ios-eye"
                size={40}
                backgroundColor= '#ff2167'
                color= '#fff'
                
                onPress={() => navigation.navigate('ProfileScreenViewProfesional')}
              />
              <Icon.Button
                name="ios-add"
                size={40}
                backgroundColor= '#ff2167'
                color= '#fff'
                
                onPress={() => navigation.navigate('ProfileScreenServicesProfesional')}
              />
            </View>
          ),
        }}
      />
      <ProfileStackProfesional.Screen
        name="ProfileScreenViewProfesional"
        options={{
          title: 'View',
        }}
        component={ProfileScreenViewProfesional}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <ProfileStackProfesional.Screen
        name="ProfileScreenServicesProfesional"
        options={{
          title: 'View',
        }}
        component={ProfileScreenServicesProfesional}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
    </ProfileStackProfesional.Navigator>
  );
};


