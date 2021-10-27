
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Themes/AppTheme'



interface Botones {
    texto: string,
    backColor: number,
    color: number,
    action:(numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, backColor, color, action }: Botones) => {

const backColorFun  = ( texto:string, backColor:number)  => {
    return(backColor == 1 ?

        (texto == "0" ? {
            ...styles.boton,
            backgroundColor: "#462828",
            width: 155,
            borderRadius: 25
        } : { ...styles.boton, backgroundColor: "#746666" }
        ) :
        backColor == 2 ?
            { ...styles.boton, backgroundColor: "#c76408" } :
            { ...styles.boton, backgroundColor: "#dfe0fa" })
}
    return (
        <TouchableOpacity
        onPress={() => action(texto)}>
        <View style={backColorFun(texto,backColor)}
        >
            <Text style={(
                color == 1 ?
                    { ...styles.botonTexto, color: "#ddd" } :
                    { ...styles.botonTexto, color: "#223" })}>
                {texto}
            </Text>
        </View>
            </TouchableOpacity>
    )
}


