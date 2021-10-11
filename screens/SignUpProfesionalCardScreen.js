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
import CustomisableAlert from "react-native-customisable-alert";
import { showAlert } from "react-native-customisable-alert";
import {
  CreditCardInput,
} from "react-native-credit-card-input";

import useSavePayment from '../hooks/useSavePayment';

const SignUpProfesionalCardScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [payment, paymentApi] = useSavePayment();

  const [data, setData] = React.useState({
    number: 0,
    cvv: 0,
    expiry: ""
  });

  const change = (formData) => {
    console.log(JSON.stringify(formData, null, " "));
    setData({
      number: formData.values.number,
      expiry: formData.values.expiry,
      cvv: formData.values.cvc
    });

    console.log("tarjeta data");
    console.log(data);
  }

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
          marginTop: 50,
        }}
      >
        Por favor, completa los datos de tu tarjeta de crédito
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
        //onFocus={this._onFocus}
        onChange={(formData) => {
          console.log("cambiooo");
          console.log(formData);
          change(formData);
        }}
      />

      <View style={styles.sectionReserve}>
        <TouchableOpacity
          onPress={() => {
            paymentApi(data, userId);
            showAlert({
              title: "Registro exitoso!",
              message: "El registro se ha creado se manera exitosa!",
              alertType: 'success',
              onPress: () => navigation.navigate("SignInScreen")
            })

          }}
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
              Registrar Tarjeta
              </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <CustomisableAlert
        titleStyle={{
          fontSize: 18,
          fontWeight: "bold"
        }}
      />
    </View>
  );
};

export default SignUpProfesionalCardScreen;

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
