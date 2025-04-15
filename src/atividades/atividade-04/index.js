import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Touchable } from  'react-native'; 

import styles from './styles';

function Atividade04 () {

    const [txtDigitado, setTxtDigitado] = useState('');
    const [valorVisualizar, setvalorVisualizar] = useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 4</Text>


            <Text style={styles.titulo2}>Inserir o nome e sobrenome</Text>
            
            <Text style={styles.texto}>{valorVisualizar}</Text>

            <Text style={styles.nome}>Nome</Text>
            
            <TextInput 
            style={styles.txtInput}
            onChangeText={(valorTxtInput) => setTxtDigitado(valorTxtInput)}
            />

            <Text style={styles.nome}>sobrenome</Text>

            <TextInput 
            style={styles.txtInput}
            onChangeText={(valorTxtInput) => setTxtDigitado(valorTxtInput)}
            />

            <TouchableOpacity 
            style={styles.botao}
            onPress={() => setvalorVisualizar(txtDigitado)}>
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade04;