import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0')
    const [numeroPrev, setNumeroPrev] = useState('')
    const ultOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroPrev('')
    }

    const armarNumero = (numeroTexto: string) => {
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                //evaluar si hay otro cero y hay un punto

            } else if ((numeroTexto === '0' || numero.length > 1) && numero.includes('.')) {
                setNumero(numero + numeroTexto)
                //evaluar si es diferente de cero y si tiene un punto

            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)


                // evitar 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)

            }
        } else {
            setNumero(numero + numeroTexto)

        }
        // if(numero=="0"){

        //     setNumero( numeroTexto)
        // }else{
        //     setNumero(numero + numeroTexto)
        // }
    }

    const positivoNegativo = () => {
        if (numero !== '0') {

            if (numero.includes('-')) {
                setNumero(numero.replace('-', ''))
            } else {
                setNumero("-" + numero)
            }
        }
    }

    const btnDelete = () => {
        if (numero.startsWith('-') && numero.length < 3) {
            return setNumero(numero.replace(numero, '0'))
        }
        if (numero !== '0') {
            if (numero.length == 1) {
                setNumero('0')
            } else {

                return setNumero(numero.slice(0, -1))
            }
        }
    }

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroPrev(numero.slice(0, -1))
        } else if(numero=='0'){
            setNumeroPrev('')
            
        }else{
            setNumeroPrev(numero)

        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultOperacion.current = Operadores.multiplicar
    }
    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultOperacion.current = Operadores.sumar
    }

    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroPrev)

        if(num1==0)return;
        switch (ultOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 -  num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;

            default:
                break;
        }
        setNumeroPrev('')
    }
    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        calcular,
        numero,
        numeroPrev,
     
    }
}

