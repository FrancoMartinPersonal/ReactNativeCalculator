import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
fondo:{
    flex:1,
    backgroundColor:'#222121',
},
calculadoraContainer:{
    paddingHorizontal: 20,
    //backgroundColor:"red",
    paddingVertical:10,
    flex:1,
    justifyContent:"flex-end"
},
resultado:{
    fontSize:60,
    color:'white',
    textAlign:"right"
},
resultadoPequeño:{
    fontSize:30,
    color:'#fff8',
    textAlign:"right"
},
fila:{
flexDirection:'row',
justifyContent:'space-around',

flexWrap:"wrap"
},
boton:{
    height: 75,
    width: 75,
    backgroundColor:'#555',
    borderRadius:100,
    marginVertical:7,
    marginHorizontal:3,
    justifyContent:"center",
    alignItems:"center"
},
botonTexto:{
    fontSize:30,
    fontWeight:"800",
    color:"white"
}
})