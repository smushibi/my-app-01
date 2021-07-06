
import React, {useState}from 'react';
import { StyleSheet, Text, View, Button , FlatList} from 'react-native';

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
return (
    <View  style={styles.container}>
      <Text>Hello Coder</Text>
      <FlatList
      data={names}
      renderItem={({item})=>(<View style={styles.container2}><Button   title={item.name}/></View>)}
      keyExtractor={(item)=> item.id}
      />
    </View>
   
  );
} 

const styles = StyleSheet.create({

container:{
  backgroundColor:"yellow",
  alignItems:"center"
 

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
  width:120
 
}

})
