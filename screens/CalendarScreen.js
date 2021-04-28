import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../consts/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CalendarPicker from 'react-native-calendar-picker';
import {schedule} from '../model/schedule';
import {useTheme} from '@react-navigation/native';
export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }


  
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const {navigation, position} = this.props

    const createCashOrCredit = () =>
    
    Alert.alert(
      
      "Método de pago",
      "Elegir el método de pago con el que desea abonar",
      [
        {
          text: "Efectivo",
          onPress: createTwoButtonAlert,
          style: "cancel"
        },
        { text: "Tarjeta de crédito", onPress: () => navigation.navigate('PaymentScreen') }
      ]
    );
    
    
    
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Confirmar turno",
      "¿Desea confirmar la reserva del turno?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
      
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center'}}>Seleccionar una fecha</Text>
       <View style={{marginTop: 30}}>
        <CalendarPicker
          
          onDateChange={this.onDateChange}
        />
      </View>
<View style={{position: 'absolute', marginTop: 370}}>
      <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginTop: 40}}>Seleccionar un horario</Text>

    <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
      <View style={{flexDirection: 'row', marginTop: 10, padding: 20, height: 90}}>
            
          
              <TouchableOpacity>
              <View style={{backgroundColor: 'green', flexDirection: 'row', padding: 10, borderRadius: 20, opacity: 0.7}}>
              <Text style={styles.category}>09:00</Text>
              </View> 
              </TouchableOpacity>
          
          
              <TouchableOpacity>
              <View style={{backgroundColor: 'green', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20, opacity: 0.7}}>
              <Text style={styles.category}>10:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'green', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>11:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'grey', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>12:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'grey', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>14:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'grey', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>15:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'grey', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>16:00</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style={{backgroundColor: 'grey', flexDirection: 'row', padding: 10, marginLeft: 20, borderRadius: 20}}>
              <Text style={styles.category}>17:00</Text>
              </View>
              </TouchableOpacity>
          
         
          </View>
          </ScrollView>

          <View style={styles.sectionReserve}>
        
        <TouchableOpacity
        onPress={createCashOrCredit}
                    style={styles.signIn}
                    
                >
        <LinearGradient
                    colors={['#ff2167', '#ff2167']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Reservar turno</Text>
                </LinearGradient>

                </TouchableOpacity>
                
                </View>
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  categories: {
    flexDirection: 'row',
    width: '30%',
    backgroundColor: '#ff2167',
    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    padding: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#ff2167',
    
    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    padding: 10,
    
  },
  category: {
    fontSize: 20,
    color: '#fff',
  },
  sectionReserve: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
    marginTop: 20
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