import React, { useState } from 'react';
import { View,Text, ScrollView, TextInput } from 'react-native';

const App = () => {
  const [Texto, setTexto] = useState('');
  const handleChange=(valor)=>{
    setTexto(valor);
    console.log(valor)
  }
  return (
    <ScrollView>
      <TextInput style={{
          borderWidth: 1,
          borderRadius:20,
          marginHorizontal:20,
          marginVertical:10
        }} 
        onChangeText={(valor) => handleChange (valor)} 
        />
         <Text>{Texto}</Text>
      <View>
        <View style={{ backgroundColor: 'red', width: 150, height: 150 }} />
        <View style={{ backgroundColor: 'black', width: 150, height: 150 }} />
        <View style={{ backgroundColor: 'gray', width: 150, height: 150 }} />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hola Mundo</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hola Mundo 2</Text>
        

      </View>
    </ScrollView>
    
  );
};

export default App;
