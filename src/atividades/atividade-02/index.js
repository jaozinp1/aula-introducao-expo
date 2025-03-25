import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import Anuncio from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Anuncio  titulo={'Café pilão'}>
                Por apenas R$ 1.000.000,00
            </Anuncio>
            <Anuncio  titulo={'Café 3 corações'}>
                Por apenas R$ 1.500.00,00
            </Anuncio>
            <Anuncio  titulo={'Café Kipo'}>
                Por apenas R$ 750.000,00
            </Anuncio>
            <Anuncio  titulo={'Café Tupã'}>
                Por apenas R$ 2.000.000,00
            </Anuncio>
        </View>
    );
}

export default Atividade02;