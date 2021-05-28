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

const ProfFAQScreen = ({ navigation }) => {

  return (
   <ScrollView>
    
        <Text style={{marginTop: 20, alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>Preguntas frecuentes</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>¿Puede el usuario cancelar un turno?</Text>
        <Text style={{marginHorizontal: 20, marginTop: 10, fontSize: 18}}>Una vez que el turno se haya registrado, no existe la posibilidad de que el usuario pueda cancelarlo. En este caso, deberá ponerse en contacto con el profesional para reprogramar la cita.</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>¿Que pasa si yo cancelo el turno?</Text>
        <Text style={{marginHorizontal: 20, marginTop: 10, fontSize: 18}}>En este caso, se le reintegrará la totalidad del dinero al cliente.</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>¿Que datos debo colocar en mi descripción?</Text>
        <Text style={{marginHorizontal: 20, marginTop: 10, fontSize: 18}}>Cualquier información que pueda ser de utilidad para el usuario. Ejemplo: Brindo servicios de Peluquería, barbería y estética. Me muevo únicamente por las zonas de Palermo y Recoleta.</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>¿Qué duración tiene la creación del servicio clásico/premium?</Text>
        <Text style={{marginHorizontal: 20, marginTop: 10, fontSize: 18}}>El pago del servicio clásico/premium se realiza de manera mensual y tiene una duración de 30 días desde el alta del servicio.</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold'}}>¿Puedo cambiar la modalidad de mi servicio una vez creado?</Text>
        <Text style={{marginHorizontal: 20, marginTop: 10, fontSize: 18}}>Si, aunque entrará en vigencia una vez finalizado el plan anterior.</Text>
        <Text style={{marginHorizontal: 20, marginTop: 20, fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Para cualquier consulta o reclamo, contactarse via mail a Rubik_Soporte@gmail.com</Text>
    
    </ScrollView>
  );
};

export default ProfFAQScreen;

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
