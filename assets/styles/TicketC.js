import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  txtBtn: {
    color: "#3bb9b2",
    fontSize: hp("3.50"),
    fontFamily: "Montserrat-Bold",
  },
  txtBtnW: {
    color: "#fff",
    fontSize: hp("2.5"),
    fontFamily: "Montserrat-Bold",
  },
  cont1: {
    top: wp("10"),
    marginStart: wp("5"),
    flexDirection: "row",
  },
  cont2: {
    top: wp("58"),
    marginStart: wp("5"),
  },
  linea: {
    borderBottomColor: "#3bb9b2",
    borderBottomWidth: 2,
    width: wp("55"),
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: wp("1"),
  },
  logo: {
    width: wp("90%"),
    height: wp("20%"),
    alignSelf: "center",
    marginBottom: hp("1%"),
  },
  contenedorP: {
    width: wp("90"),
    height: hp("86"),
    borderRadius: wp("4"),
    backgroundColor: "white",
    borderWidth: wp(0.2),
    borderColor: "rgba(40,186,237,0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: wp("5"),
    alignSelf: "center",
    marginTop: wp("10"),
  },
  txtDesc: {
    color: "black",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width: wp("80"),
    marginStart: wp("1"),
    zIndex: 1,
  },
  txtDesc10: {
    color: "black",
    fontSize: hp("2"),
    fontFamily: "Montserrat-Regular",
    width: wp("80"),
    marginStart: wp("1"),
    zIndex: 1,
    fontWeight:'bold'
  },
  txtDesc2: {
    color: "black",
    fontSize: hp("3.2"),
    fontFamily: "Montserrat-Regular",
  },
  txtDesc3: {
    color: "black",
    fontSize: hp("2.5"),
    fontFamily: "Montserrat-Regular",
    width: wp("50"),
    marginStart: wp("1"),
  },
  row: {
    flexDirection: "row",
    width: wp(80),
    height: wp("20"),
    backgroundColor:"#86D9D4",
    borderWidth: wp(0.2),
    borderColor: "#3bb9b2",
    padding: wp("4"),
    alignSelf: "center",
    marginTop: wp("5"),
    zIndex: 0,
    padding: wp("6"),
  },
  icono:{
    right:wp('20')
  }
});
