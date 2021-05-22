import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const Card = ({ itemData, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.cardTitleDiscount}>
            <Text style={styles.cardTitle}>{itemData.title}</Text>
            {itemData.discount != null && (
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.cardDiscount}>
                  Hasta {itemData.discount}% OFF
                </Text>
              </View>
            )}
            {itemData.discount == null && (
              <View style={{ flexDirection: "row" }}></View>
            )}
          </View>
          <View style={{ flexDirection: "row" }}>
            <AirbnbRating
              count={5}
              size={15}
              isDisabled={true}
              showRating={false}
              starContainerStyle={{ alignSelf: "flex-start", marginLeft: -3 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {itemData.rating}
            </Text>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>
              ({itemData.reviews})
            </Text>
          </View>

          <Text numberOfLines={2} style={styles.cardDetails}>
            {itemData.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

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
    fontSize: 18,
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
  },
});
