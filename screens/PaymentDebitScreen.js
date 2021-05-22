import React, { Component } from "react";
import {
  View,
  UIManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
import { LinearGradient } from "expo-linear-gradient";
UIManager.setLayoutAnimationEnabledExperimental(true);

import {
  CreditCardInput,
} from "react-native-credit-card-input";

export default class App extends Component {
  _onFocus = (field) => console.log("focusing", field);

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  render() {
    const createTwoButtonAlert = () =>
      Alert.alert("Confirmar turno", "¿Desea confirmar la reserva del turno?", [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 40,
            margin: 10,
            marginTop: 20,
          }}
        >
          Por favor, completa los datos de tu tarjeta
        </Text>
        <CreditCardInput
          autoFocus
          requireName={true}
          requireCVC={true}
          requirePostalCode={true}
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          labelStyle={{ color: "black", fontSize: 12 }}
          inputStyle={{ color: "black", fontSize: 16 }}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />

        <View style={styles.sectionReserve}>
          <TouchableOpacity
            onPress={createTwoButtonAlert}
            style={styles.signIn}
          >
            <LinearGradient
              colors={["#ff2167", "#ff2167"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Realizar pago
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "white",
  },
  sectionReserve: {
    paddingHorizontal: 15,
    marginTop: 50,

    backgroundColor: "white",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
