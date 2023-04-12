import React, { Component } from 'react'
import * as RN from 'react-native'
import { useState, useEffect } from 'react'
import { database } from '../config/fb'
import { collection, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
import Select2 from 'react-native-select-two'
import { nombres } from '../../public/nombres'
import { estados } from '../../public/estados'
import { tipoMantenimiento } from '../../public/tipoMantenimiento'
import { plataforma } from '../../public/plataforma'
// import DatePicker from 'react-native-date-picker'
// import { Text, View, Button } from 'react-native'

function Reparacion ({navigation}) {
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [newitem, setNewitem] = useState({
        numeroTicket: '',
        descripcion: '',
        nombre: '',
        localidad: '',
        plataforma: '',
        fechaInicio: new Date(),
        TipoMantenimiento: '',
        estado: 'Asignado',
        // observacion: '',
        // fechaAtencion: '',
        // tiempo: new Date(),
    })

    const fectData = async () =>{
    // const doc = await collection('reparaciones').doc('reparacion').get()
        
        await addDoc(collection(database, 'reparacion'), newitem)
        navigation.navigate('Home')
    }
  
    return (
      <RN.View style={{ flex: 1, alignItems: 'center' }}>
        <RN.Text style={{ fontSize: 32, fontWeight: '700' }}> Asignacion de Ticket </RN.Text>
        {/* <hr /> */}

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, numeroTicket:text })}
            placeholder='Numero de Ticket'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

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
                setNewitem({...newitem, nombre:data })
                // setEstNombre({ data })
                console.log(data)
            }}
            onRemoveItem={data => {
                setNewitem({...newitem, nombre:data })
                // setEstNombre({ data })
                console.log(data)
            }}
        />

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, descripcion:text })}
            placeholder='Descripcion'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

        <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, localidad:text })}
            placeholder='Localidad'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        />

        <Select2 
            isSelectSingle
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
            colorTheme="blue"
            popupTitle="Plataforma"
            title="Plataforma"
            cancelButtonText='cancelar'
            selectButtonText='seleccionar'
            searchPlaceHolderText='Buscar'
            data={plataforma}
            onSelect={data => {
                setNewitem({...newitem, plataforma:data })
                // setEEstados({ data })
                console.log(data)
            }}
            onRemoveItem={data => {
                setNewitem({...newitem, plataforma:data })
                // setEEstados({ data })
                console.log(data)
            }}
        />

         {/* <DatePicker 
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
         />  */}

        <Select2 
            isSelectSingle
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
            colorTheme="blue"
            popupTitle="Tipo de Mantenimiento"
            title="Tipo de Mantenimiento"
            cancelButtonText='cancelar'
            selectButtonText='seleccionar'
            searchPlaceHolderText='Buscar'
            data={tipoMantenimiento}
            onSelect={data => {
                setNewitem({...newitem, TipoMantenimiento:data })
                // setEEstados({ data })
                console.log(data)
            }}
            onRemoveItem={data => {
                setNewitem({...newitem, TipoMantenimiento:data })
                // setEEstados({ data })
                console.log(data)
            }}
        />
        {/* <RN.TextInput 
            onChangeText={(text) => setNewitem({...newitem, observacion:text })}
            placeholder='Observacion breve de la Solucion'
            style={{ width: '90%',
            padding: 13,
            marginVertical: 6,
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 6 }}
        /> */}

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
