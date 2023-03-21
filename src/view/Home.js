import React, { Component } from 'react'
// import { Text, View, Button } from 'react-native'
import * as RN from 'react-native' //trae todos los componentes que usemos de react native
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home ({ navigation }) {
//   render() {
    return (
        <RN.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RN.Text>Home Screen</RN.Text>
            <RN.Button
                title="Go to Details"
                onPress={() => navigation.navigate('Reparacion')}
             />
    </RN.View>

    )
  }
// }

export default Home
