import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "../styles/bienvenido";
import * as Font from "expo-font";
import { AntDesign, EvilIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Menu extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      datos2: [],
      productos: [],
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../fonts/Montserrat-Bold.ttf"),
      "Montserrat-Light": require("../fonts/Montserrat-Light.ttf"),
    });

    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    this.setState({
      idUsuario: id,
    });
    await this.ticket();
    this.setState({ fontLoaded: true });
  }

  async ticket() {
    await fetch("http://54.207.110.207:443/api/detalleTicket", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        idTicket: 18,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        if (responseJsonFromServer.cod === 200) {
          this.setState({
            datos: responseJsonFromServer.response,
            datos2: responseJsonFromServer.response.productos,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={Styles.fondo}>
          <View style={Styles.cont1}>
            <Text style={Styles.txtBtn}>Bienvenido Juan</Text>
          </View>
          <View style={Styles.contenedorP}>
            <View style={Styles.row}>
              <Ionicons name="cart-outline" size={28} color="black" />
              <Text style={Styles.txtDesc}>Editar Perfil</Text>
              <AntDesign
                name="right"
                size={24}
                color="black"
                style={Styles.icono}
              />
            </View>
            
            <View style={Styles.row}>
              <Ionicons name="cart-outline" size={28} color="black" />
              <Text style={Styles.txtDesc}>Ver Mis Tickets</Text>
              <AntDesign
                name="right"
                size={24}
                color="black"
                style={Styles.icono}
              />
            </View>
          </View>

          <RBSheet
            ref={(ref) => {
              this.error = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "#ffff" },
              container: {
                elevation: 100,
                height: hp("40%"),
                width: wp("90%"),
                bottom: wp("65"),
                borderRadius: wp("5%"),
                alignSelf: "center",
                backgroundColor: "#fff",
                elevation: 10,
              },
            }}
          >
            <View style={Styles.row4}>
              <Text style={Styles.txt1}>¡Error!</Text>
              <Text style={Styles.txt2}>{this.state.mensaje}</Text>
              <Button
                iconLeft
                title={"Aceptar"}
                buttonStyle={Styles.buttonMap}
                titleStyle={{
                  color: "#ffff",
                  fontFamily: "Montserrat-Bold",
                  fontSize: wp("4.0%"),
                  marginLeft: wp("2"),
                }}
                onPress={(event) => {
                  this.error.close();
                }}
              />
            </View>
          </RBSheet>
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}
