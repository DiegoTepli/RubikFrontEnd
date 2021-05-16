import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import ShiftScreen from './ShiftScreen';
import FavouriteScreen from './FavouriteScreen';
import ProfileScreen from './ProfileScreen';
import MapTestScreen from './MapTestScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';
import CardItemDetailsPrueba from './CardItemDetailsPrueba';
import CardServicesListScreen from './CardServicesListScreen';
import CalendarScreen from './CalendarScreen';
import PaymentCreditScreen from './PaymentCreditScreen';
import PaymentDebitScreen from './PaymentDebitScreen';

const HomeStack = createStackNavigator();
const ShiftStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavouriteStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Inicio',
        tabBarColor: '#ff2167',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Shifts"
      component={ShiftStackScreen}
      options={{
        tabBarLabel: 'Turnos',
        tabBarColor: '#ff2167',
        tabBarIcon: ({color}) => (
          <Icon name="calendar" color={color} size={26} />
        ),
      }}
    />

<Tab.Screen
      name="Favourites"
      component={FavouriteStackScreen}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarColor: '#ff2167',
        tabBarIcon: ({color}) => (
          <Icon name="heart" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
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

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Categorías'}}
      />
      <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          title: route.params.category,
          headerBackTitleVisible: false,
        })}
      />
      <HomeStack.Screen 
        name="CardItemDetails"
        component={CardItemDetails}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <HomeStack.Screen 
        name="CardServicesListScreen"
        component={CardServicesListScreen}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <HomeStack.Screen 
        name="CalendarScreen"
        component={CalendarScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <HomeStack.Screen 
        name="PaymentCreditScreen"
        component={PaymentCreditScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
      <HomeStack.Screen 
        name="PaymentDebitScreen"
        component={PaymentDebitScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff',
        })}
      />
    </HomeStack.Navigator>
    
    
  );
};

const ShiftStackScreen = ({navigation}) => (
  <ShiftStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff2167',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 25
      },
    }}>
    <ShiftStack.Screen
      name="Turnos"
      component={ShiftScreen}
      
    />
  </ShiftStack.Navigator>
);



const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name="Perfil"
        component={ProfileScreen}
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
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};


const FavouriteStackScreen = ({navigation}) => (
  <FavouriteStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ff2167',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 25
      },
    }}>
    <FavouriteStack.Screen
      name="Favoritos"
      component={FavouriteScreen}
      
    />
  </FavouriteStack.Navigator>
);