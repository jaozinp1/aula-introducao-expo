import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#fafafa', // cor do container
        borderRadius: 10, // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn

    }, 
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: 3, // expessura da borda
        marginTop: 20, // margem acima do elemento
        marginBottom: 20, // margem abaixo do elemento
        // padding: 8, // espaço interno
        width: '100%', // largura do objeto
        height: 80, // altura do objeto 
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: '#333', // cor do texto 
        borderColor: '#333', // cor da borda 
        borderRadius: 20, // arrendondar borda
    }, 
    imagem: {
    width: RFPercentage(12),
    height: RFPercentage(12),
    borderRadius: RFPercentage(10),
    marginBottom: RFPercentage(1),
    resizeMode: 'contain',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    }
});

export default styles;