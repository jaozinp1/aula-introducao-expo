import { View, Text } from 'react-native'; 
import styles from './styles';
import Card from './card';
import img from '../../../assets/café3coracoes.png';  
import img2 from '../../../assets/caféjaguari.png'; 
import img3 from '../../../assets/cafépilão.jpg'; 

function Atividade02 () {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Card 
                titulo={'Café 3Corações'} 
                descricao={'possui uma torra intensa, que resulta em uma bebida marcante e encorpada, este é o café perfeito para quem ama ser intenso.'} 
                valor={'1.000.000,00'}
                img={img}
            />

            <Card 
                titulo={'Café Pilão'} 
                descricao={'tem um ponto de torra acentuado e um processo de moagem fina e uniforme, que garantem seu sabor forte e encorpado.'} 
                valor={'1.500.000,00'}
                img={img3}
            />

            <Card 
                titulo={'Café Jaguari'} 
                descricao={'torra rápida e intensa, revela-se uma bebida encorpada, forte e saborosa. '} 
                valor={'2.000.000,00'}
                img={img2}
            />
        </View>
    );
}

export default Atividade02;
