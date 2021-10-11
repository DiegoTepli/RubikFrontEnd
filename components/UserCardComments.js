import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import Moment from 'moment';

const UserCardComments = ({ itemData, onPress }) => {

  console.log("item dataaaa");
  console.log(itemData);

  const dateMoment = Moment().locale('es').startOf('day').from(itemData.createdAt);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={require("../assets/banners/banner2.jpg")}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.cardTitleDiscount}>
            <Text style={styles.cardTitle}>{itemData.user.name}</Text>
          </View>
          <AirbnbRating
            count={5}
            size={18}
            showRating={false}
            defaultRating={itemData.rating}
            isDisabled={true}
            starContainerStyle={{ alignSelf: "flex-start", marginLeft: -3 }}
          />
          <Text style={styles.cardDetails}>{dateMoment}</Text>
          <Text style={styles.cardDetails}>{itemData.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCardComments;

const styles = StyleSheet.create({
  card: {
    height: 100,
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
    height: "80%",
    width: "60%",
    marginTop: 10,
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
    fontSize: 16,
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
    fontSize: 14,
    color: "#444",
    fontWeight: "bold",
  },
});
