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
import Styles from "../styles/menuAdministrativo";
import * as Font from "expo-font";
import { AntDesign, Fontisto, Ionicons, Entypo } from "@expo/vector-icons";
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
            cListoEntrega: 0,
            cEsperaC: 0,
            tProduccion: 0
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
        const index = navigation.getParam("index");
        navigation.addListener('willFocus', () => {
            this.contadores();
            this.produccion();
            const index = navigation.getParam("index");
            this.setState({ fontLoaded: true, index: index });
        });
        this.contadores();
        this.produccion();
        this.setState({ fontLoaded: true, index: index });
    }


    contadores() {
        fetch("http://54.207.110.207:443/api/informacionTicket", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                APIkey: "santaAgua=APIKEY1321DADQD11DAS",
                idUsuario: global.datosUsuario.id,
            }),
        })
            .then((response) => response.json())
            .then((responseJsonFromServer) => {

                if (responseJsonFromServer.cod == 500) {
                    this.setState({ mensaje: responseJsonFromServer.mensaje });
                    this.error.open();
                } else {

                    this.setState({
                        cListoEntrega: responseJsonFromServer.response.listoEntregar,
                        cEsperaC: responseJsonFromServer.response.verificarInformacion
                    })

                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    produccion() {
        fetch("http://54.207.110.207:443/api/informacionTicketEnProduccion", {
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

                if (responseJsonFromServer.cod == 500) {
                    this.setState({ mensaje: responseJsonFromServer.mensaje });
                    this.error.open();
                } else {

                    this.setState({
                        tProduccion: responseJsonFromServer.response.listoEntregar
                    })

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
                        <Text style={Styles.txtBtn}>Administración</Text>
                        <View style={Styles.linea}></View>
                    </View>

                    <View style={Styles.contenedorP}>
                        <Image
                            source={require("../img/santaAguaLogo.png")}
                            style={Styles.logo}
                        ></Image>

                        {this.state.index == 1 ? (

                            <View style={Styles.topMenu}>
                                <View style={Styles.topMenuSub}>
                                    <Text style={Styles.textLetra}>Tienes</Text>
                                    <Text style={Styles.txtTextNumero}>{this.state.cEsperaC}</Text>
                                    <Text style={Styles.textLetra}>tickets en</Text>
                                    <Text style={Styles.textLetra}>espera de confirmacion </Text>
                                </View>
                                <View style={Styles.topMenuSub}>
                                    <Text style={Styles.textLetra}>Tienes</Text>
                                    <Text style={Styles.txtTextNumero}>{this.state.cListoEntrega}</Text>
                                    <Text style={Styles.textLetra}>tickets listo</Text>
                                    <Text style={Styles.textLetra}>para entregar</Text>
                                </View>
                            </View>

                        ) : (
                            <View style={Styles.topMenu}>
                                <View style={Styles.topMenuSub1}>
                                    <Text style={Styles.textLetra}>Tienes</Text>
                                    <Text style={Styles.txtTextNumero}>{this.state.tProduccion}</Text>
                                    <Text style={Styles.textLetra}>tickets en</Text>
                                    <Text style={Styles.textLetra}>espera de producción </Text>
                                </View>
                            </View>
                        )}


                        {this.state.index == 1 ? (
                            <View>
                                <TouchableOpacity style={Styles.row} onPress={(event) => { this.props.navigation.navigate("TicketC") }}>
                                    <Fontisto name="ticket-alt" size={24} color="black" />
                                    <Text style={Styles.txtDesc10}>Tickets En Espera De Confirmación</Text>
                                    <AntDesign
                                        name="right"
                                        size={24}
                                        color="black"
                                        style={Styles.icono}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.row} onPress={(event) => { this.props.navigation.navigate("TicketE") }}>
                                    <Fontisto name="ticket-alt" size={24} color="black" />
                                    <Text style={Styles.txtDesc10}>Tickets Listos Para Entregar</Text>
                                    <AntDesign
                                        name="right"
                                        size={24}
                                        color="black"
                                        style={Styles.icono}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.row} onPress={(event) => { this.props.navigation.navigate("TicketR") }}>
                                    <Fontisto name="ticket-alt" size={24} color="black" />
                                    <Text style={Styles.txtDesc10}>Tickets En Reparto</Text>
                                    <AntDesign
                                        name="right"
                                        size={24}
                                        color="black"
                                        style={Styles.icono}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity style={Styles.row} onPress={(event) => { this.props.navigation.navigate("TicketP") }}>
                                <Fontisto name="ticket-alt" size={24} color="black" />
                                <Text style={Styles.txtDesc10}>Tickets En Espera De Producción</Text>
                                <AntDesign
                                    name="right"
                                    size={24}
                                    color="black"
                                    style={Styles.icono}
                                />
                            </TouchableOpacity>
                        )}


                    </View>


                </View>
            );
        } else {
            return <View></View>;
        }
    }
}
