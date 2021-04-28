import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Content, List, ListItem, Header, Button, Icon, Item, Input /* All native-base components used in this file */ } from 'native-base';
import StarRating from './StarRating';

const CardServices = ({itemData, onPress}) => {
  
return (
 
  
    <TouchableOpacity onPress={onPress}>
     
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{itemData.category}</Text>
          <Text style={styles.cardDetails}>Servicio: {itemData.serviceCategory}</Text>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.cardDetails}>Precio: </Text>
          {itemData.serviceDiscount != null && (
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardDetailsPriceLineThrough}>${itemData.servicePrice}</Text>
            <Text style={styles.cardDetailsPriceDiscount}> $300</Text>
            </View>
          )}
          {itemData.serviceDiscount == null && (
            <View>
            <Text style={styles.cardDetails}>${itemData.servicePrice}</Text>
            </View>
          )}
            
          
          
          </View>
          

          
          </View>
       
    </TouchableOpacity>
  );
};

export default CardServices;

const styles = StyleSheet.create({
  card: {
    height: 100,
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
    fontSize: 20,
    color: '#ff2167'
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
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold'
  },
  cardDetailsPriceLineThrough: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  cardDetailsPriceDiscount: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    color: '#ff2167'
  }
});
