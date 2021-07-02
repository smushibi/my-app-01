
import React, {useState}from 'react';
import { StyleSheet, Text, View, Button , TextInput} from 'react-native';

export default function App() {
  const [name, setName ]= useState('George')
  const [names, setNames ]= useState([{name:"white", id:1}, 
                                      {name:"sepio", id:2 },
                                      {name:"sepio", id:2 },
                                      {name:"sepio", id:2 },
                                      {name:'monk', id:3}])
const onChange =()=>{
  setName("sepio")
}
return (
    <>
    <View style={styles.container}>
      <Text style={styles.textColor}>Sepio is coding in react native </Text>
      <View><Button  onPress={onChange}  title="change state"/></View>
      <View>{names.map((name,id) =>(<View key={id}><Text>{name.name}</Text></View>))}</View>
    </View>
    <View style={styles.container2}><Text>my name is  {name}</Text></View>
    <View style={styles.input}>
      <Text >Enter data</Text>
      <TextInput style={styles.textIn} 
        placeholder="enter data here :)"
        onChangeText={(val)=> setName(val)}
       />
      </View>
    </>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'lightgreen',
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
  textIn:{
    borderColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
