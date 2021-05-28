import React, { useRef, useState } from "react";
import COLORS from "../consts/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import { data } from "../model/data";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
  TextInput,
  SafeAreaView,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { comments } from "../model/comments";
import ProfCardComments from "../components/ProfCardComments";
import { useEffect } from "react";
import { LogBox } from "react-native";
const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 350;

const ProfProfileScreenView = ({ route, navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const itemData = data[0];
  const navTitleView = useRef(null);
  const categories = ["Descripción", "Comentarios y puntación"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const renderItem = ({ item }) => {
    return <ProfCardComments itemData={item} />;
  };

  const renderSelectedTab = () => {
    if (selectedCategoryIndex === 0) {
      return (
        <ScrollView>
          <View style={{ marginTop: 0, marginLeft: 20, marginBottom: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nombre: </Text>
              <Text style={{ fontSize: 20 }}>{itemData.title}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Telefono:{" "}
              </Text>
              <Text style={{ fontSize: 20 }}>{itemData.profPhone}</Text>
            </View>

            <View style={styles.categories}>
              {itemData.categories.map((category, index) => (
                <View style={styles.categoryContainer} key={index}>
                  <FontAwesome name="tag" size={16} color="#fff" />
                  <Text style={styles.category}>{category}</Text>
                </View>
              ))}
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AirbnbRating
                count={5}
                size={20}
                isDisabled={true}
                showRating={false}
                starContainerStyle={{ alignSelf: "flex-start", marginLeft: -3 }}
              />

              <Text
                style={{
                  marginHorizontal: 4,
                  fontSize: 17,
                  alignItems: "center",
                  alignSelf: "center",
                  alignContent: "center",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {itemData.rating}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  alignItems: "center",
                  alignSelf: "center",
                  alignContent: "center",
                  marginLeft: 5,
                }}
              >
                ({itemData.reviews})
              </Text>
            </View>
          </View>
          <View style={[styles.sectionDesc, styles.sectionLarge]}>
            <Text style={styles.sectionContent}>{itemData.description}</Text>
          </View>
          <View style={styles.sectionReserve}>
            <TouchableOpacity
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
        </ScrollView>
      );
    }
    if (selectedCategoryIndex === 1) {
      return (
        <View style={styles.container}>
          <Modal visible={modalOpen} animationType="slide" transparent={true}>
            <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 180,
                  marginHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 20,
                    color: "#ff2167",
                  }}
                >
                  Evaluar profesional
                </Text>
                <SafeAreaView style={styles.input}>
                  <TextInput
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginLeft: 5,
                      marginTop: 5,
                    }}
                    multiline
                    placeholder="Deja tu comentario aquí"
                  />
                </SafeAreaView>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 10,
                    color: "#ff2167",
                  }}
                >
                  Deja tu rating
                </Text>

                <AirbnbRating
                  count={5}
                  defaultRating={0}
                  size={20}
                  showRating={false}
                  starContainerStyle={{ marginTop: 8 }}
                />

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
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Cancelar
                    </Text>
                  </TouchableOpacity>
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
                      Evaluar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={{ height: 330 }}>
        <Image source={itemData.image} style={styles.image} />
      </View>

      <View
        style={styles.section}
        onHide={() => navTitleView.current.fadeInUp(200)}
        onDisplay={() => navTitleView.current.fadeOut(100)}
      >
        <View style={styles.categoryListContainerComment}>
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
        </View>
      </View>

      {renderSelectedTab()}
    </View>
  );
};

export default ProfProfileScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 20,

    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionDesc: {
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
    marginBottom: -20,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionReserve: {
    padding: 20,
    paddingTop: 0,

    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  categories: {
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#ff2167",

    marginTop: 8,
    marginBottom: 8,
    marginRight: 10,
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 5,
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
    paddingRight: 4,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  sectionLarge: {
    minHeight: 50,
  },
  cardDiscount: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "red",
    marginHorizontal: 8,
    fontSize: 15,
  },
  categoryListContainerDesc: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryListContainerComment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    marginTop: 285,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDesc: {
    alignItems: "center",
    color: "#ff2167",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonComent: {
    alignItems: "center",
    color: "#ff2167",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 40,
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
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#ff2167",
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#ff2167",
    fontSize: 18,
    marginLeft: 0,
  },
  categoryBtn: {
    alignSelf: "flex-end",

    position: "absolute",
  },
  input: {
    height: 100,
    margin: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
});
