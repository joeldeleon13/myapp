import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const [texto, setTexto] = useState('');
  const [colorAnim] = useState(new Animated.Value(0)); // Valor animado para el cambio de color

  const handleChange = (valor) => {
    setTexto(valor);
    console.log(valor);

    // Cambiar color del cuadro superior al escribir
    Animated.timing(colorAnim, {
      toValue: valor.length % 2 === 0 ? 1 : 0, // Alterna entre 0 y 1
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Definir colores en función de la animación
  const interpolatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 140, 0)', 'rgb(30, 144, 255)'], // Naranja a Azul
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Bienvenido a Mi App Creativa</Text>

      {/* Input de texto */}
      <TextInput
        style={styles.input}
        placeholder="Escribe algo aquí..."
        placeholderTextColor="#888"
        onChangeText={(valor) => handleChange(valor)}
      />

      {/* Mostrar texto ingresado */}
      <Text style={styles.textDisplay}>Texto ingresado: {texto}</Text>

      {/* Tarjeta animada */}
      <Animated.View style={[styles.animatedBox, { backgroundColor: interpolatedColor }]} />

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => alert(`¡Hola! Has escrito: ${texto}`)}>
        <Text style={styles.buttonText}>Mostrar Alerta</Text>
      </TouchableOpacity>

      {/* Vista de cuadrícula */}
      <View style={styles.gridContainer}>
        <View style={[styles.gridBox, { backgroundColor: '#FF6347' }]} />
        <View style={[styles.gridBox, { backgroundColor: '#4682B4' }]} />
        <View style={[styles.gridBox, { backgroundColor: '#3CB371' }]} />
      </View>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textDisplay: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  animatedBox: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 30,
    marginVertical: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  gridBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default App;
