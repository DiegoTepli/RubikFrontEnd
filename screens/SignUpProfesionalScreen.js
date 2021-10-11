import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import useSignUpProfessional from "../hooks/useSignUpProfessional";

const SignUpProfesionalScreen = ({ navigation }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const [newUser, newUserApi] = useSignUpProfessional();

  const PickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage1(result.uri);
    }
  };

  const PickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const { colors } = useTheme();

  const [data, setData] = React.useState({
    email: "",
    name: "",
    dni: "",
    cuit: "",
    state: "",
    city: "",
    neighborhood: "",
    address: "",
    phone: "",
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

  const handleEmail = (val) => {
    setData({
      ...data,
      email: val
    });
  };

  const handleName = (val) => {
    setData({
      ...data,
      name: val
    });
  };

  const handleDni = (val) => {
    setData({
      ...data,
      dni: val
    });
  };

  const handleCuit = (val) => {
    setData({
      ...data,
      cuit: val
    });
  };

  const handleState = (val) => {
    setData({
      ...data,
      state: val
    });
  };

  const handleCity = (val) => {
    setData({
      ...data,
      city: val
    });
  };

  const handleNeighborhood = (val) => {
    setData({
      ...data,
      neighborhood: val
    });
  };

  const handleAddress = (val) => {
    setData({
      ...data,
      address: val
    });
  };

  const handlePhone = (val) => {
    setData({
      ...data,
      phone: val
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ff2167" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Registro Usuario Profesional</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View style={styles.action}>
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
              onChangeText={(val) => handleEmail(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handleName(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handleDni(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
            <TextInput
              value="Provincia"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handleState(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
            <TextInput
              value="Ciudad"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handleCity(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handleNeighborhood(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handleAddress(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handlePhone(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
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
              onChangeText={(val) => handleCuit(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn"></Animatable.View>
            ) : null}
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Confirmar contraseña"
              placeholderTextColor="#666666"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <TouchableOpacity style={styles.panelButton} onPress={PickImage1}>
              <Text style={styles.panelButtonTitle}>
                Adjuntar constancia de inscripción impositiva
              </Text>
            </TouchableOpacity>
          </View>
          {image1 && (
            <Image
              source={{ uri: image1 }}
              style={{
                width: height_logo,
                height: height_logo,
                marginBottom: 30,
              }}
            />
          )}
          <View style={styles.action}>
            <TouchableOpacity style={styles.panelButton} onPress={PickImage2}>
              <Text style={styles.panelButtonTitle}>
                Adjuntar factura de algún servicio para constatar domicilio
              </Text>
              <StatusBar style="auto" />
            </TouchableOpacity>
          </View>

          {image2 && (
            <Image
              source={{ uri: image2 }}
              style={{
                width: height_logo,
                height: height_logo,
                marginBottom: 30,
              }}
            />
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                newUserApi(data);
                if (newUser) {
                  console.log("new useeer");
                  console.log(newUser);
                  navigation.navigate("SignUpProfesionalCardScreen", { userId: newUser.userData._id })
                }
              }}
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
                  Siguiente
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpProfesionalScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff2167",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 30,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    color: "#05375a",
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
  panelButton: {
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: "#ff2167",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 0 : -12,
  },
  panelButtonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
