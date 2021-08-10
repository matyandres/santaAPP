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
  topMenu:{
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  topMenuSub:{
    height:hp(15),
    width:wp(39),
    borderWidth: wp(0.6),
    marginLeft:wp(1),
    borderRadius: wp(7),
    borderColor: "#3bb9b2",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop:hp(5),

  },
  topMenuSub1:{
    height:hp(15),
    width:wp(50),
    borderWidth: wp(0.6),
    marginLeft:wp(15),
    borderRadius: wp(7),
    borderColor: "#3bb9b2",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop:hp(5),

  },
  txtTextNumero:{
      color: "#3bb9b2",
      fontSize:wp(7)
  },
  contenedorP: {
    width: wp("90"),
    height: hp(80),
    borderRadius: wp("4"),
    backgroundColor: "white",
    borderWidth: wp(0.2),
    borderColor: "#3bb9b2",
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
    fontSize: hp(1.6),
    fontFamily: "Montserrat-Regular",
    width: wp("80"),
    marginStart: wp("1"),
    zIndex: 1,
    fontWeight:'bold',
    marginTop:hp(0.2)
  },
  textLetra:{
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
    backgroundColor:"#86D9D4",
    flexDirection: "row",
    width: wp("90"),
    height: hp("10"),

    borderWidth: wp(0.3),
    borderColor: "#3bb9b2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    padding: wp("6"),
    alignSelf: "center",
    marginTop: wp("5"),
    zIndex:0
  },
  icono:{
    right:wp('20')
  },
  logo: {
    width: wp("90%"),
    height: wp("20%"),
    alignSelf: "center",
    marginBottom: hp("1%"),
  },
});
