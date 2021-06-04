import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomisableAlert from "react-native-customisable-alert";
import { showAlert, closeAlert } from "react-native-customisable-alert";
import {
  Container,
} from "native-base";
import COLORS from "../consts/colors";
let helperArray = require("../model/data");

import { shift } from "../model/shift";
import UserCardShift from "../components/UserCardShift";

const UserShiftScreen = ({ navigation }) => {
  const createTwoButtonAlert = () =>
  showAlert({
    title:"Cancelar turno!",
    message: "Está seguro que desea cancelar el turno?",
    alertType: 'warning',
    onPress: () => {
      showAlert({
        title:"Turno cancelado correctamente!",
        message: "El turno se ha cancelado correctamente!",
        alertType: 'success',
        onPress: () => console.log('Turno cancelado correctamente!')
      })
    }
  }
    );
  const categories = ["Próximos", "Históricos"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const renderSelectedTab = () => {
    if (selectedCategoryIndex === 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={shift}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

    if (selectedCategoryIndex === 1) {
      return (
        <View style={styles.container}>
          <FlatList
            data={shift}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return <UserCardShift itemData={item} onPress={createTwoButtonAlert} selectedCategoryIndex = {selectedCategoryIndex} />;
  };
  return (
    <Container>
      <CustomisableAlert
        titleStyle={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      />
      <View style={styles.categoryListContainerDesc}>
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
export default UserShiftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  categoryListText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryListContainerDesc: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 15,
    justifyContent: "space-between",
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
