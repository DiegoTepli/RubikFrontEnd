import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useTheme,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import CustomisableAlert from "react-native-customisable-alert";
import { showAlert } from "react-native-customisable-alert";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const ProfProfileScreen = () => {
  const [image, setImage] = useState("file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.0.14-RubikFront/ImagePicker/dfbbc5a4-2013-456f-a825-1f854d06644b.png");
  const { colors } = useTheme();

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Cargar foto</Text>
        <Text style={styles.panelSubtitle}>Elegir foto de perfil</Text>
      </View>

      <TouchableOpacity style={styles.panelButton} onPress={PickImage}>
        <Text style={styles.panelButtonTitle}>Elegir de la librería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <CustomisableAlert
        titleStyle={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      />
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={false}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{uri: image}}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 50 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#ff2167"
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      alignSelf: "flex-end",
                      marginTop: 100,
                      borderRadius: 15,
                      backgroundColor: "#fff",
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>
            Diego Teplitzky
          </Text>
        </View>
      </Animated.View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>Nombre completo</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Nombre completo"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>DNI</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="DNI"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Ciudad</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                value="CABA"
                editable={false}
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Barrio</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Barrio"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Domicilio</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Domicilio"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Número de contacto</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Número de contacto"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>CBU</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="CBU"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>CUIT</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="CUIT"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <Text style={styles.text_footer}>Banco</Text>
          <View style={styles.action}>
            <SafeAreaView style={styles.input}>
              <TextInput
                placeholder="Banco"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
            </SafeAreaView>
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>
        </ScrollView>
      </Animatable.View>

      <View style={styles.sectionReserve}>
      <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            showAlert({
              title: "Datos guardados",
              message: "Datos guardados exitosamente!",
              alertType: "success",
              onPress: () => console.log("Datos guardados!"),
            });
          }}
        >
          <LinearGradient colors={["#ff2167", "#ff2167"]} style={styles.signIn}>
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
};

export default ProfProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ff2167",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#ff2167",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },

  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  bottomDrawerSection: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    color: "#05375a",
    fontSize: 20,
  },
  text_footer: {
    color: "#ff2167",
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sectionReserve: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
    marginTop: 30,
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
});
