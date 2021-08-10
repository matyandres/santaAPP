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
  },
  txtBtn: {
    color: "#3bb9b2",
    fontSize: hp("3.50"),
    fontFamily: "Montserrat-Bold",
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
  row9: {
    width: wp("47%"),
  },
  linea2: {
    borderBottomColor: "#3bb9b2",
    borderBottomWidth: 0.8,
    width: wp("35"),
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: wp("1"),
  },
  cruz: {
    left: wp("18"),
  },
  txtPrecio: {
    color: "grey",
    fontSize: hp("2.5%"),
    fontFamily: "Montserrat-Light",
  },
  txtDescP: {
    color: "black",
    fontSize: wp("3.8%"),
    fontFamily: "Montserrat-Black",
    width: wp("30"),
  },
  txtDesc: {
    color: "black",
    fontSize: wp("3.5%"),
    fontFamily: "Montserrat-Regular",
    width: wp("30"),
  },
  txtDesc2: {
    color: "black",
    fontSize: wp("4.5%"),
    fontFamily: "Montserrat-Regular",
    width: wp("50"),
  },
  txtDesc5: {
    color: "black",
    fontSize: wp("4.0%"),
    fontFamily: "Montserrat-Regular",
    width: wp("30"),
  },
  txtDesc6: {
    color: "#3bb9b2",
    fontSize: wp("4.0%"),
    fontFamily: "Montserrat-Bold",
    width: wp("40"),
    textAlign: "center",
  },
  txtDesc7: {
    color: "#3bb9b2",
    fontSize: wp("4.5%"),
    fontFamily: "Montserrat-Bold",
    width: wp("40"),
    textAlign: "center",
    margin: wp("3"),
  },
  txtDesc8: {
    color: "black",
    fontSize: wp("3.5%"),
    fontFamily: "Montserrat-Regular",
    width: wp("50"),
  },
  txtDesc10: {
    color: "red",
    fontSize: wp("3.5%"),
    fontFamily: "Montserrat-Regular",
    width: wp("50"),
  },
  txtDesc11: {
    color: "green",
    fontSize: wp("3.5%"),
    fontFamily: "Montserrat-Regular",
    width: wp("50"),
  },
  txtCant: {
    color: "red",
    fontSize: wp("3%"),
    fontFamily: "Montserrat-Regular",
    width: wp("30"),
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginStart: wp("2"),
    marginTop: wp("2"),
  },
  row4: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
  },
  row2: {
    flexDirection: "column",
    marginStart: wp("2"),
  },
  row5: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: wp("4"),
    marginBottom: wp("2"),
  },
  row6: {
    flexDirection: "row",
  },
  cont1: {
    top: wp("10"),
    marginStart: wp("5"),
    flexDirection: "row",
  },
  contP: {
    marginStart: wp("5"),
    width: wp("20"),
    height: wp("40"),
    backgroundColor: "red",
  },
  contProducto: {
    height: wp("30"),
  },
  producto: {
    width: wp("17"),
    height: wp("17"),
  },
  iconAgregar: {
    color: "red",
    alignSelf: "flex-end",
  },
  contenedorP: {
    width: wp("90"),
    height: hp(75),
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
    padding: wp("2"),
    alignSelf: "center",
    marginTop: wp("10"),
  },
  contCantidad: {
    flexDirection: "row",
    width: wp("30"),
    height: wp("10"),
    borderRadius: wp("1"),
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

    alignSelf: "center",
    alignItems: "center",
  },
  input: {
    alignSelf: "center",
    width: wp("30%"),
    //backgroundColor: 'transparent',
    //backgroundColor: '#6C5EE1',
    backgroundColor: "#fff",
    borderRadius: wp("3%"),
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    height: hp("6%"),
    color: "#fff",
    fontSize: hp("3.5%"),
    padding: hp("1%"),
    marginRight: wp("15"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  btn: {
    width: wp("42"),
    height: wp("13"),
    backgroundColor: "white",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: wp("3"),
    alignItems: "center",
    margin: wp("1"),
    maxWidth: wp("60"),
    elevation: 10,
    borderColor: "#3bb9b2",
    borderWidth: 2,
  },
  btn2: {
    width: wp("42"),
    height: wp("13"),
    backgroundColor: "white",
    borderRadius: wp("3"),
    margin: wp("1"),
    maxWidth: wp("60"),
    elevation: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#3bb9b2",
    borderWidth: 2,
  },
  tituloCupon: {
    color: "#3bb9b2",
    fontSize: hp("3.50"),
    textAlign: "center",

    fontFamily: "Montserrat-Bold",
  },
  icon1: {
    marginTop: wp("10"),
    marginBottom: wp(10),
    alignSelf: "center",
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
