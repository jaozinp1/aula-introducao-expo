import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1, //container ocupa 100% da tela
        backgroundColor: '#fafafa', //cor do container
        borderRadius: 5, //borda curvada
        padding: 8, //alinhamento horizontal
        alignItems: 'center',
        justifyContent: 'center', //centralizar o conteúdo verticalmente
        
        
    },
    titulo:{
        fontSize: RFPercentage(4), //tamanho da fonte
        fontWeight: "bold",
        borderWidth: 3, //expessura da borda
        marginTop: 180 , //margem acima do elemento
        marginBottom: 60, //margem abaixo do elemento 
        //padding: 8, //espaço interno
        width: '100%', //largura do elemento 
        height: 100, // altura
        textAlign: 'center', //alinhamento horizontal do texto
        textAlignVertical: 'center', //alinhamento vertical do container
        color : 'green', //cor do texto
        borderColor: 'red', //cor da borda
        borderRadius: 20, //arredondar a borda
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20, //margem abaixo do título
        marginLeft: 20, //margem esquerda do texto
        padding: 10, //alinhamento horizontal do texto
        marginBottom: 10, //margem abaixo do texto
        width: '80%', //largura do texto
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20, //margem abaixo do texto
        padding: 10, //alinhamento horizontal do texto
        marginLeft: 20, //margem esquerda do texto
        paddingBottom: 10, //alinhamento vertical do texto  

    },
    texto: {
        fontSize: RFPercentage(4),
        fontWeight: 100,
        height: 150,
        borderWidth: 3,
        borderColor: 'red',
        color: 'green'
        
    }
});

export default styles;