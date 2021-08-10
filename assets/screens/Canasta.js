import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Styles from "../styles/canasta";
import * as Font from "expo-font";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import { TouchableNativeFeedbackBase } from "react-native";
export default class Menu extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      newCliente: false,
      oldCliente: false,
      codigoUsuario: "",
      producto: [],
      cupones: [],
      total: global.precioGlobal,
      desactivarCupon: true,
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
    const productos = navigation.getParam("productos", 0);
    const total3 = navigation.getParam("total3", 0);
    /* await this.setState({
      producto: productos,
      total: total3,
    }); */
    this.cupones();
   
    this.setState({ fontLoaded: true });
    
    /* this.exito.open(); */
  }
  cupones() {
    fetch("http://54.207.110.207:443/api/getCuponesId", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: idUsuario,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        if (responseJsonFromServer.cod === 200) {
          if (responseJsonFromServer.response.length != 0) {
            this.setState({
              cupones: responseJsonFromServer.response,
              muestra: 1,
            });
          } else {
            this.setState({
              muestra: 0,
            });
          }
        } else {
          //  this.props.navigation.navigate("Menu");
          this.setState({ mensaje: mensaje });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  aplicarCupon(valorCupon, idCupon) {
    var porcentaje = valorCupon / 100;
    var descuento = porcentaje * global.precioGlobal;
    
    var des = global.precioGlobal - descuento

    this.setState({
      total:  des,
      desactivarCupon: false,
      idCupon: idCupon,
      totalFinalFinal: des,
    });
  }

  ticket() {
    var array = []
    global.canastaGlobal.map((item)=>{
     
      array.push(item[0])
    });
    
    fetch("http://54.207.110.207:443/api/generarCupon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: idUsuario,
        total: this.state.total,
        productos:array,
        cupon: this.state.idCupon,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        
        if (responseJsonFromServer.cod === 200) {
          global.canastaGlobal = []
          global.precioGlobal = 0;
          this.setState({
            total:0
          })
          this.setState({ mensaje: responseJsonFromServer.mensaje, idTicket: responseJsonFromServer.response });
          this.exito.open();
        } else {
          global.canastaGlobal = []
          global.precioGlobal = 0;
          this.setState({
            total:0
          })
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error1.open();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  eliminar(index, item) {
    global.precioGlobal -= item
    this.setState({ fontLoaded: true,total:this.state.total  = global.precioGlobal,desactivarCupon:true });
    global.canastaGlobal.splice(index, 1);
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={Styles.fondo}>
          <View>
            <View style={Styles.cont1}>
              <Text style={Styles.txtBtn}>Tu Canasta</Text>
              <View style={Styles.linea}></View>
            </View>
            <ScrollView>
              <View style={Styles.contenedorP}>
                <ScrollView>
                  {global.canastaGlobal.map((item, index) => {
                    return (
                      <View style={Styles.row} key={index}>
                        <Image
                          source={{ uri: item[3] }}
                          style={Styles.producto}
                        ></Image>
                        <View style={Styles.row2}>
                          <Text style={Styles.txtDesc}>
                            {item[2].toUpperCase()}
                          </Text>
                          <Text style={Styles.txtDescP}>
                            $
                            {item[1]
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={(event) => {
                            this.eliminar(index, item[1]);
                          }}
                          style={Styles.contCantidad}
                        >
                          <Text style={Styles.txtCant}>Eliminar</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <View style={Styles.row4}>
                {this.state.desactivarCupon === true ? (
                  <TouchableOpacity
                    style={Styles.btn2}
                    onPress={(event) => {
                      this.cupon.open();
                    }}
                  >
                    <Text style={Styles.txtDesc7}>Ingresar Cupón </Text>
                  </TouchableOpacity>
                ) : (
                    <View></View>
                  )}
                <TouchableOpacity
                  style={Styles.btn}
                  onPress={(event) => {
                    this.ticket();
                  }}
                >
                  <Text style={Styles.txtDesc6}>Generar ticket: </Text>
                  <Text style={Styles.txtDesc6}>
                    Total:{" "}
                    {this.state.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <RBSheet
            ref={(ref) => {
              this.cupon = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "transparent" },
              container: {
                elevation: 100,
                height: hp("50%"),
                width: wp("90%"),
                marginBottom: wp("50"),
                borderRadius: wp("2"),
                alignSelf: "center",
              },
            }}
          >
            <View style={Styles.row5}>
              <Text style={Styles.tituloCupon}>Cupones</Text>
              <TouchableOpacity
                style={Styles.cruz}
                onPress={(event) => {
                  this.cupon.close();
                }}
              >
                <AntDesign name="closecircleo" size={45} color="red" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {this.state.muestra === 1 ? (
                <View>
                  {this.state.cupones.map((item, index) => {
                    return (
                      <View style={Styles.row} key={index}>
                        {item.idEstadoCupon === 1 ? (
                          <View style={Styles.row6}>
                            <View style={Styles.row9}>
                              <Text style={Styles.txtDesc2}>
                                {item.descripcion}
                              </Text>
                              <Text style={Styles.txtDesc8}>
                                <Text style={Styles.txtDesc11}>
                                  {" "}
                                  {item.estado}{" "}
                                </Text>
                                - {item.fecha_tra}
                              </Text>
                            </View>
                            <View style={Styles.row9}>
                              <TouchableOpacity
                                onPress={(event) => {
                                  this.cupon.close();
                                  this.aplicarCupon(
                                    item.valorCupon,
                                    item.idCupon
                                  );
                                }}
                                style={Styles.contCantidad}
                              >
                                <Text style={Styles.txtDesc}>
                                  Aplicar Cupón
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : (
                            <View style={Styles.row6}>
                              <View style={Styles.row9}>
                                <Text style={Styles.txtDesc2}>
                                  {item.descripcion}
                                </Text>
                                <Text style={Styles.txtDesc8}>
                                  <Text style={Styles.txtDesc10}>
                                    {" "}
                                    {item.estado}{" "}
                                  </Text>
                                - {item.fecha_tra}
                                </Text>
                              </View>
                            </View>
                          )}
                      </View>
                    );
                  })}
                </View>
              ) : (
                  <View style={Styles.row9}>
                    <Text style={Styles.txtDesc2}>No tienes cupón</Text>
                  </View>
                )}
            </ScrollView>
          </RBSheet>
          <RBSheet
            ref={(ref) => {
              this.exito = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "transparent" },
              container: {
                elevation: 100,
                height: hp("45%"),
                width: wp("90%"),
                marginBottom: wp("50"),
                borderRadius: wp("2"),
                alignSelf: "center",
              },
            }}
          >
            <View>
              <EvilIcons
                name="check"
                size={70}
                color="green"
                style={Styles.icon1}
              />

              <Text style={Styles.tituloCupon}>{this.state.mensaje}</Text>
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
                  this.exito.close();
                  this.props.navigation.navigate("DetalleTicket",{id:this.state.idTicket});
                }}
              />
            </View>

            <ScrollView>
              <View></View>
            </ScrollView>
          </RBSheet>
          <RBSheet
            ref={(ref) => {
              this.error1 = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "transparent" },
              container: {
                elevation: 100,
                height: hp("45%"),
                width: wp("90%"),
                marginBottom: wp("50"),
                borderRadius: wp("2"),
                alignSelf: "center",
              },
            }}
          >
            <View>
              <EvilIcons
                name="check"
                size={70}
                color="green"
                style={Styles.icon1}
              />

              <Text style={Styles.tituloCupon}>{this.state.mensaje}</Text>
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
                  this.error1.close();
                  this.props.navigation.navigate("Menu");
                }}
              />
            </View>

            <ScrollView>
              <View></View>
            </ScrollView>
          </RBSheet>
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}
