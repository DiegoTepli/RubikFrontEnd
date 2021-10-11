import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
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
import useUsersByCategory from '../hooks/useUsersByCategory';

const CardListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [results, searchApi] = useUsersByCategory(category);

  const categories = ["Mayor popularidad", "Mayor puntaje", "Menor precio", "Día"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const searchUser = (textToSearch) => {
    alert(textToSearch);
  };

  const renderSelectedTab = () => {
      return (
        <View style={styles.container}>
          <FlatList
            data = {results}
            keyExtractor = {(result) => result.user._id}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      );
  };

  const renderItem = ({ item }) => {
    return (
      <UserCard
        itemData={item}
        onPress={() =>
          navigation.navigate("UserProfSelected", { userId: item.user._id })
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
  }
});
