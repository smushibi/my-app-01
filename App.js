import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName ]= useState({name:'john', age:30})
const onChange =()=>{
  setName({name:'sepio', age:45})
}
return (
    <>
    <View style={styles.container}>
      <Text style={styles.textColor}>sepio is coding in react native </Text>
      <View><Button  onPress={onChange}  title="change state"/></View>
    </View>
    <View style={styles.container2}><Text>Monty python {name.name} aged {name.age}</Text></View>
    </>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:"blue",
    fontSize: 60,
    
  },
  container2: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    
  },
  
});
