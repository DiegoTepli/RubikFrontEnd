import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  Container,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../consts/colors";
let helperArray = require("../model/data");
import {
  CreditCardInput,
} from "react-native-credit-card-input";
const PaymentScreenProfesional = ({ navigation }) => {
  const categories = ["Tarjeta de crédito", "Tarjeta de débito"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const searchUser = (textToSearch) => {
    alert(textToSearch);
  };
  const _onFocus = (field) => console.log("focusing", field);

  const _onChange = (formData) =>
    console.log(JSON.stringify(formData, null, " "));
  const renderSelectedTab = () => {
    if (selectedCategoryIndex === 0) {
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
            onFocus={_onFocus}
            onChange={_onChange}
          />

          <View style={styles.sectionReserve}>
            <TouchableOpacity style={styles.signIn}>
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
                  Guardar datos
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (selectedCategoryIndex === 1) {
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
            onFocus={_onFocus}
            onChange={_onChange}
          />

          <View style={styles.sectionReserve}>
            <TouchableOpacity style={styles.signIn}>
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
                  Guardar datos
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <Container>
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index ? COLORS.rubik : COLORS.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.rubik,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {renderSelectedTab()}
    </Container>
  );
};

export default PaymentScreenProfesional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "white",
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
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
