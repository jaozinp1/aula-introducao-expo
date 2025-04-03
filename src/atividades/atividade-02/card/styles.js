import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        borderWidth: RFPercentage(0.5), 
        borderColor: '#fff',
        backgroundColor: '#fff', 
        borderRadius: RFPercentage(2) ,
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: RFPercentage(1), 
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,            

    }, 
    titulo: {
        fontSize: RFPercentage(2.5), 
        fontWeight: 'bold', 
        color: '#333', 
    }, 
    valor: {
        fontSize: RFPercentage(2.5),
        color: '#fff', // Contraste com o fundo escuro
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#4caf50', // Fundo escuro para destaque
        padding: RFPercentage(1),
        borderRadius: RFPercentage(1),
        width: '80%',
        marginTop: RFPercentage(1),
    }, 
    descricao: {
        fontSize: RFPercentage(2), 
        color: '#222', 
    },  
    containerTexto: {
        width: '65%', 
    },  
    imagem: {
        height: RFPercentage(15), 
        width: RFPercentage(15),  
        resizeMode: 'stretch',
    }, 
});

export default styles;