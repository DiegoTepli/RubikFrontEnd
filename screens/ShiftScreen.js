import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { Container, Content, List, ListItem, Header, Icon, Item, Input } from 'native-base';
import {data} from '../model/data';
import Card from '../components/Card';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../consts/colors';
let helperArray = require ('../model/data');

import {shift} from '../model/shift';
import CardShift from '../components/CardShift';

const ShiftScreen = ({navigation}) => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Confirmar cancelación del turno",
      "¿Desea cancelar el turno solicitado?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  const renderItem = ({item}) => {
      
    return (
        <CardShift 
            itemData={item}
            onPress={createTwoButtonAlert}
        />
    );

  };
    return (
      
      <Container> 
       
       <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#ff2167'}}>Próximos turnos</Text>

      <View style={styles.container}>
        <FlatList 
            data={shift}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>

      <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#ff2167'}}>Turnos pasados</Text>
      <View style={styles.container}>
        <FlatList 
            data={shift}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>

      </Container>
    );
};
export default ShiftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    alignSelf: 'center'
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  /*button: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
},
signIn: {
    width: '50%',
    height: 30,
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start'
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
}*/
});