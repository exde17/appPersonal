import React, { Component,useState } from 'react'
// import { Text, View, Button } from 'react-native'
import * as RN from 'react-native' //trae todos los componentes que usemos de react native
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Select2 from 'react-native-select-two';
import { nombres } from '../../public/nombres';

function Home ({ navigation }) {
//   render() {
    const [ usuario, setUsuario ]= useState('')
    return (
        <RN.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RN.Text>Nombre de Usuario</RN.Text>

            <Select2
            isSelectSingle
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
            colorTheme="blue"
            popupTitle="Nombres"
            title="Responsable"
            cancelButtonText='cancelar'
            selectButtonText='seleccionar'
            searchPlaceHolderText='Buscar'
            data={nombres}
            onSelect={data => {
                setUsuario({ data })
                // setEstNombre({ data })
                console.log(data)
            }}
            onRemoveItem={data => {
                setUsuario({ data })
                // setEstNombre({ data })
                console.log(data)
            }}
            />
            <RN.Button
                title="Go to Details"
                onPress={() => navigation.navigate('Reparacion')}
             />
    </RN.View>

    )
  }
// }

export default Home
