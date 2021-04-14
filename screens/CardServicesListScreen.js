
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Container, Content, List, ListItem, Header, Icon, Item, Input } from 'native-base';
import {beautyServices} from '../model/beautyServices';
import CardServices from '../components/CardServices';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../consts/colors';
let helperArray = require ('../model/data');

const CardServicesListScreen = ({navigation}) => {
  
    const renderItem = ({item}) => {
      
        return (
            <CardServices 
                itemData={item}
                onPress={()=> navigation.navigate('CalendarScreen', {itemData: item})}
            />
        );
        
    };
    
    return (
      
      <Container> 
       
      <View >
      <Text style={{fontSize:22, alignSelf:'center', marginTop: 10, fontWeight: 'bold', marginBottom: 10}}>Seleccionar una especialidad</Text>
      </View>

      <View style={styles.container}>
        <FlatList 
            data={beautyServices}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
      </Container>
    );
    
};

export default CardServicesListScreen;

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
