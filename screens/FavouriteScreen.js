
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Container, Content, List, ListItem, Header, Icon, Item, Input } from 'native-base';
import {data} from '../model/data';
import Card from '../components/Card';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../consts/colors';
let helperArray = require ('../model/data');

const FavouriteScreen = ({navigation}) => {
  const categories = ['Puntuación', 'Popularidad', 'Descuento'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const searchUser  = (textToSearch) => {
    alert(textToSearch);
  }
    const renderItem = ({item}) => {
      
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
            />
        );
        
    };
    
    return (
      
      <Container> 
      <View style={styles.container}>
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
      </Container>
    );
    
};

export default FavouriteScreen;

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
