import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants' ;  

//Exemplos
import Exemplo01 from './src/exemplos/exemplo-01';
 import styles from './src/exemplos/exemplo-01/styles';

//Atividades

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8, 
    paddingTop: Constants.StatusBarHeight, 
  },
});
