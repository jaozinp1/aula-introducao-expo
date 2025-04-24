import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import styles from './styles';

function Atividade05() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState('');
  
    const handleCalculationSoma = () => {
      const result = parseFloat(num1) + parseFloat(num2);
      //const result = parseFloat(num1) + parseFloat(num2);
      setTotal(result.toString());
    };
    const handleCalculationSubt = () => {
      const result2 = parseFloat(num1) - parseFloat(num2);
      //const result = parseFloat(num1) + parseFloat(num2);
      setTotal(result2.toString());
    };
    const handleCalculationMult = () => {
      const result2 = parseFloat(num1) * parseFloat(num2);
      //const result = parseFloat(num1) + parseFloat(num2);
      setTotal(result2.toString());
    };
    const handleCalculationDivi = () => {
      const result2 = parseFloat(num1) / parseFloat(num2);
      //const result = parseFloat(num1) + parseFloat(num2);
      setTotal(result2.toString());
    };
    function handleZerar () {
      setNum1('');
      setNum2('');
      setTotal('');
    }
    

  
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Atividade 5</Text>
  
        <Text style={styles.txtSaida}>Calculadora básica</Text>
  
        <Text style={styles.textLabel}>1º número</Text>
        <TextInput
          style={styles.txtEntrada}
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
        />
  
        <Text style={styles.txtSaida}>+</Text>
  
        <Text style={styles.textLabel}>2º número</Text>
        <TextInput
          style={styles.txtEntrada}
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
        />
  
        <Text style={[styles.txtSaida, { margin: 0 }]}>=</Text>
  
        <Text style={styles.textLabel}>Total</Text>
        <TextInput
          style={styles.txtEntrada}
          value={total}
          editable={false}
        />
        <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={handleCalculationSoma}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculationSubt}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculationMult}>
          <Text style={styles.textButton}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculationDivi}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleZerar}>
          <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
  export default Atividade05;
  
