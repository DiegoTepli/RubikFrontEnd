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
  const categories = ['Próximos', 'Anteriores'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  
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
       
       <View style={styles.categoryListContainerDesc}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.rubik
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.rubik,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

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
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryListContainerDesc: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: 'space-between',
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