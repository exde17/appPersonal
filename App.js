// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Buenas</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';
import * as  RN from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/view/Home';
import Reparacion from './src/view/Reparacion';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reparacion">
      
        <Stack.Screen name="Home" component={Home} options={{ title: 'mi inicio' }} />
        <Stack.Screen name="Reparacion" component={Reparacion} options={{ title: 'mi reparacion' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700'

  },
  inputContainer: {
    with: '90%',
    padding: 13,
    marginVertical: 6,
    borderWith: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  }
})
