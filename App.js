
import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity , FlatList} from 'react-native';

export default function App() {
  const [names, setNames ]= useState([{name:"white", id:1}, 
                                      {name:"sepioa", id:2 },
                                      {name:"sepio1", id:3 },
                                      {name:"sepio2", id:4 },
                                      {name:"sepio3", id:5 },
                                      {name:"sepio4", id:6 },
                                      {name:"sepio5", id:7 },
                                      {name:"sepio6", id:8 },
                                      {name:"sepio7", id:9 },
                                      {name:'monk7', id:10},])
const onChange =()=>{
  setName("sepio")
}
const delItem =(id)=>{

  console.log(id)
  setNames((prevNames)=>{
    return prevNames.filter(name => name.id !== id ) 
  })

}
return (
    <View  style={styles.container}>
      <Text>Hello Coder</Text>
      <FlatList
        data={names}
        renderItem={({item})=>
        (<TouchableOpacity onPress={()=>delItem(item.id)} style={styles.container2}><Text>{item.name}</Text></TouchableOpacity>)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
   
  );
} 

const styles = StyleSheet.create({

container:{
  backgroundColor:"lightgray",
  alignItems:"center",
  flex: 1,

},
text:{
  
  fontSize:30,
  alignItems:'center'
},
container2:{
  margin:15,
  padding:10,
  borderRadius:10,
  backgroundColor:'lightblue',
  alignItems:'center'

 
}

})
