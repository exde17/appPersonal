import React, { Component } from 'react'
import * as RN from 'react-native'
import { useState, useEffect } from 'react'
import { database } from '../config/fb'
import { collection, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
// import { Text, View, Button } from 'react-native'

function Reparacion ({navigation}) {

    
    const [newitem, setNewitem] = useState({
        falla: '',
        solucion: '',
        observacion: '',
        tiempo: new Date(),
    })

    const fectData = async () =>{
    // const doc = await collection('reparaciones').doc('reparacion').get()
        
        await addDoc(collection(database, 'reparacion'), newitem)
        navigation.navigate('Home')
    }
  
    return (
      <RN.View style={{ flex: 1, alignItems: 'center' }}>
        <RN.Text style={{ fontSize: 32, fontWeight: '700' }}> Reparacion </RN.Text>

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, falla:text })}
            placeholder='Falla o Daño'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, solucion:text })}
            placeholder='Solucion del Daño'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, observacion:text })}
            placeholder='Observacion breve de la Solucion'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

        <RN.Button
            title='Guardar' 
            onPress={fectData}

        />
        {/* <RN.Button
                title="Go to Details"
                onPress={() => navigation.push('Reparacion')} //push es para crear una pila de las paginas o componentes que ya visitado
             /> */}
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </RN.View>
    )

  }


export default Reparacion
