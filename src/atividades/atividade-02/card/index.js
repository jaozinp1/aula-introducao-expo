import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo2, children, img}) {
    return(
        <View style={styles.cardContainer}>
            <Image source={img} style={styles.imagem} />
            <Text style={styles.titulo}>{titulo2}</Text>
            <Text style={styles.mensagem}>{children}</Text>
        </View>
    );
}

export default Card;