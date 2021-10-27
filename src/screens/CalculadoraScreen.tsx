import React  from 'react';

import { StatusBar, Text, View } from 'react-native'

import { styles } from '../Themes/AppTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';



const CalculadoraScreen = () => {
     
    const {limpiar,
        armarNumero,
        positivoNegativo,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        btnDelete,
        calcular,
        numero,
        numeroPrev} = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            <StatusBar
                backgroundColor='black'
            />
            <Text style={styles.resultadoPequeño}>{numeroPrev}</Text>
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            <View style={styles.fila}>
                {/* boton */}
                <BotonCalc texto="C" backColor={3} color={2} action={limpiar} />
                <BotonCalc texto="+/-" backColor={3} color={2} action={positivoNegativo} />
                <BotonCalc texto="del" backColor={3} color={2} action={btnDelete} />
                <BotonCalc texto="/" backColor={2} color={1} action={btnDividir} />

                <BotonCalc texto="7" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="8" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="9" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="X" backColor={2} color={1} action={btnMultiplicar} />

                <BotonCalc texto="4" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="5" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="6" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="-" backColor={2} color={1} action={btnRestar} />

                <BotonCalc texto="1" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="2" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="3" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="+" backColor={2} color={1} action={btnSumar} />

                <BotonCalc texto="0" backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="." backColor={1} color={1} action={armarNumero} />
                <BotonCalc texto="=" backColor={2} color={1} action={calcular} />

            </View>
        </View>
    )
}

export default CalculadoraScreen


