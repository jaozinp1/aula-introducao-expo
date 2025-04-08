import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1, //container ocupa 100% da tela
        backgroundColor: '#fafafa', //cor do container
        borderRadius: 5, //borda curvada
        padding: 8, //alinhamento horizontal
        alignItems: 'center',
        
    },
    titulo:{
        fontSize: RFPercentage(4), //tamanho da fonte
        borderWidth: 3, //expessura da borda
        marginTop: 20, //margem acima do elemento
        marginBottom: 20, //margem abaixo do elemento 
        //padding: 8, //espaço interno
        width: '100%', //largura do elemento 
        height: 80, // altura
        textAlign: 'center', //alinhamento horizontal do texto
        textAlignVertical: 'center', //alinhamento vertical do container
        color : 'darkslategrey', //cor do texto
        borderColor: 'darkslategrey', //cor da borda
        borderRadius: 20, //arredondar a borda
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    botaoAlert: {
        width: '50%',
        margin: RFPercentage(2),
    },
    valor: {
        color:'darkslategrey',
        fontSize: RFPercentage(4),
    },
    botao: {
        backgroundColor: 'darkslategrey',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(2)
    },

    txtBotao : {
        fontSize: RFPercentage(2),
        color: '#fafafa'
    }
});

export default styles;