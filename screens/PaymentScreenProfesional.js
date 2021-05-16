import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useEffect } from 'react';
import {LogBox} from 'react-native';
import Category2 from 'react-native-category2';
LogBox.ignoreAllLogs();
import {LinearGradient} from 'expo-linear-gradient';
UIManager.setLayoutAnimationEnabledExperimental(true);

import{ CreditCardInput, LiteCreditCardInput  } from 'react-native-credit-card-input';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {id: 1, title: 'Tarjeta de crédito'},
      {id: 2, title: 'Tarjeta de débito'},
      
    ];
  }
  _onFocus = field => console.log('focusing', field)
  _itemChoose(item) {
    alert(item.title);
  }

  _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
  render() {
    const save = () =>
    Alert.alert(
      
      "Datos guardados correctamente",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
      
      <View style={styles.container}>
        <View style={{ marginTop: 90}}>
        <Category2
  data={this.data}    
  itemSelected={(item) => this._itemChoose(item)}
  itemText={'title'}  //set attribule of object show in item category
/>
</View>
        <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginBottom: 40, margin: 10, marginTop: 20}}>Por favor, completa los datos de tu tarjeta</Text>
        <CreditCardInput
          autoFocus
          requireName={true}
          requireCVC={true}
          requirePostalCode={true}
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          labelStyle={{color: 'black', fontSize: 12}}
          inputStyle={{color: 'black', fontSize: 16}}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />

<View style={styles.sectionReserve}>
        
        <TouchableOpacity onPress={save}
        
                    style={styles.signIn}
                    
                >
        <LinearGradient
                    colors={['#ff2167', '#ff2167']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Guardar datos</Text>
                </LinearGradient>

                </TouchableOpacity>
                
                </View>



      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
  sectionReserve: {
    paddingHorizontal: 15,
    marginTop: 50,
    
    backgroundColor: 'white',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 20,
    fontWeight: 'bold'
},
});