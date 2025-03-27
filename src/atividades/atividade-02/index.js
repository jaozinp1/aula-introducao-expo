import { View, Text, Image } from 'react-native'; 
import styles from './styles';
import Card from './card';
import img from '../../../assets/café3coracoes.png';  
import img3 from '../../../assets/caféjaguari.png'; 
import img4 from '../../../assets/cafépilão.jpg'; 

function Atividade02 () {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Card titulo={'Café pilão'}>
                <Text>Por apenas R$ 1.000.000,00</Text>
                <Image source={img4} style={styles.imagem} />
            </Card>
            <Card titulo={'Café 3 corações'}>
                <Text>Por apenas R$ 1.500.000,00</Text>
                <Image source={img} style={styles.imagem} />
            </Card>
           
            <Card titulo={'Café Jaguari'}>
                <Text>Por apenas R$ 2.000.000,00</Text>
                <Image source={img3} style={styles.imagem} />
            </Card>
        </View>
    );
}

export default Atividade02;
