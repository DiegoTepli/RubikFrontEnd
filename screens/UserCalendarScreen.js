import React, { Component } from "react";
import Category from "react-native-category";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CalendarPicker from "react-native-calendar-picker";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStartDate: null,
      selectedScheduleIndex: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.data = [
      { id: 1, title: "08:00" },
      { id: 2, title: "09:00" },
      { id: 3, title: "10:00" },
      { id: 4, title: "11:00" },
      { id: 5, title: "12:00" },
      { id: 6, title: "14:00" },
      { id: 7, title: "15:00" },
      { id: 8, title: "16:00" },
      { id: 9, title: "17:00" },
    ];
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const { navigation, position } = this.props;

    const createCashOrCredit = () =>
      Alert.alert(
        "Método de pago",
        "Elegir el método de pago con el que desea abonar",
        [
          {
            text: "Tarjeta de crédito",
            onPress: () =>
              navigation.navigate("UserPaymentCreditScreen", {
                selectedScheduleIndex: this.state.selectedScheduleIndex,
              }),
          },
          {
            text: "Tarjeta de débito",
            onPress: () => navigation.navigate("UserPaymentDebitScreen"),
          },
        ]
      );

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 22, fontWeight: "bold", alignSelf: "center" }}>
          Seleccionar una fecha
        </Text>
        <View style={{ marginTop: 30 }}>
          <CalendarPicker onDateChange={this.onDateChange} />
        </View>
        <View style={{ position: "absolute", marginTop: 370 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              alignSelf: "center",
              marginTop: 40,
            }}
          >
            Seleccionar un horario
          </Text>
          <View style={{ marginTop: 10 }}>
            <Category
              data={this.data}
              itemSelected={(item) =>
                this.setState({ selectedScheduleIndex: item })
              }
              itemText={"title"} //set attribule of object show in item category
            />
          </View>
          <View style={styles.sectionReserve}>
            <TouchableOpacity
              onPress={createCashOrCredit}
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
                  Reservar turno
                </Text>
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
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  categories: {
    flexDirection: "row",
    width: "30%",
    backgroundColor: "#ff2167",
    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    padding: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#ff2167",

    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    padding: 10,
  },
  category: {
    fontSize: 20,
    color: "#fff",
  },
  sectionReserve: {
    paddingHorizontal: 20,
    paddingBottom: 60,

    borderBottomColor: "#cccccc",
    backgroundColor: "white",
    marginTop: 20,
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
  categoryListContainerDesc: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
