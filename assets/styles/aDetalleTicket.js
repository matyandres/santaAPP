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
  cargando:{
    fontWeight: 'bold',
    fontSize:hp(2)
  },
  cargando1:{
    marginTop:hp(50),
    marginLeft:wp(40)
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
    height: hp(81),
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
    marginTop: hp(5),
  },
  txtDesc: {
    color: "black",
    fontSize: hp(1.8),
    fontFamily: "Montserrat-Regular",
    width: wp('100'),
    marginStart: wp(3)
  },
  txtDesc41: {
    color: "black",
    fontSize: hp("2.2"),
    fontFamily: "Montserrat-Regular",
    width: wp('100'),
    marginStart: wp('1'),
    fontWeight: 'bold'
  },
  txt1Desc: {
    color: "black",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width: wp('100'),
    marginStart: wp('1')
  },
  txtDesc12: {
    color: "green",
    fontSize: hp("2.3"),
    fontFamily: "Montserrat-Regular",
    width: wp('100'),
    marginStart: wp('1')
  },

  txtDescEstado: {
    color: "green",
    fontSize: hp("2.5"),
    fontFamily: "Montserrat-Regular",
    width: wp('70'),
    marginStart: wp('1'),
    marginTop: hp('1')

  },

  txtDesc1: {
    color: "black",
    fontSize: hp(1.8),
    fontFamily: "Montserrat-Regular",
    width: wp('100'),
    marginStart: wp('1'),
    marginLeft: wp(1)
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
    width: wp('50'),
    marginStart: wp('-40')
  },
  row: {
    flexDirection: 'row',
    width: wp('80'),
  },
  row21: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp(3)
  },
  row2111: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp(2),
    marginLeft: wp(3)
  },
  row211: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp(4)
  },
  row21122: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp(4),
    marginBottom:hp(1)
  },
  row21111: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp(0)
  },
  row22: {
    flexDirection: 'row',
    width: wp('80'),
    marginLeft: wp(3)

  },
  row1: {
    flexDirection: 'row',
    width: wp('80'),
    marginTop: hp('1')
  },
  btnBotones: {
    height: hp(8),
    width: wp(38),
    marginLeft: wp(1),
    borderWidth: wp(0.2),
    borderColor: "#3bb9b2",
    padding: hp(2),
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#3bb9b2",
    elevation: 10

  },
  btnBotone1s: {
    height: hp(8),
    width: wp(38),
    marginLeft: wp(1),
    borderWidth: wp(0.2),
    borderColor: "#3bb9b2",
    padding: hp(2),
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "red",
    elevation: 10

  },
  txtDesc10: {
    color: "white",
    alignContent: "center",
    textAlign: "center",
    fontWeight: 'bold',
  }
});
