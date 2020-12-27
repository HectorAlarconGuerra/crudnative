import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
  //campos formulario
  const [nombre, guardaNombre] = useState('');
  const [telefono, guardaTelefono] = useState('');
  const [correo, guardaCorreo] = useState('');
  const [empresa, guardaEmpresa] = useState('');

  //almacena el cliente en la Base de Datos
  const guardarCliente = () => {
    //validar
    //if(nombre ==)
    //generar el cliente
    //guardar el cliente en la API
    //redireccionaar
    //limpiar el form (opcional)
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label="Nombre"
        placeholder="Héctor"
        onChangeText={(texto) => guardaNombre(texto)}
        value={nombre}
        style={styles.input}
      />
      <TextInput
        label="Teléfono"
        placeholder="123454321"
        onChangeText={(texto) => guardaTelefono(texto)}
        value={telefono}
        style={styles.input}
      />
      <TextInput
        label="Correo"
        placeholder="correo@correo.com"
        onChangeText={(texto) => guardaCorreo(texto)}
        value={correo}
        style={styles.input}
      />
      <TextInput
        label="Empresa"
        placeholder="Nombre Empresa"
        onChangeText={(texto) => guardaEmpresa(texto)}
        value={empresa}
        style={styles.input}
      />
      <Button
        icon="pencil-circle"
        mode="contained"
        onPress={() => guardarCliente()}>
        Guardar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
