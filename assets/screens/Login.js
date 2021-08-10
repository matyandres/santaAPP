import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Styles from "../styles/Login";
import * as Font from "expo-font";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
export default class Login extends Component {
  static navigationOptions = { headerShown: false };
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      login: true,
      oldCliente: false,
      codVendedor: false,
      codCliente: false,
      codigoUsuario: "",
      mensaje: "",
      codigoVendedor: "",
      registro: false,
      listaRegiones: [],
      flagCiudad: 0,
      cCliente: "",
      cVendedor: "",
      telefono: "",
      password: "",
      conPassword: "",
      pickerComuna: "",
      pickerRegion: "",
      nombre: "",
      username: "",
      password: "",
      correo: "",
      direccion: "",
      dgV: ""
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("../fonts/Montserrat-Regular.ttf"),
      "Montserrat-Black": require("../fonts/Montserrat-Black.ttf"),
    });
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
    this.listarRegion();
    this.setState({ fontLoaded: true });
  }
  validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }
  guardar() {
    if (this.state.password != this.state.conPassword) {
      this.setState({ mensaje: "La contraseña no cooinciden" });
      this.error.open();
    } else if (this.state.rut == "") {
      this.setState({ mensaje: "Debe Ingresar R.U.T" });
      this.error.open();
    } else if (this.state.dgV == "") {
      this.setState({ mensaje: "Debe Ingresar Digito Verificador" });
      this.error.open();
    } else if (this.state.telefono == "") {
      this.setState({ mensaje: "Debe Ingresar Teléfono" });
      this.error.open();
    } else if (this.state.pickerRegion == "") {
      this.setState({ mensaje: "Debe Ingresar Región" });
      this.error.open();
    } else if (this.state.pickerComuna == "") {
      this.setState({ mensaje: "Debe Ingresar Comuna" });
      this.error.open();
    } else if (this.state.password == "") {
      this.setState({ mensaje: "Debe Ingresar Contraseña" });
      this.error.open();
    } else if (this.state.conPassword == "") {
      this.setState({ mensaje: "Debe Confirmar Contraseña" });
      this.error.open();
    } else if (this.state.telefono.length < 9) {
      this.setState({ mensaje: "Teléfono debe contener 9 digitos" });
      this.error.open();
    }
    else if (this.state.rut.length < 7) {
      this.setState({ mensaje: "R.U.T. no debe ser menor a 7 digitos" });
      this.error.open();
    }
    else if (this.state.nombre.length < 3) {
      this.setState({ mensaje: "Nombre debe contener al menos 3 digitos" });
      this.error.open();
    }
    else if (this.state.password.length < 6) {
      this.setState({ mensaje: "La Contraseña debe tener al menos 6 digitos" });
      this.error.open();
    }
    else if (!this.validarEmail(this.state.correo)) {
      this.setState({ mensaje: "El correo es invalido" });
      this.error.open();
    }
    else if (this.state.direccion == "") {
      this.setState({ mensaje: "Debe ingresar la direccion" });
      this.error.open();
    }
    else {
      fetch("http://54.207.110.207:443/api/registrar", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          APIkey: "santaAgua=APIKEY1321DADQD11DAS",
          rut: this.state.rut,
          dv: this.state.dgV,
          nombre: this.state.nombre,
          telefono: this.state.telefono,
          password: this.state.password,
          idComuna: this.state.pickerCiudad,
          cCliente: this.state.codigoCliente,
          cVendedor: this.state.codigoVendedor,
          correo: this.state.correo,
          direccion: this.state.direccion
        }),
      })
        .then((response) => response.json())
        .then((responseJsonFromServer) => {
          if (responseJsonFromServer.cod == 200) {

            this.setState({
              mensaje: responseJsonFromServer.mensaje,
            });
            this.exito.open();
            global.datosUsuario = responseJsonFromServer.response
            if (responseJsonFromServer.response.id_perfilUsuario == 1 || responseJsonFromServer.response.id_perfilUsuario == 4) {
              this.props.navigation.navigate("MenuAdministrativo", { index: 1 });
            } else {
              if (responseJsonFromServer.response.id_perfilUsuario == 3) {
                this.props.navigation.navigate("MenuAdministrativo", { index: 2 });
              } else {
                this.props.navigation.navigate("Menu");
              }

            }
          } else {
            this.setState({ mensaje: responseJsonFromServer.mensaje });
            this.error.open();
          }
        })
        .catch((error) => {
          console.error("hola", error);
        });
    }
  }

  login() {
    fetch("http://54.207.110.207:443/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod == 500) {
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error.open();
        } else {
          global.datosUsuario = responseJsonFromServer.response
          if (responseJsonFromServer.response.id_perfilUsuario == 1 || responseJsonFromServer.response.id_perfilUsuario == 4) {
            this.props.navigation.navigate("MenuAdministrativo", { index: 1 });
          } else {
            if (responseJsonFromServer.response.id_perfilUsuario == 3) {
              this.props.navigation.navigate("MenuAdministrativo", { index: 2 });
            } else {
              this.props.navigation.navigate("Menu");
            }

          }

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  validarCodigo() {
    fetch("http://54.207.110.207:443/api/vCodigoCliente", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        referencia: this.state.codigoUsuario,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod == 500) {
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error.open();
        } else {
          //  this.props.navigation.navigate("Menu");
          this.setState({
            codigoCliente: responseJsonFromServer.response,
            login: false,
            oldCliente: false,
            codCliente: false,
            codVendedor: true,
          });

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  validarCodigoVendedor() {
    fetch("http://54.207.110.207:443/api/vCodigoVendedor", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
        referencia: this.state.codigoVendedor,
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {

        if (responseJsonFromServer.cod == 500) {
          this.setState({ mensaje: responseJsonFromServer.mensaje });
          this.error.open();
        } else {
          //  this.props.navigation.navigate("Menu");
          this.setState({ codigoVendedor: responseJsonFromServer.response });

          this.setState({
            login: false,
            oldCliente: false,
            codCliente: false,
            codVendedor: false,
            registro: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async listarRegion() {
    await fetch("http://54.207.110.207:443/api/getRegiones", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS",
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        var retorno = [];
        if (responseJsonFromServer.cod == 200) {
          responseJsonFromServer.response.map((item, index) => {
            {
              Platform.OS === "android"
                ? retorno.push(
                  <Picker.Item
                    label={item.nombre}
                    value={item.orden}
                    key={index}
                  />
                )
                : retorno.push({
                  label: item.nombre,
                  value: item.orden,
                  key: index
                });
            }
          });

          this.setState({
            listaRegiones: retorno,
            flagRegion: 1,
          });
        }
      })
      .catch((error) => {
        console.error("hola", error);
      });
  }
  listarCiudad = (idRegion) => {
    if (idRegion != "0") {
      this.setState({ flagCiudad: 1 });
      var APIkey = "santaAgua=APIKEY1321DADQD11DAS";
      fetch("http://54.207.110.207:443/api/getComunas", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          APIkey: APIkey,
          idRegion,
        }),
      })
        .then((response) => response.json())
        .then((responseJsonFromServer) => {
          var retorno = [];
          if (responseJsonFromServer.cod == 200) {
            responseJsonFromServer.response.map((item, index) => {
              {
                Platform.OS === "android"
                  ? retorno.push(
                    <Picker.Item
                      label={item.nombre}
                      value={item.id}
                      key={index}
                    />
                  )
                  : retorno.push({
                    label: item.nombre,
                    value: item.id,
                    key: index
                  });
              }
            });
            this.setState({ listaCiudad: retorno, flagCiudad: 2 });
          }
        })
        .catch((error) => {
          console.error("hola", error);
        });
    } else {
      this.setState({
        listaCiudad: [],
        flagCiudad: 0,
        pickerCiudad: "0",
      });
    }
    this.setState({
      listaComuna: [],
      flagComuna: 0,
      pickerComuna: "0",
    });
  };

  render() {
    if (this.state.fontLoaded) {
      if (this.state.login) {
        return (
          <View style={Styles.fondo}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>

            <Text style={Styles.bienvenidoLogin}>Bienvenido</Text>
            <TouchableOpacity
              style={Styles.btnLogin}
              onPress={(event) => {
                this.setState({
                  login: false,
                  oldCliente: false,
                  codCliente: true,
                  codVendedor: false,
                });
              }}
            >
              <Text style={Styles.txtBtn}>CLIENTE NUEVO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({ oldCliente: true, login: false });
              }}
              style={Styles.btnLogin}
            >
              <Text style={Styles.txtBtn}>YA SOY CLIENTE</Text>
            </TouchableOpacity>
          </View>
        );
      }
      if (this.state.codCliente) {
        return (
          <View style={Styles.fondo}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>
            <Text style={Styles.bienvenido}>Cliente nuevo</Text>
            <TextInput
              style={Styles.input}
              placeholder={"Código cliente"}
              maxLength={6}
              onChangeText={(texto) => this.setState({ codigoUsuario: texto })}
              placeholderTextColor={"#3bb9b2"}
              value={this.state.codigoUsuario}
              keyboardType="default"
              textContentType="none"
            />
            <TouchableOpacity
              onPress={(event) => {
                this.validarCodigo();
                // this.setState({ newCliente: false });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Validar código de cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({
                  login: false,
                  oldCliente: false,
                  codCliente: false,
                  codVendedor: true,
                });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Registrar sin código</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({
                  login: false,
                  oldCliente: false,
                  codCliente: false,
                  codVendedor: false,
                  registro: false,
                  login: true
                });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Volver atrás</Text>
            </TouchableOpacity>
            {/*ERROR CÓDIGO */}
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
      }
      if (this.state.codVendedor) {
        return (
          <View style={Styles.fondo}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>
            <Text style={Styles.bienvenido}>Cliente nuevo</Text>
            <TextInput
              style={Styles.input}
              placeholder={"Código vendedor"}
              maxLength={6}
              onChangeText={(texto) => this.setState({ codigoVendedor: texto })}
              placeholderTextColor={"#3bb9b2"}
              value={this.state.codigoVendedor}
              keyboardType="default"
              textContentType="none"
            />
            <TouchableOpacity
              onPress={(event) => {
                this.validarCodigoVendedor();
                // this.setState({ newCliente: false });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Validar código vendedor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({
                  login: false,
                  oldCliente: false,
                  codCliente: false,
                  codVendedor: false,
                  registro: true,
                });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Registrar sin código</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({ codCliente: true, codVendedor: false });
              }}
              style={Styles.btn}
            >
              <Text style={Styles.txtBtn}>Volver atrás</Text>
            </TouchableOpacity>
            {/*ERROR CÓDIGO */}
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
      }
      if (this.state.oldCliente) {
        return (
          <View style={Styles.fondo}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>
            <Text style={Styles.bienvenido}>Bienvenido</Text>
            <TextInput
              style={Styles.input}
              placeholder={"Usuario"}
              maxLength={10}
              onChangeText={(texto) => this.setState({ username: texto })}
              placeholderTextColor={"#3bb9b2"}
              value={this.state.username}
              keyboardType="default"
              textContentType="none"
            />

            <TextInput
              style={Styles.input}
              placeholder={"Contraseña"}
              maxLength={10}
              secureTextEntry={true}
              textContentType={"password"}
              onChangeText={(texto) => this.setState({ password: texto })}
              placeholderTextColor={"#3bb9b2"}
              value={this.state.password}
              keyboardType="default"
              textContentType="none"
            />
            <TouchableOpacity
              onPress={(event) => {
                this.login();
              }}
              style={Styles.btnIn}
            >
              <Text style={Styles.txtBtn}>INGRESAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(event) => {
                this.setState({ oldCliente: false, login: true });
              }}
              style={Styles.btnAtras}
            >
              <Text style={Styles.txtBtn}>VOLVER ATRAS</Text>
            </TouchableOpacity>
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
      }
      if (this.state.registro) {
        return (
          <View style={Styles.fondo}>
            <Text style={Styles.bienvenido2}>Registro de usuario</Text>

            <ScrollView>
              <View style={Styles.cont1}>
                <View style={Styles.row}>
                  <TextInput
                    style={Styles.input3}
                    placeholder={"12345678"}
                    maxLength={8}
                    onChangeText={(texto) => this.setState({ rut: texto })}
                    placeholderTextColor={"#3bb9b2"}
                    value={this.state.rut}
                    keyboardType="number-pad"
                    textContentType="none"
                  />
                  <Text style={Styles.txtG}>-</Text>
                  <TextInput
                    style={Styles.input2}
                    placeholder={"K"}
                    maxLength={1}
                    onChangeText={(texto) => this.setState({ dgV: texto })}
                    placeholderTextColor={"#3bb9b2"}
                    value={this.state.dgV}
                    keyboardType="default"
                    textContentType="none"
                  />
                </View>
                <TextInput
                  style={Styles.input}
                  placeholder={"Nombre"}
                  maxLength={255}
                  textContentType={"password"}
                  onChangeText={(texto) => this.setState({ nombre: texto })}
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.nombre}
                  keyboardType="default"
                  textContentType="none"
                />
                <TextInput
                  style={Styles.input}
                  placeholder={"Correo"}
                  maxLength={255}
                  textContentType={"none"}
                  onChangeText={(texto) => this.setState({ correo: texto })}
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.correo}
                  keyboardType="default"
                  textContentType="none"
                />
                <TextInput
                  style={Styles.input}
                  placeholder={"Teléfono"}
                  maxLength={9}
                  onChangeText={(texto) => this.setState({ telefono: texto })}
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.telefono}
                  keyboardType="number-pad"
                  textContentType="none"
                />
                <TextInput
                  style={Styles.input}
                  placeholder={"Contraseña"}
                  maxLength={10}
                  textContentType={"password"}
                  secureTextEntry={true}
                  onChangeText={(texto) => this.setState({ password: texto })}
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.password}
                  keyboardType="default"
                  textContentType="none"
                />
                <TextInput
                  style={Styles.input}
                  placeholder={"Confirmar Contraseña"}
                  maxLength={10}
                  secureTextEntry={true}
                  textContentType={"password"}
                  onChangeText={(texto) =>
                    this.setState({ conPassword: texto })
                  }
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.conPassword}
                  keyboardType="default"
                  textContentType="none"
                />
                {/*TODO:PICKER */}

                <View style={Styles.input}>
                  {Platform.OS === "android" ? (
                    <Picker
                      style={Styles.input}
                      selectedValue={this.state.pickerRegion}
                      style={Styles.pickerRegion}
                      onValueChange={(value) => {
                        this.setState({ pickerRegion: value });
                        this.listarCiudad(value);
                      }}
                    >
                      <Picker.Item
                        label={
                          this.state.flagRegion == 0
                            ? "Cargando..."
                            : "Seleccione una region"
                        }
                        value="0"
                      />
                      {this.state.listaRegiones}
                    </Picker>
                  ) : (
                    //TODO:PICKERVISUAL(
                    <RNPickerSelect
                      placeholder={{
                        label: "Seleccione",
                        value: 0,
                        color: "#3bb9b2",
                        fontSize: 24,
                      }}
                      doneText={"Seleccionar"}
                      style={{
                        inputIOS: {
                          color: "gray",
                          fontSize: 16,
                          paddingHorizontal: 10,
                          backgroundColor: "transparent",
                          borderRadius: 5,
                          top: wp("1%"),
                        },
                        pickerSelectStyles: {
                          top: wp("2%"),
                          left: wp("6%"),
                          color: "#3bb9b2",
                        },
                      }}
                      value={this.state.pickerRegion}
                      selectedValue={this.state.pickerRegion}
                      onValueChange={(value) => {
                        this.setState({ pickerRegion: value });
                        this.listarCiudad(value);
                      }}
                      items={this.state.listaRegiones}
                    />
                  )}
                </View>
                <View style={Styles.input}>
                  {Platform.OS === "android" ? (
                    <Picker
                      style={Styles.input}
                      selectedValue={this.state.pickerCiudad}
                      style={{
                        color: "#3bb9b2",
                        fontSize: wp("4.0"),
                        fontFamily: "Montserrat-Regular",
                        textAlign: "center",
                      }}
                      onValueChange={(value) => {
                        this.setState({ pickerCiudad: value });
                      }}
                    >
                      <Picker.Item
                        label={
                          this.state.flagCiudad == 0
                            ? "Seleccione Región"
                            : this.state.flagCiudad == 1
                              ? "Cargando..."
                              : "Seleccione"
                        }
                        value="0"
                      />
                      {this.state.listaCiudad}
                    </Picker>
                  ) : (
                    <RNPickerSelect

                      placeholder={{
                        label: "Seleccione Región",
                        value: 0,
                        color: "#FA6B27",
                        fontSize: 24,
                      }}
                      doneText={"Seleccionar"}
                      style={{
                        inputIOS: {
                          color: "gray",
                          fontSize: 16,
                          paddingHorizontal: 10,
                          backgroundColor: "transparent",
                          borderRadius: 5,
                          top: wp("1%"),
                        },
                        pickerSelectStyles: {
                          top: wp("2%"),
                          left: wp("6%"),
                          color: "#FA6B27",
                        },
                      }}
                      value={this.state.pickerCiudad}
                      selectedValue={this.state.pickerCiudad}
                      onValueChange={(value) => {
                        this.setState({ pickerCiudad: value });
                      }}
                      items={this.state.listaCiudad}
                    />
                  )}
                </View>
                <TextInput
                  style={Styles.input}
                  placeholder={"Direccion"}
                  maxLength={255}
                  textContentType={"none"}
                  onChangeText={(texto) => this.setState({ direccion: texto })}
                  placeholderTextColor={"#3bb9b2"}
                  value={this.state.direccion}
                  keyboardType="default"
                  textContentType="none"
                />
                {/*TODO:GUARDAR BOTON */}
                <TouchableOpacity
                  onPress={(event) => {
                    this.guardar();
                  }}
                  style={Styles.btnIn}
                >
                  <Text style={Styles.txtBtn}>GUARDAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={(event) => {
                    this.setState({ oldCliente: false, login: true });
                  }}
                  style={Styles.btnAtras}
                >
                  <Text style={Styles.txtBtn}>VOLVER ATRAS</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

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
                this.exito = ref;
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
                    this.exito.close();
                  }}
                />
              </View>
            </RBSheet>
          </View>
        );
      }
    } else {
      return <View></View>;
    }
  }
}
