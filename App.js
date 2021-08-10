
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { View, Image, StatusBar, Text } from "react-native";

import Login from "./assets/screens/Login";

import Menu from "./assets/screens/Menu";
import Canasta from "./assets/screens/Canasta";
import DetalleTicket from "./assets/screens/DetalleTicket";
import aDetalleTicket from "./assets/screens/aDetalleTicket";
import MenuAdministrativo from "./assets/screens/menuAdministrativo";
import Tickets from "./assets/screens/Tickets";
import TicketR from "./assets/screens/TicketR";
import TicketC from "./assets/screens/TicketC";
import TicketE from "./assets/screens/TicketE";
import TicketP from "./assets/screens/TicketP";
import Bienvenido from "./assets/screens/Bienvenido";
import MenuPerfil from "./assets/screens/MenuPerfil";
import { Ionicons, FontAwesome,AntDesign, Feather } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tickets from "./assets/styles/tickets";
//StatusBar.setHidden(true);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
			headerShown: null
		})
  },
});
const menu = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  
  MenuAdministrativo: {
    screen: MenuAdministrativo,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  
  Canasta: {
    screen: Canasta,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  aDetalleTicket: {
    screen: aDetalleTicket,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  DetalleTicket: {
    screen: DetalleTicket,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  Tickets: {
    screen: Tickets,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  Bienvenido: {
    screen: Bienvenido,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  }, 
  MenuPerfil: {
    screen: MenuPerfil,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  TicketC: {
    screen: TicketC,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  TicketE: {
    screen: TicketE,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  TicketR: {
    screen: TicketR,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
  TicketP: {
    screen: TicketP,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
 
});

const canasta = createStackNavigator({
  Canasta: {
    screen: Canasta,
    navigationOptions: () => ({
			gesturesEnabled: false,
			headerShown: null
		})
  },
});

const MainTabs = createBottomTabNavigator(
  {
    Menu: {
      screen: menu,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => {
          return (
            <View style={{top:wp('2%')}}>
              <Feather name="shopping-cart" size={30} color="#3bb9b2" />
            </View>
          );
        },
      },
    },
    Canasta: {
      screen: MenuPerfil,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => {
          return (
            <View style={{top:wp('2%')}}>
              <AntDesign name="user" size={24} color="#3bb9b2" />
            </View>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      pressColor: "#F96B27",
      indicatorStyle: {},
      allowFontScaling: true,
      upperCaseLabel: false,
      showLabel: true,
      activeTintColor: "white",
      activeBackgroundColor: "#bbb",
      inactiveBackgroundColor: "#f0f0f0",
      inactiveTintColor: "white",
      borderRadius: 10,
      labelStyle: {
        fontSize: 10,
        textAlign: "center",
      },
      showIcon: true,
      style: {
        borderTopWidth: 0,
        height: 50,
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
        tabBarButtonColor: "#F96B27",
        navBarTextFontSize: 10,
        forceTitlesDisplay: true,
        tabFontFamily: "Avenir-Medium",
        borderRadius: 10,

      },
    },
  }
);
const AppModalStack = createStackNavigator(
  {
    App: MainTabs,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: null,
    },
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: Login,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: AppModalStack,
  },
});

export default createAppContainer(App);
