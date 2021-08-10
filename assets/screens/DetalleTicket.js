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
import Styles from "../styles/detalleTicket";
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

    navigation.addListener('willFocus', () => {
      const id = navigation.getParam("id");
    });
    console.log(id)
    this.ticket(id);
    
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
        idTicket: id,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
     
        if (responseJsonFromServer.cod === 200) {
          this.setState({
            datos: responseJsonFromServer.response,
            datos2: responseJsonFromServer.response.productos,
            fontLoaded: true
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
            <Text style={Styles.txtBtn}>Detalle Ticket</Text>
            <View style={Styles.linea}></View>
          </View>

          <View style={Styles.contenedorP}>

            <View style={Styles.row}>
              <EvilIcons name="calendar" size={35} color="black" />
              <Text style={Styles.txtDesc}>
                Fecha: {this.state.datos.fechaCreado}
              </Text>
            </View>

            <View style={Styles.row}>
              <EvilIcons name="clock" size={35} color="black" />
              <Text style={Styles.txtDesc}>
                Hora: {this.state.datos.horaCreado}
              </Text>
            </View>
            <View style={Styles.row}>
              <AntDesign name="car" size={24} color="black" />
              <Text style={Styles.txtDesc}>
                Estado Ticket:
              </Text>
            </View>
            <View style={Styles.row}>

              <Text style={Styles.txtDescEstado}>
                {this.state.datos.descripcion}
              </Text>
            </View>
            <View style={Styles.row1}>
              <AntDesign name="shoppingcart" size={30} color="black" />
              <Text style={Styles.txtDesc}>Productos :</Text>
            </View>

            {this.state.datos2.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={Styles.txtDesc}>
                    <View style={Styles.row}>

                      <Text style={Styles.txtDesc1}>
                        <AntDesign name="right" size={24} color="black" />
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

            <View style={Styles.cont2}>
              {
                this.state.datos.cuponIngresado ?
                  (
                    <View>
                      <View style={Styles.row}>
                        <Ionicons
                          name="ios-pricetags-outline"
                          size={24}
                          color="black"
                        />
                        <Text style={Styles.txtDesc}>
                          Total: ${this.state.datos.total.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                      </View>
                      <View style={Styles.row}>
                        <Entypo name="price-tag" size={24} color="black" />
                        <Text style={Styles.txtDesc}>
                          Descuento: ${this.state.datos.descuento.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                      </View>
                    </View>
                  )
                  :
                  (
                    <View></View>
                  )
              }
              <View style={Styles.row}>
                <Ionicons
                  name="ios-pricetags-outline"
                  size={24}
                  color="black"
                />
                <Text style={Styles.txtDesc}>
                  Total a pagar: ${this.state.datos.totalFinal.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </Text>
              </View>
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
      return <View><Text>Cargando...</Text></View>;
    }
  }
}
