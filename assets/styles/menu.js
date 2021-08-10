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
  txtBtnW2: {
    color: "#fff",
    fontSize: hp("2,5"),
    fontFamily: "Montserrat-Bold",
  },
  txtBtnW3: {
    color: "#fff",
    fontSize: hp("2"),
    fontFamily: "Montserrat-Bold",
  },
  cargando: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
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
  buttonMap: {
    marginTop: wp("2"),
    width: wp("60%"),
    height: wp("15%"),
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "transparent",
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
  input: {
    alignSelf: "center",
    width: wp("80%"),
    //backgroundColor: 'transparent',
    //backgroundColor: '#6C5EE1',
    backgroundColor: "transparent",
    borderRadius: wp("3%"),
    borderColor: "#3bb9b2",
    borderWidth: wp(".5%"),
    height: hp("8%"),
    color: "black",
    fontSize: hp("3.5%"),
    padding: hp("1%"),
    marginTop: wp("2%"),
    marginBottom: hp("1%"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
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
  linea2: {
    borderBottomColor: "#3bb9b2",
    borderBottomWidth: 0.8,
    width: wp("35"),
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: wp("1"),
  },
  txtPrecio: {
    color: "grey",
    fontSize: hp("2.5%"),
    fontFamily: "Montserrat-Light",
  },
  tituloCanasta: {
    color: "#fff",
    fontSize: hp("3.5%"),
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    marginTop: wp("2"),
  },
  txtDesc: {
    color: "black",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width: wp("27"),
  },
  row: {
    flexDirection: "row",
  },
  row3: {
    flexDirection: "row",
    marginTop:wp('2')
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
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
    width: wp("50"),

    marginBottom: wp("5"),
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  producto: {
    width: wp("29"),
    height: wp("29"),
  },
  iconAgregar: {
    backgroundColor:"red",
    height:hp(8),
    width:wp(13),
    color: "red",
    alignSelf: "flex-start",
    top:hp(0),
    left:wp(3),
    position:"absolute",
    zIndex: 1,
    elevation:10,
    borderBottomRightRadius:wp(5),
    borderBottomLeftRadius:wp(5)
    
  },
  contenedorP: {
    width: wp("42"),
    height: hp("28"),
    borderRadius: wp("4"),
    backgroundColor: "white",
    borderWidth: wp(0.3),
    borderColor: "#3bb9b2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: wp("2"),
    marginStart: wp("3"),
    marginEnd: wp("2"),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textOferta:{
    color:"white",
    fontSize:hp(2.2),
    fontWeight:'bold',
    marginLeft:wp(1.5)
  },
  textOferta1:{
    color:"white",
    fontSize:hp(1.2),
    marginTop:hp(1.5),
    marginLeft:wp(0.5),
    fontWeight:'bold'
   
  },
  contCanasta: {
    width: wp("100"),
    height: wp("15"),
    borderTopLeftRadius: wp("4"),
    borderTopRightRadius: wp("4"),
    backgroundColor: "green",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,

    alignSelf: "flex-end",
    alignContent: "center",
    alignItems: "center",

  },
  lista: {
    width: wp("100"),
    height: hp("80"),
    marginTop: wp("10"),
    marginBottom: wp("40"),
    zIndex:1
  },
  margin:{ 
    marginTop:wp('100')
  }
});
