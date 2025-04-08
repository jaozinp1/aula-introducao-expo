import { useState } from 'react';
import {View, Text, TouchableOpacity } from  'react-native'; 

import styles from './styles';

function Atividade03 () {

    const [numero, setNumero] = useState(0);

    function handleIncrementa(){
        setNumero(numero + 1)
    }
    function handleDiscrementa(){
        setNumero(numero - 1)
    }
    function handleZerar () {
        setNumero(0)
    }

    
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style ={styles.containerIncremento} onPress={handleIncrementa}>
                <Text style ={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.containerIncremento} onPress={handleDiscrementa}>
                <Text style ={styles.txtBotao}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.botao3} onPress={handleZerar}>
                <Text style ={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
            


        </View>
    );
}

export default Atividade03;