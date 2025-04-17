import { useState } from 'react';
import {View, Text, TextInput } from  'react-native'; 

import styles from './styles';

function Exemplo05 () {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5</Text>

            <Text style={styles.txtSaida}> Calculadora básica</Text>

            <Text style={styles.textLabel}> 1º número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={[styles.txtSaida, {margin : 0}]}> = </Text>

        </View>
    );
}

export default Exemplo05;