import {View, Text } from  'react-native'; 

import styles from './styles';

function Exemplo01 () {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 1</Text>
            <Text style={styles.texto}> Aula PAM I, primeiro componente</Text>
        </View>
    );
}

export default Exemplo01;