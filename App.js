import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, TextInput,TextInputIcon } from 'react-native-paper';


const nombre = nombre => {
  return <Text>{nombre}</Text>;
}

const datos = (datos) => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv }>
      <TextInput
      label = {datos}
      placeholder='Nombre Docente'
      placeholderTextColor={estilo === 'florida' ? 'orange' : 'white' }
      left = {<TextInputIcon icon = "eye" />}
    />
    <TextInput
      label={datos}
      placeholder='Modulo'
      placeholderTextColor={estilo === 'florida' ? 'orange' : 'white' }
      left = {<TextInputIcon icon = "eye" />}
    />
    </View>
  )
}
const mostrarInforme = () => {
 return (
  <Button 
  icon="format-list-bulleted"
  mode="contained"> INFORME
  </Button>

 )
}

const estilo = 'florida';
const isAdmin = true;
const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];

class App extends Component  {
  render() {
    return( 
    <>
    {nombre("Emma París")}
    {datos("Insertar texto")}
    {isAdmin && mostrarInforme()}
   
      {modulos2Dam.map((item,index) => {
        return(
          <View>
            <Text>{index+1}</Text>
            <Text>{item.nombre}</Text>
            <Text>{item.profesor}</Text>
            <Text>{item.horas}</Text>
          </View>
        )
      })
      }
    
    </>
    );
  }
}
const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple', 
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12, 
    textAlign: 'left', 
    color: 'grey',
    },
    florida: { 
    backgroundColor: 'red', 
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12, 
    textAlign: 'right',
    },
});
export default App;
