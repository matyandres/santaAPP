import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Styles from "../styles/aDetalleTicket";
import * as Font from "expo-font";
import { AntDesign, EvilIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
var canasta = [];
var total3 = 0;

export default class Menu extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      datos2: [],
      productos: [],
      datos: []
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
    const id = navigation.getParam("id");
    const index = navigation.getParam("index");
    navigation.addListener('willFocus', () => {
      this.ticket(id);
      this.ticket1(id);
      const id = navigation.getParam("id");
      const index = navigation.getParam("index");
      this.setState({ fontLoaded: true });
    });
    await this.setState({
      idTicket: id,
      index: index
    });

    await this.ticket(id);
    await this.ticket1(id);
    this.setState({ fontLoaded: true });
  }

  async ticket(id) {

    await fetch("http://54.207.110.207:443/api/detalleTicket", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        idTicket: this.state.idTicket,
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
  async ticket1(id) {

    await fetch("http://54.207.110.207:443/api/detalleTicketID", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod === 200) {
          this.setState({
            datos2: responseJsonFromServer.response,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  cambiarEstado(estado) {
    this.setState({
      fontLoaded: false
    })
    fetch("http://54.207.110.207:443/api/estadoTicket", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        idTicket: this.state.idTicket,
        idEstadoTicket: estado
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        if (responseJsonFromServer.cod === 200) {
          
          if (this.state.index == 1) {
            this.props.navigation.navigate("TicketC")
          }
          else {
            if (this.state.index == 2) {

              this.props.navigation.navigate("TicketE")
            }
            else {
              if (this.state.index == 3) {
                this.props.navigation.navigate("TicketR")
              }
              else {
                this.props.navigation.navigate("TicketP")
              }

            }

          }
        } else {
          console.log(responseJsonFromServer)
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
            <Text style={Styles.txtBtn}>Datos Del Ticket</Text>
            <View style={Styles.linea}></View>
          </View>

          <View style={Styles.contenedorP}>
            <View style={Styles.row21111}>
              <Text style={Styles.txtDesc41}>Datos del cliente:</Text>
            </View>
            <View style={Styles.row2111}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                RUT: {this.state.datos2.rut} - {this.state.datos2.dv}
              </Text>
            </View>
            <View style={Styles.row22}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Email: {this.state.datos2.email}
              </Text>
            </View>
            <View style={Styles.row22}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Direccion: {this.state.datos2.direccion}
              </Text>
            </View>
            <View style={Styles.row22}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Nombre: {this.state.datos2.name}
              </Text>
            </View>
            <View style={Styles.row22}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Telefono: {this.state.datos2.telefono}
              </Text>
            </View>
            {this.state.index == 1 ? (
              <View style={Styles.row211}>
                <Text style={Styles.txtDesc41}>Ticket en confirmacion desde:</Text>
              </View>
            ) : (
              this.state.index == 2 ? (
                <View style={Styles.row211}>
                  <Text style={Styles.txtDesc41}>Ticket listo para entregar desde:</Text>
                </View>
              ) : (
                this.state.index == 3 ? (
                  <View style={Styles.row211}>
                    <Text style={Styles.txtDesc41}>Ticket en ruta desde:</Text>
                  </View>
                ) : (
                  <View style={Styles.row211}>
                    <Text style={Styles.txtDesc41}>Ticket en producción desde:</Text>
                  </View>
                )
              )
            )}
            <View style={Styles.row2111}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Hora: {this.state.datos2.horaCreada}
              </Text>
            </View>
            <View style={Styles.row22}>
              <AntDesign name="doubleright" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Fecha: {this.state.datos2.fechaCreada}
              </Text>
            </View>
            <View style={Styles.row21122}>
              <AntDesign name="shoppingcart" size={30} color="black" />
              <Text style={Styles.txtDesc41}>Productos :</Text>
            </View>
            <ScrollView
              style={Styles.scrollView}
            >
              {this.state.datos.productos.map((item, index) => {
                return (

                  <View key={index}>
                    <Text style={Styles.txtDesc}>
                      <View style={Styles.row}>

                        <AntDesign name="doubleright" size={24} color="black" />
                        <Text style={Styles.txtDesc1}>
                          {item.nombre.toUpperCase()} {" "}
                        </Text>
                        <Text style={Styles.txtDesc3}>
                          x
                        {item.cantidad}
                        </Text>
                      </View>
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
            <View style={Styles.row21}>
              {this.state.index == 1 ? (
                <TouchableOpacity
                  style={Styles.btnBotones}

                  onPress={(event) => { this.cambiarEstado(4) }}>

                  <Text style={Styles.txtDesc10}>Confirmar información</Text>

                </TouchableOpacity>
              ) : (
                this.state.index == 2 ? (
                  <TouchableOpacity
                    style={Styles.btnBotones}

                    onPress={(event) => { this.cambiarEstado(5) }}>

                    <Text style={Styles.txtDesc10}>Pedido en ruta</Text>

                  </TouchableOpacity>
                ) : (
                  this.state.index == 3 ?
                    (
                      <TouchableOpacity
                        style={Styles.btnBotones}

                        onPress={(event) => { this.cambiarEstado(1) }}>

                        <Text style={Styles.txtDesc10}>Pedido entregado</Text>

                      </TouchableOpacity>)
                    :
                    (
                      <TouchableOpacity
                        style={Styles.btnBotones}

                        onPress={(event) => { this.cambiarEstado(8) }}>

                        <Text style={Styles.txtDesc10}>Pedido realizado</Text>

                      </TouchableOpacity>)
                )
              )}
              <TouchableOpacity
                style={Styles.btnBotone1s}

                onPress={(event) => { this.cambiarEstado(7) }}>

                <Text style={Styles.txtDesc10}>Cancelar</Text>

              </TouchableOpacity>
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
          <RBSheet
            ref={(ref) => {
              this.direccion = ref;
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
            <View style={Styles.ro1}>
              <Text style={Styles.txtE}>Santa Agua</Text>
              <Text style={Styles.txt2}>
                Debes completar algunos datos para que puedas comprar.
              </Text>
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
                  this.direccion.close();
                  this.datos.open();
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
            <View style={Styles.ro1}>
              <Text style={Styles.txtE}>Santa Agua</Text>
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
          <RBSheet
            ref={(ref) => {
              this.datos = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "#ffff" },
              container: {
                //elevation: 100,
                height: hp("55%"),
                width: wp("90%"),
                marginBottom: wp("40"),
                borderRadius: wp("5%"),
                alignSelf: "center",
                backgroundColor: "#fff",
              },
            }}
          >
            <View style={Styles.ro1}>
              <Text style={Styles.txtE}>Santa Agua</Text>
              <Text style={Styles.txt2}>Ingrese sus datos:</Text>
              <TextInput
                style={Styles.input}
                placeholder={"Dirección"}
                maxLength={55}
                onChangeText={(texto) => this.setState({ direccion: texto })}
                placeholderTextColor={"#3bb9b2"}
                value={this.state.direccion}
                keyboardType="default"
                textContentType="none"
              />
              <TextInput
                style={Styles.input}
                placeholder={"Correo Electrónico"}
                maxLength={55}
                onChangeText={(texto) => this.setState({ correo: texto })}
                placeholderTextColor={"#3bb9b2"}
                value={this.state.correo}
                keyboardType="email-address"
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
                  this.guardar();
                }}
              />
            </View>
          </RBSheet>
        </View>
      );
    } else {
      return <View style={Styles.cargando1}><Text style={Styles.cargando}>Enviando...</Text></View>;
    }
  }
}
