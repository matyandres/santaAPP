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
    top: hp("33"),
    marginStart: wp("12"),
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
  contenedorP: {
    width: wp("90"),
    height: hp("80"),
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
    marginTop: hp("10"),
  },
  txtDesc: {
    color: "black",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width:wp('100'),
    marginStart:wp('1')
  },
  txtDesc12: {
    color: "green",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width:wp('100'),
    marginStart:wp('1')
  },
  
  txtDescEstado: {
    color: "green",
    fontSize: hp("2.5"),
    fontFamily: "Montserrat-Regular",
    width:wp('70'),
    marginStart:wp('1'),
    marginTop:hp('1')
    
  },
  
  txtDesc1: {
    color: "black",
    fontSize: hp("2.5"),
    fontFamily: "Montserrat-Regular",
    width:wp('70'),
    marginStart:wp('1'),
    marginLeft:wp('8')
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
    width:wp('50'),
    marginStart:wp('-2')
  },
  row:{
      flexDirection:'row',
      width:wp('80')
  },
  row1:{
      flexDirection:'row',
      width:wp('80'),
      marginTop:hp('1')
  }
});
