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
import Styles from "../styles/TicketP";
import * as Font from "expo-font";
import { AntDesign, Fontisto, Ionicons, Entypo } from "@expo/vector-icons";
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
    navigation.addListener('willFocus', () => {
      this.ticket()
      this.setState({ fontLoaded: true });
    });
   
    await this.ticket()
    
   
  }

  async ticket() {
    await fetch("http://54.207.110.207:443/api/informacionTicketEnProduccion", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        APIkey: "santaAgua=APIKEY1321DADQD11DAS"
      }),
    })
      .then((response) => response.json())
      .then((responseJsonFromServer) => {
        
        if (responseJsonFromServer.cod === 200) {
          this.setState({
            datos: responseJsonFromServer.response.verificarInformacion,
            fontLoaded:true
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
            <Text style={Styles.txtBtn}>Ticket En Producción</Text>
            <View style={Styles.linea}></View>
          </View>

          <View style={Styles.contenedorP}>
            <Image
              source={require("../img/santaAguaLogo.png")}
              style={Styles.logo}
            ></Image>
            <ScrollView

            >
            {this.state.datos.length == 0 ? (
              <Text>NO TIENES TICKETS EN ESPERA DE PRODUCCION</Text>
            ):(
              <View></View>
            )}
            
            {this.state.datos.map((item, index) => {
                return (
                  <TouchableOpacity 
                    style={Styles.row} 
                    key={item.idTicket} 
                    onPress={(event) => { this.props.navigation.navigate("aDetalleTicket", { id: item.idTicket,index:4 }) }}>
                    <Fontisto name="ticket-alt" size={24} color="black" />
                    <Text style={Styles.txtDesc10}> ${item.total} | RUT:{item.rut}-{item.dv}</Text>
                    <AntDesign
                      name="right"
                      size={24}
                      color="black"
                      style={Styles.icono}
                    />
                  </TouchableOpacity>
                );
              })}
                  
              

            </ScrollView>

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
      return <View></View>;
    }
  }
}
