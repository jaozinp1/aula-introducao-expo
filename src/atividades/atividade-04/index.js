import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles';

function Atividade04() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [valorVisualizar, setValorVisualizar] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.titulo2}>Inserir o nome e sobrenome</Text>
            
            <Text style={styles.texto}>{valorVisualizar}</Text>

            <Text style={styles.nome}>Nome</Text>
            <TextInput 
                style={styles.txtInput}
                onChangeText={(valorTxtInput) => setNome(valorTxtInput)}
            />

            <Text style={styles.nome}>Sobrenome</Text>
            <TextInput 
                style={styles.txtInput}
                onChangeText={(valorTxtInput) => setSobrenome(valorTxtInput)}
            />

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => setValorVisualizar(`${nome} ${sobrenome}`)}>
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade04;
