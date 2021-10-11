import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  Container,
  Icon,
  Item,
  Input,
} from "native-base";
//import { beautyServices } from "../model/beautyServices";
import UserCardServices from "../components/UserCardServices";
//let helperArray = require("../model/data");
import useServicesByUser from '../hooks/useServicesByUser';

const UserCardServicesListScreen = ({ navigation, route }) => {
  //const itemData = route.params.itemData;

  const { userId } = route.params;
  const [services] = useServicesByUser(userId);

  console.log("eeeeeeee");
  console.log(services);

  const searchUser = (textToSearch) => {
    alert(textToSearch);
  };
  const renderItem = ({ item }) => {
    console.log("serviceee");
    console.log(item);
    return (
      <UserCardServices
        itemData = {item}
        onPress={() => navigation.navigate("UserCalendarScreen", { itemData })}
      />
    );
  };

  return (
    <Container>
      <View>
        <Text
          style={{
            fontSize: 25,
            alignSelf: "center",
            marginTop: 15,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Seleccionar servicio
        </Text>
      </View>

      <Item>
        <Icon name="ios-search" />
        <Input
          placeholder="Buscar servicio"
          onChangeText={(text) => {
            searchUser(text);
          }}
        />
      </Item>

      <View style={styles.container}>
        <FlatList
          data = {services}
          keyExtractor = {(result) => result._id}
          renderItem = {renderItem}
        />
      </View>
    </Container>
  );
};

export default UserCardServicesListScreen;

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
