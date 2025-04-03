import {View, Text, Button, Alert } from  'react-native'; 

import styles from './styles';

function Exemplo03 () {

    function handleExibeBotao(){
        Alert.alert('Alerta', 'Alguem clicou no botão!')
    }

    const handleExibeBotao2 = () => {
        Alert.alert(
            'Alerta', 
            'Alguem clicou no botão!',
        [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Mensagem', 'Clicou em sim'),
                style: 'default',
            },

            {
                text: 'Não',
                onPress: () => Alert.alert('Mensagem', 'Clicou em não'),
                style: 'default',
            },

            {
                text: 'Cancelar',
                onPress: () => Alert.alert('Mensagem', 'Clicou em cancelar'),
                style: 'default',
            },
        ]
        
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <View style={styles.botaoAlert}>
            <Button 
                title='Não clique'
                color={'darkslategrey'}
                onPress={handleExibeBotao2}
            />
            </View>


        </View>
    );
}

export default Exemplo03;