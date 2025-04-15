import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Touchable } from  'react-native'; 

import styles from './styles';

function Exemplo04 () {

    const [txtDigitado, setTxtDigitado] = useState('');
    const [valorVisualizar, setvalorVisualizar] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 4</Text>
            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput 
            style={styles.txtInput}
            onChangeText={(valorTxtInput) => setTxtDigitado(valorTxtInput)}
            />

            <Text style={styles.titulo2}>Exemplo exibição valor digitado por botão</Text>
            <Text style={styles.texto}>{valorVisualizar}</Text>
            <TouchableOpacity 
            style={styles.botao}
            onPress={() => setvalorVisualizar(txtDigitado)}>
                <Text style={styles.txtBotao}>Visualizar valor digitado</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo04;