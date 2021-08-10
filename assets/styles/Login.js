import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  pickerRegion:{
    color: "#3bb9b2",
    fontSize: hp("10"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  fondo: {
    backgroundColor: "#000000",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  logo: {
    width: wp("90%"),
    height: wp("20%"),
    alignSelf: "center",
    marginTop: hp("8%"),
    marginBottom: hp("1%"),
  },
  bienvenido: {
    fontSize: hp("5%"),
    alignSelf: "center",
    color: "#3bb9b2",
  },
  btn: {
    width: wp("80"),
    height: wp("15"),
    borderColor: "#3bb9b2",
    borderWidth:wp('1'),
    borderRadius:wp('3'),
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    padding:wp('3'),
    margin:wp('5')
  },
  bienvenidoLogin: {
    marginTop: wp("10"),
    fontSize: hp("5%"),
    alignSelf: "center",
    color: "#3bb9b2",
  },
  bienvenido2: {
    marginTop: wp("8"),
    fontSize: hp("5%"),
    alignSelf: "center",
    color: "#3bb9b2",
  },
  row: {
    flexDirection: "row",
    alignContent: "center",

    alignSelf: "center",
  },
  cont1: {
    width: wp("100"),
    alignContent: "center",
  },
  btnLogin: {
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: '#000000',
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    width: wp("70%"),
    marginBottom: hp("2%"),
    height: wp("15%"),
    marginTop: wp("25%"),
    borderRadius: wp("3%"),
  },
  cont: {
    alignItems: "center",
  },
  btnAtras: {
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: '#000000',
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    width: wp("70%"),
    /* marginBottom:hp('2%'), */
    height: hp("5%"),

    borderRadius: wp("3%"),
    marginTop: hp("2%"),
  },
  btnIn: {
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: '#000000',
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    width: wp("70%"),
    /* marginBottom:hp('2%'), */
    height: wp("13%"),

    borderRadius: wp("3%"),
    marginTop: wp("10%"),
  },
  txtBtn: {
    color: "#3bb9b2",
    fontSize: hp("2.5%"),
    fontFamily: "Montserrat-Bold",
  },
  txt1: {
    color: "red",
    fontSize: hp("3.0%"),
    fontFamily: "Montserrat-Bold",
    textAlign: "left",
    margin: wp("5"),
  },
  txtE: {
    color: "#3bb9b2",
    fontSize: hp("3.0%"),
    fontFamily: "Montserrat-Bold",
    textAlign: "left",
    margin: wp("5"),
  },
  txt2: {
    color: "black",
    fontSize: hp("3.0%"),
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    margin: wp("5"),
  },
  txtG: {
    color: "#3bb9b2",
    fontSize: hp("3.0%"),
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    top: wp("10"),
    margin: wp("2"),
  },
  vistaIF: {
    width: wp("100%"),
  },
  input: {
    alignSelf: "center",
    width: wp("90%"),
    //backgroundColor: 'transparent',
    //backgroundColor: '#6C5EE1',
    backgroundColor: "#323232",
    borderRadius: wp("3%"),
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    height: hp("8%"),
    color: "#fff",
    fontSize: hp("3.5%"),
    padding: hp("1%"),
    marginTop: hp("6%"),
    marginBottom: hp("1%"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  picker: {
    alignSelf: "center",
    width: wp("20%"),
    backgroundColor: "#323232",
    height: hp("8%"),
    color: "#3bb9b2",
    fontSize: wp("5.5%"),
    bottom: wp("2"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  input2: {
    alignSelf: "center",
    width: wp("20%"),
    backgroundColor: "#323232",
    borderRadius: wp("3%"),
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    height: hp("8%"),
    color: "#fff",
    fontSize: hp("3.5%"),
    padding: hp("1%"),
    marginTop: hp("6%"),
    marginBottom: hp("1%"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  input3: {
    alignSelf: "center",
    width: wp("65%"),
    //backgroundColor: 'transparent',
    //backgroundColor: '#6C5EE1',
    backgroundColor: "#323232",
    borderRadius: wp("3%"),
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    height: hp("8%"),
    color: "#fff",
    fontSize: hp("3.5%"),
    padding: hp("1%"),
    marginTop: hp("6%"),
    marginBottom: hp("1%"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  infoInputUp: {
    alignSelf: "center",
    width: wp("90%"),
    fontFamily: "Montserrat-Regular",
    marginTop: hp("9%"),
    fontSize: hp("2%"),
    color: "#fff",
  },
  infoInputDown: {
    fontFamily: "Montserrat-Regular",
    marginTop: hp("1.5%"),
    fontSize: hp("3%"),
    color: "#fff",
  },
  link: {
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderBottomWidth: hp(".2%"),
    borderRadius: wp("8%"),
    borderColor: "#3bb9b2",
  },
  buttonMap: {
    marginTop: wp("2"),
    width: wp("60%"),
    height: wp("15%"),
    alignSelf: "center",
    backgroundColor: "#3bb9b2",
    borderRadius: 20,

    borderColor: "transparent",
  },
});