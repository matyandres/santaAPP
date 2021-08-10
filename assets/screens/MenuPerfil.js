import React, { Component } from "react";
import { View, Text, TextInput, Image, Touchable } from "react-native";
import Styles from "../styles/bienvenido";
import * as Font from "expo-font";
import { AntDesign, Feather, Ionicons, Fontisto } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class Menu extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      datos: [],
      nuevaContrasena: '',
      confirmarContraseña: '',
      antiguaContrasena: ''
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
    await fetch("http://54.207.110.207:443/api/ticketAll", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: 33
        // id: global.datosUsuario.id
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod === 200) {
          this.setState({
            datos: responseJsonFromServer.response,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  editarContraseña() {

    if (this.state.nuevaContrasena != this.state.confirmarContraseña) {
      this.setState({
        mensaje: 'Las contraseñas no coinciden',
        titulo: '¡Error!'
      })
      this.error.open();
      return;
    }
    if (this.state.confirmarContraseña == "") {
      this.setState({
        mensaje: 'Confirmar contraseña vacia',
        titulo: '¡Error!'
      })
      this.error.open();
      return;
    }
    if (this.state.nuevaContrasena == "") {
      this.setState({
        mensaje: 'nueva contraseña vacia',
        titulo: '¡Error!'
      })
      this.error.open();
      return;
    }
    if (this.state.antiguaContrasena == "") {
      this.setState({
        mensaje: 'Antigua contraseña vacia',
        titulo: '¡Error!'
      })
      this.error.open();
      return;
    }

    fetch("http://54.207.110.207:443/api/cambiarContraeña", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: global.datosUsuario.id,
        contraseñaAntigua: this.state.antiguaContrasena,
        nuevaContraseña: this.state.nuevaContrasena,
        confirmarContraseña: this.state.confirmarContraseña
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod === 200) {
          this.setState({
            mensaje: responseJsonFromServer.mensaje,
            titulo: 'Exito!'
          })
          this.error.open();
          this.editarPerfil.close();
        } else {
          this.setState({
            mensaje: responseJsonFromServer.mensaje,
            titulo: 'ERROR!'
          })
          this.error.open();
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
            <Text style={Styles.txtBtn21}>Bienvenido</Text>
            <View style={Styles.linea}></View>
          </View>
          <View style={Styles.contenedorP}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>

            <View style={Styles.cont1}>
              <Text style={Styles.txtBtn}>{global.datosUsuario.name}</Text>
            </View>
            <View style={Styles.cont12}>
              <Text style={Styles.txtBtn1}>Nombre de usuario:</Text>
              <Text style={Styles.txtBtn}> {global.datosUsuario.username}</Text>
            </View>
            <View style={Styles.cont12}>
              <Text style={Styles.txtBtn1}>Código referencia:</Text>
              <Text style={Styles.txtBtn}> {global.datosUsuario.codigoReferencia}</Text>
            </View>
            <View style={Styles.cont12}>
              <Text style={Styles.txtBtn1}>Región:</Text>
              <Text style={Styles.txtBtn}> {global.datosUsuario.region}</Text>
            </View>
            <View style={Styles.cont12}>
              <Text style={Styles.txtBtn1}>Comuna:</Text>
              <Text style={Styles.txtBtn}> {global.datosUsuario.comuna}</Text>
            </View>
            <View style={Styles.cont12}>
              <Text style={Styles.txtBtn1}>Dirección:</Text>
              <Text style={Styles.txtBtn}> {global.datosUsuario.direccion}</Text>
            </View>


            {global.datosUsuario.id_perfilUsuario == 1 || global.datosUsuario.id_perfilUsuario == 4 ? (
              <View style={Styles.btnBOT1}>
                <TouchableOpacity
                  style={Styles.row112}
                  onPress={(event) => {
                    this.editarPerfil.open();
                  }}
                >
                  <AntDesign name="user" size={24} color="black" />
                  <Text style={Styles.txtDesc}>Editar Contraseña</Text>
                  <AntDesign
                    name="right"
                    size={24}
                    color="black"
                    style={Styles.icono1}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.row112}
                  onPress={(event) => {
                    this.props.navigation.navigate("Tickets")
                  }}
                >
                  <Fontisto name="ticket-alt" size={24} color="black" />
                  <Text style={Styles.txtDesc}>Ver Mis Tickets</Text>
                  <AntDesign
                    name="right"
                    size={24}
                    color="black"
                    style={Styles.icono1}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.row112}
                  onPress={(event) => {
                    this.props.navigation.navigate("MenuAdministrativo", { index: 1 })
                  }}
                >
                  <Fontisto name="ticket-alt" size={24} color="black" />
                  <Text style={Styles.txtDesc}>Menu Administrativo</Text>
                  <AntDesign
                    name="right"
                    size={24}
                    color="black"
                    style={Styles.icono1}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.row511} onPress={(event) => {
                  this.props.navigation.navigate("Login")
                }}>
                  <Feather name="log-in" size={24} color="white" />
                  <Text style={Styles.txtDesc1}>Cerrar Sesión</Text>
                  <AntDesign
                    name="right"
                    size={24}
                    color="white"
                    style={Styles.icono}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              global.datosUsuario.id_perfilUsuario == 1 ? (
                <View style={Styles.btnBOT1}>
                  <TouchableOpacity
                    style={Styles.row112}
                    onPress={(event) => {
                      this.editarPerfil.open();
                    }}
                  >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={Styles.txtDesc}>Editar Contraseña</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.row112}
                    onPress={(event) => {
                      this.props.navigation.navigate("Tickets")
                    }}
                  >
                    <Fontisto name="ticket-alt" size={24} color="black" />
                    <Text style={Styles.txtDesc}>Ver Mis Tickets</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.row112}
                    onPress={(event) => {
                      this.props.navigation.navigate("MenuAdministrativo", { index: 2 })
                    }}
                  >
                    <Fontisto name="ticket-alt" size={24} color="black" />
                    <Text style={Styles.txtDesc}>Menu Administrativo</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.row511} onPress={(event) => {
                    this.props.navigation.navigate("Login")
                  }}>
                    <Feather name="log-in" size={24} color="white" />
                    <Text style={Styles.txtDesc1}>Cerrar Sesión</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="white"
                      style={Styles.icono}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={Styles.btnBOT}>
                  <TouchableOpacity
                    style={Styles.row}
                    onPress={(event) => {
                      this.editarPerfil.open();
                    }}
                  >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={Styles.txtDesc}>Editar Contraseña</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.row}
                    onPress={(event) => {
                      this.props.navigation.navigate("Tickets")
                    }}
                  >
                    <Fontisto name="ticket-alt" size={24} color="black" />
                    <Text style={Styles.txtDesc}>Ver Mis Tickets</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.row51} onPress={(event) => {
                    this.props.navigation.navigate("Login")
                  }}>
                    <Feather name="log-in" size={24} color="white" />
                    <Text style={Styles.txtDesc1}>Cerrar Sesión</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="white"
                      style={Styles.icono}
                    />
                  </TouchableOpacity>
                </View>
              )

            )}

          </View>
          <RBSheet
            ref={(ref) => {
              this.editarPerfil = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "#ffff" },
              container: {
                height: hp("70%"),
                width: wp("90%"),
                marginTop: wp("45"),
                bottom: wp("40"),
                borderRadius: wp("5%"),
                alignSelf: "center",
                backgroundColor: "#fff",
                elevation: 10,
              },
            }}
          >
            <View style={Styles.cont}>
              <Text style={Styles.txtBtn}>Editar Contraseña</Text>
              <TextInput
                style={Styles.input}
                placeholder={"Contraseña Antigua"}
                maxLength={10}
                secureTextEntry={true}
                onChangeText={(texto) =>
                  this.setState({ antiguaContrasena: texto })
                }
                placeholderTextColor={"#3bb9b2"}
                value={this.state.antiguaContrasena}
                keyboardType="default"
                textContentType="none"
              />
              <TextInput
                style={Styles.input}
                placeholder={"Contraseña Nueva"}
                maxLength={10}
                secureTextEntry={true}
                onChangeText={(texto) =>
                  this.setState({ nuevaContrasena: texto })
                }
                placeholderTextColor={"#3bb9b2"}
                value={this.state.nuevaContrasena}
                keyboardType="default"
                textContentType="none"
              />
              <TextInput
                style={Styles.input}
                placeholder={"Confirmar Contraseña"}
                maxLength={10}
                secureTextEntry={true}
                onChangeText={(texto) =>
                  this.setState({ confirmarContraseña: texto })
                }
                placeholderTextColor={"#3bb9b2"}
                value={this.state.confirmarContraseña}
                keyboardType="default"
                textContentType="none"
              />
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
                  this.editarContraseña();

                }}
              />
              <Button
                iconLeft
                title={"Cerrar"}
                buttonStyle={Styles.buttonMap}
                titleStyle={{
                  color: "#ffff",
                  fontFamily: "Montserrat-Bold",
                  fontSize: wp("4.0%"),
                  marginLeft: wp("2"),
                }}
                onPress={(event) => {
                  this.editarPerfil.close();
                }}
              />
            </View>
          </RBSheet>


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
              <Text style={Styles.txt1}>{this.state.titulo}</Text>
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
