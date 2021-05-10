import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 
const items = [{
    id: '1',
    name: '07:00'
  }, {
    id: '2',
    name: '07:30'
  }, {
    id: '3',
    name: '08:00'
  }, {
    id: '4',
    name: '08:30'
  }, {
    id: '5',
    name: '09:00'
  }, {
    id: '6',
    name: '09:30'
  }, {
    id: '7',
    name: '10:00'
  }, {
    id: '8',
    name: '10:30'
  }, {
    id: '9',
    name: '11:00'
  }, {
    id: '10',
    name: '11:30'
  }, {
    id: '11',
    name: '12:00'
  }, {
    id: '12',
    name: '12:30'
  }, {
    id: '13',
    name: '13:00'
  }, {
    id: '14',
    name: '13:30'
  }, {
    id: '15',
    name: '14:00'
  }, {
    id: '16',
    name: '14:30'
  }, {
    id: '17',
    name: '15:00'
  }, {
    id: '18',
    name: '15:30'
  }, {
    id: '19',
    name: '16:00'
  }, {
    id: '20',
    name: '16:30'
  }, {
    id: '21',
    name: '17:00'
  }, {
    id: '22',
    name: '17:30'
  }, {
    id: '23',
    name: '18:00'
  }, {
    id: '24',
    name: '18:30'
  }, {
    id: '25',
    name: '19:00'
  }, {
    id: '26',
    name: '19:30'
  }, {
    id: '27',
    name: '20:00'
  }
];
 
export default class ProfileScreenServicesProfesional2 extends Component {
 
  state = {
    selectedItems : []
  };
 
  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
 
  render() {
    const { selectedItems } = this.state;
 
    return (
       <SafeAreaView style = {{}}>
           <View style = {{backgroundColor: 'white',padding: 10, paddingTop: 30}}>
                <Text style = {{padding: 8,fontSize: 20,textAlign: 'center',fontWeight: 'bold'}}>Lunes</Text>
                <MultiSelect
               
                width= '50%'
                hideTags
                items={items}
                uniqueKey="id"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Seleccionar"
                onChangeInput={ (text)=> console.log(text)}
                altFontFamily="normal"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#ff2167"
                selectedItemIconColor="#ff2167"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
              />
           </View>

       </SafeAreaView> 
     
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        width: '70%'
    },
    titleText: {
        padding: 8,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headingText: {
        padding: 15,
    },
});