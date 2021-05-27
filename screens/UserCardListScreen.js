import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
} from "react-native";
import {
  Container,
  Icon,
  Item,
  Input,
} from "native-base";
import { data } from "../model/data";
import UserCard from "../components/UserCard";
import COLORS from "../consts/colors";
import { ScrollView } from "react-native-gesture-handler";
let helperArray = require("../model/data");
import { Picker } from "@react-native-picker/picker";

const CardListScreen = ({ navigation }) => {
  const categories = ["Mayor popularidad", "Mayor puntaje", "Menor precio", "Día"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState();
  const searchUser = (textToSearch) => {
    alert(textToSearch);
  };

  const renderSelectedTab = () => {
    if (selectedCategoryIndex === 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
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
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

    if (selectedCategoryIndex === 2) {
      return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

    if (selectedCategoryIndex === 3) {
      return (
        <View>
          <Modal visible={modalOpen} animationType="slide" transparent={true}>
            <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 180,
                  marginHorizontal: 50,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: 20,
                      color: "black",
                      marginLeft: 50,
                    }}
                  >
                    Día:
                  </Text>
                  <Picker
                    style={{
                      width: "50%",
                      alignSelf: "flex-end",
                      marginLeft: 29,
                      height: "54%",
                      transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                    }}
                    selectedValue={selectedDay}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedDay(itemValue)
                    }
                  >
                    <Picker.Item label="Lunes" value="monday" />
                    <Picker.Item label="Martes" value="tuesday" />
                    <Picker.Item label="Miercoles" value="wednesday" />
                    <Picker.Item label="Jueves" value="thursday" />
                    <Picker.Item label="Viernes" value="friday" />
                    <Picker.Item label="Sabado" value="saturday" />
                    <Picker.Item label="Domingo" value="sunday" />
                  </Picker>
                </View>

                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 30,
                    marginBottom: 20,
                  }}
                >
                  <TouchableOpacity
                    style={{ backgroundColor: "#ff2167", padding: 10 }}
                    onPress={() => setModalOpen(false)}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Aceptar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <UserCard
        itemData={item}
        onPress={() =>
          navigation.navigate("UserProfSelected", { itemData: item })
        }
      />
    );
  };

  return (
    <Container>
      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Buscar servicio"
          onChangeText={(text) => {
            searchUser(text);
          }}
        />
      </Item>

      <View style={styles.categoryListContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                setSelectedCategoryIndex(index);
                if (index == 3) {
                  setModalOpen(true);
                }
              }}
            >
              <View>
                <Text
                  style={{
                    ...styles.categoryListText,
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.rubik
                        : COLORS.grey,
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
        </ScrollView>
      </View>
      {renderSelectedTab()}
    </Container>
  );
};

export default CardListScreen;

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
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 20,
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
