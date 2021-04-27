import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Container, Content, List, ListItem, Header, Button, Icon, Item, Input /* All native-base components used in this file */ } from 'native-base';
import StarRating from './StarRating';
import {LinearGradient} from 'expo-linear-gradient';

const CardShiftProfesional = ({itemData, onPress}) => {
return (
 
  
    
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.imageUser}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        
        <View style={styles.cardInfo}>
         <View style={styles.cardTitleDiscount}>
          <Text style={styles.cardTitle}>{itemData.nameUser}</Text>
         </View>
         <Text style={styles.cardDetails}>{itemData.date} {itemData.hour}</Text>
          <Text style={styles.cardDetails}>Categoría: {itemData.category}</Text>
          <Text style={styles.cardDetails}>Servicio: {itemData.serviceCategory}</Text>
          <Text style={styles.cardDetails}>Precio: {itemData.servicePrice}</Text>
          <Text style={styles.cardDetails}>Dirección: {itemData.userAdress}</Text>
          <Text style={styles.cardDetails}>Barrio: {itemData.neighborhood}</Text>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Text style={styles.cardDetails}>Pago: {itemData.paymentMethod}</Text>
        <TouchableOpacity onPress={onPress}
                    style={styles.signIn}

                    
                >
        <LinearGradient
                    colors={['red', 'red']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Cancelar</Text>
                </LinearGradient>

                </TouchableOpacity>
                
             

          </View>
          
       
    

       </View>

       
      </View>
      
  );
};

export default CardShiftProfesional;

const styles = StyleSheet.create({
  card: {
    height: 170,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDiscount:{
    alignSelf: 'center',
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: 'red'
  },
  cardTitleDiscount:{
    flexDirection: 'row'
  },
  cardDetails: {
    fontSize: 14,
    color: '#444',
  },
  signIn: {
    marginTop: -25,
    marginLeft: 100,
    borderRadius: 0,
    width: '60%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    position: 'absolute'
},
textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
});
