import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import Swiper from "react-native-swiper";

const UserHomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={200}
          activeDotColor="#FF6347"
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/banner1.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/banner2.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/banner3.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/banner4.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/banners/banner5.jpg")}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate("UserCardListScreen", { category: "Peluquería" })
          }
        >
          <ImageBackground
            source={require("../assets/banners/Peluqueria.png")}
            resizeMode="center"
            style={styles.categoryIcon}
          />

          <Text style={styles.categoryBtnTxt}>Peluquería</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate("CardListScreen", { category: "barbershop" })
          }
        >
          <ImageBackground
            source={require("../assets/banners/Barberia.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Barbería</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Estetica.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Estética</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Manicuria.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Manicuría</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Pedicuria.png")}
            resizeMode="center"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Pedicuría</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Maquillaje.png")}
            resizeMode="center"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Maquillaje</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Depilacion.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Depilación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Cuerpo.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Cuerpo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <ImageBackground
            source={require("../assets/banners/Spa.png")}
            resizeMode="cover"
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryBtnTxt}>Spa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#ff2167",
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#ff2167",
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#ff2167",
    fontSize: 18,
    marginLeft: 0,
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
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
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
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
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
