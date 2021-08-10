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
  FlatList,
} from "react-native";
import Styles from "../styles/menu";
import * as Font from "expo-font";
import {
  Entypo,
  FontAwesome,
  Octicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Button } from "react-native-elements";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
var canasta = [];
var total3 = 0;
global.canastaGlobal = [];
global.cantidadGlobal = 0;
global.precioGlobal = 0;
export default class Menu extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      newCliente: false,
      oldCliente: false,
      codigoUsuario: "",
      idUsuario: "",
      direccion: "",
      correo: "",
      producto: false,
      items: [],
      cantidad: 0,
      total: 0,
      total2: 0,
      productoLista: [],
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
    const id = global.datosUsuario.id;
    navigation.addListener('willFocus', () => {
      this.producto();
      this.setState({
        fontLoaded: true
      })
    });
    this.setState({
      idUsuario: id,
    });
    global.idUsuario = id;

    this.validar();
    this.producto();
    this.setState({ fontLoaded: true });
  }

  validar() {
    fetch("http://54.207.110.207:443/api/verificarCompra", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: this.state.idUsuario,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod === 500) {
          this.direccion.open();
        } else {
          //  this.props.navigation.navigate("Menu");
          this.direccion.close();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  guardar() {
    fetch("http://54.207.110.207:443/api/registrarUltimosDatos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        id: this.state.idUsuario,
        correo: this.state.correo,
        direccion: this.state.direccion,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod == 500) {
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error.open();
        } else {
          //  this.props.navigation.navigate("Menu");
          this.datos.close();
          this.error.open;

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  canasta1(id, precio, nombre, avatar) {
    total3 = total3 + precio;
    global.precioGlobal = global.precioGlobal + precio;
    this.setState({ total2: total3 });
    const producto = [id, precio, nombre, avatar, this.state.total++];

    this.setState({ cantidad: canasta.length });

    global.canastaGlobal.push(producto);

  }
  producto() {
    this.setState({ producto: true });
    fetch("http://54.207.110.207:443/api/productos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        var resultado = [];
        if (responseJsonFromServer.cod == 500) {
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error.open();
        } else {

          this.setState({
            listaProducto: resultado,
            producto: false,
            productoLista: responseJsonFromServer.response,
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
          <View>
            <View style={Styles.cont1}>
              <Text style={Styles.txtBtn}>Productos</Text>
              <View style={Styles.linea}></View>
            </View>
            <ScrollView
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.producto ? (
                <View style={Styles.cargando}>
                  <ActivityIndicator size={"large"} color={"#3bb9b2"} />
                </View>
              ) : (
                <FlatList
                  style={Styles.lista}
                  data={this.state.productoLista}
                  keyExtractor={(item) => item.idProducto}
                  renderItem={({ item }) => (
                    <View style={Styles.contProducto}>
                      <TouchableOpacity
                        style={Styles.contenedorP}
                        onPress={(event) => {
                          this.canasta1(
                            item.idProducto,
                            item.precio,
                            item.nombre,
                            item.avatar
                          );
                        }}
                      >
                        {item.oferta != 0 ? (
                          <View style={Styles.iconAgregar}>
                            <Text style={Styles.textOferta1}>INCLUYE</Text>
                            <Text style={Styles.textOferta}>{item.oferta}%</Text>
                          </View>)
                          : (
                          <View></View>)
                          }
                        <Image
                          source={{ uri: item.avatar }}
                          style={Styles.producto}
                        ></Image>
                        <Text style={Styles.txtPrecio}>
                          $
                          {item.precio
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </Text>
                        <Text style={Styles.txtDesc}>{item.nombre}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  numColumns={2}
                />
              )}
            </ScrollView>

            {global.canastaGlobal.length != 0 ? (
              <TouchableOpacity
                style={Styles.contCanasta}
                onPress={(event) => {
                  this.props.navigation.navigate("Canasta", {
                    productos: canasta,
                    total3: total3,
                  });
                }}
              >
                <View style={Styles.row3}>
                  <Text style={Styles.txtBtnW2}>
                    Tienes {global.canastaGlobal.length}
                  </Text>
                  {global.canastaGlobal.length === 1 ? (
                    <Text style={Styles.txtBtnW2}> Producto en</Text>
                  ) : (
                    <Text style={Styles.txtBtnW2}> Productos en</Text>
                  )}
                  <Feather name="shopping-cart" size={24} color="white" />
                </View>

                <Text style={Styles.txtBtnW3}>
                  $
                  {global.precioGlobal
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </Text>
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
          </View>

          <RBSheet
            ref={(ref) => {
              this.canasta = ref;
            }}
            closeOnPressMask={true}
            customStyles={{
              mask: { backgroundColor: "green" },
              container: {
                elevation: 100,
                height: hp("20%"),
                width: wp("100%"),
                borderTopEndRadius: wp("10%"),
                borderTopStartRadius: wp("10%"),
                alignSelf: "center",
                backgroundColor: "green",
                elevation: 10,
              },
            }}
          >
            <View style={Styles.row4}>
              <Button
                icon={<Feather name="shopping-cart" size={30} color="green" />}
                iconLeft
                title={""}
                buttonStyle={Styles.buttonMap}
                titleStyle={{
                  color: "green",
                  fontFamily: "Montserrat-Bold",
                  fontSize: wp("4.0%"),
                  marginLeft: wp("2"),
                }}
                onPress={(event) => {
                  this.mapRB.open();
                }}
              />
              <Text style={Styles.tituloCanasta}>Tienes 1 Producto</Text>
            </View>

            <Button
              icon={<Feather name="shopping-cart" size={30} color="green" />}
              iconLeft
              title={"Ir al carrito"}
              buttonStyle={Styles.buttonMap}
              titleStyle={{
                color: "green",
                fontFamily: "Montserrat-Bold",
                fontSize: wp("4.0%"),
                marginLeft: wp("2"),
              }}
              onPress={(event) => {
                this.mapRB.open();
              }}
            />
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
      return <View></View>;
    }
  }
}
