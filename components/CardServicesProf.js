import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Modal,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";

const CardServicesProf = ({ itemData, onPress }) => {
  const { colors } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedLanguage2, setSelectedLanguage2] = useState();
  const [selectedLanguage3, setSelectedLanguage3] = useState();
  const [selectedLanguage4, setSelectedLanguage4] = useState();
  const [modalOpenInfo, setModalOpenInfo] = useState(false);
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const [text, onChangeText] = React.useState("Useless Text");
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Eliminar servicio",
      "¿Desea eliminar el servicio seleccionado?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  return (
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{itemData.category}</Text>

      {itemData.serviceDiscount != null && (
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardDetails}>
              Servicio: {itemData.serviceCategory}
            </Text>
            <Text style={styles.cardDiscount}>
              {" "}
              {itemData.serviceDiscount}% OFF
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardDetails}>Precio: </Text>
            <Text style={styles.cardDetailsPriceLineThrough}>
              ${itemData.servicePrice}
            </Text>
            <Text style={styles.cardDetailsPriceDiscount}>
              {" "}
              $
              {(itemData.servicePrice * (100 - itemData.serviceDiscount)) /
                100}{" "}
            </Text>
          </View>
        </View>
      )}
      {itemData.serviceDiscount == null && (
        <View>
          <Text style={styles.cardDetails}>
            Servicio: {itemData.serviceCategory}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardDetails}>Precio: </Text>
            <Text style={styles.cardDetails}>${itemData.servicePrice}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={styles.signInPencil}
      >
        <ImageBackground
          source={require("../assets/pencil.jpg")}
          resizeMode="center"
          style={styles.categoryIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={createTwoButtonAlert} style={styles.signIn}>
        <ImageBackground
          source={require("../assets/delete.png")}
          resizeMode="center"
          style={styles.categoryIcon}
        />
      </TouchableOpacity>

      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 180,
              marginHorizontal: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Categoría:
              </Text>
              <Picker
                style={{
                  width: "38%",
                  alignSelf: "flex-end",
                  marginLeft: 29,
                  height: "54%",
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label={itemData.category} />
              </Picker>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Servicio:
              </Text>
              <View style={{ width: "60%" }}>
                <SafeAreaView style={styles.inputModal}>
                  <TextInput
                    editable={false}
                    value={itemData.serviceCategory}
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                  />
                </SafeAreaView>
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn"></Animatable.View>
                ) : null}
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Precio:
              </Text>
              <View style={{ width: "25%", marginLeft: 15 }}>
                <SafeAreaView style={styles.inputModal}>
                  <TextInput
                    defaultValue={itemData.servicePrice.toString()}
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                  />
                </SafeAreaView>
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn"></Animatable.View>
                ) : null}
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Descuento:
              </Text>
              <Picker
                style={{
                  width: "26%",
                  alignSelf: "flex-end",
                  marginLeft: 18,
                  height: "54%",
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }}
                selectedValue={selectedLanguage2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage2(itemValue)
                }
              >
                <Picker.Item label="0%" value="0" />
                <Picker.Item label="5%" value="5" />
                <Picker.Item label="10%" value="10" />
                <Picker.Item label="15%" value="15" />
                <Picker.Item label="20%" value="20" />
                <Picker.Item label="25%" value="25" />
                <Picker.Item label="30%" value="30" />
                <Picker.Item label="35%" value="35" />
                <Picker.Item label="40%" value="40" />
                <Picker.Item label="45%" value="45" />
                <Picker.Item label="50%" value="50" />
                <Picker.Item label="55%" value="55" />
                <Picker.Item label="60%" value="60" />
                <Picker.Item label="65%" value="65" />
                <Picker.Item label="70%" value="70" />
                <Picker.Item label="75%" value="75" />
                <Picker.Item label="80%" value="80" />
                <Picker.Item label="85%" value="85" />
                <Picker.Item label="90%" value="90" />
                <Picker.Item label="95%" value="95" />
              </Picker>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 30,
                }}
              >
                Modo:
              </Text>
              <Picker
                style={{
                  width: "35%",
                  alignSelf: "flex-end",
                  marginLeft: 65,
                  height: "54%",
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }}
                selectedValue={selectedLanguage3}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage3(itemValue)
                }
              >
                <Picker.Item label="Gratuito" value="free" />
                <Picker.Item label="Clásico" value="classic" />
                <Picker.Item label="Premium" value="premium" />
              </Picker>

              <TouchableOpacity
                onPress={() => {
                  setModalOpenInfo(true);
                  setModalOpen(false);
                }}
              >
                <ImageBackground
                  source={require("../assets/moreInfo.png")}
                  resizeMode="center"
                  style={styles.categoryIcon2}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  color: "black",
                  marginLeft: 27,
                }}
              >
                {" "}
                Pago:
              </Text>
              <Picker
                style={{
                  width: "51%",
                  alignSelf: "flex-end",
                  marginLeft: 72,
                  height: "54%",
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }}
                selectedValue={selectedLanguage4}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage4(itemValue)
                }
              >
                <Picker.Item label="Tarjeta de crédito" value="creditCard" />
                <Picker.Item label="Tarjeta de débito" value="debitCard" />
              </Picker>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 30,
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "#ff2167", padding: 10 }}
                onPress={() => setModalOpen(false)}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "#ff2167", padding: 10 }}
                onPress={() => setModalOpen(false)}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  Aceptar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalOpenInfo} animationType="slide" transparent={true}>
        <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 130,
              marginHorizontal: 20,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10,
                  color: "black",
                }}
              >
                Gratuito:{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginTop: 10,
                  paddingRight: 100,
                  marginLeft: 10,
                }}
              >
                Cargo mensual por alta del servicio: $0,00. Posicionamiento:
                Bajo
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10,
                  color: "black",
                }}
              >
                Clásico:{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginTop: 10,
                  paddingRight: 89,
                  marginLeft: 17,
                }}
              >
                Cargo mensual por alta del servicio: $100,00. Posicionamiento:
                Alto
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  margin: 10,
                  color: "black",
                }}
              >
                Premium:{" "}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  marginTop: 10,
                  paddingRight: 110,
                }}
              >
                Cargo mensual por alta del servicio: $200,00. Posicionamiento:
                Máximo
              </Text>
            </View>

            <View
              style={{
                width: "30%",
                alignSelf: "center",
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "#ff2167", padding: 10 }}
                onPress={() => {
                  setModalOpenInfo(false);
                  setModalOpen(true);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    alignSelf: "center",
                  }}
                >
                  Regresar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CardServicesProf;

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ff2167",
  },
  cardDiscount: {
    alignSelf: "center",
    marginHorizontal: 5,
    fontWeight: "bold",
    color: "red",
  },
  cardTitleDiscount: {
    flexDirection: "row",
  },
  cardDetails: {
    fontSize: 16,
    color: "#444",
    fontWeight: "bold",
  },
  cardDetailsPriceLineThrough: {
    fontSize: 16,
    color: "#444",
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  cardDetailsPriceDiscount: {
    fontSize: 16,
    color: "#444",
    fontWeight: "bold",
    color: "#ff2167",
  },
  signIn: {
    marginTop: -30,
    borderRadius: 0,
    alignSelf: "flex-end",
  },
  signInPencil: {
    marginTop: -32,
    borderRadius: 0,
    alignSelf: "flex-end",
    marginRight: 60,
  },
  categoryIcon: {
    borderWidth: 0,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  categoryIcon2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginTop: 24,
    marginLeft: 7,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    color: "#05375a",
    fontSize: 20,
  },
  inputModal: {
    height: 30,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 37,
    marginTop: 18,
  },
});
