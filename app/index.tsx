
import { useState } from "react";
import { Button, Text, View , StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function Index() {
  const [task, setTask] = useState('')
  const [myTasks, setMyTasks]= useState([''])

  function handleAddTask(){
    setMyTasks(oldState =>[...oldState, task])
    setTask('')
  }
 


  return (
    <View
      style={style.container
        
      }
    >
      <Text style={style.title}>Bem Vindo Fulano </Text>
      
     <TextInput 
      placeholder="Compra Pão"
      placeholderTextColor='#555'
      style={style.input}
      value = {task}
      onChangeText={setTask}
     
     /> 

     <TouchableOpacity
      activeOpacity={0.5}
      style={style.button}
      onPress={handleAddTask}
     >
      <Text style={style.buttonText}>Adicionar</Text>
      
     
     
     </TouchableOpacity>



    <Text style={[style.title, {marginVertical:30 }]}>A fazeres</Text>
    {myTasks.map( (item, index) => (
      <TouchableOpacity 
        key={index}
        style={style.buttonTask}>
          <Text style={style.textTask}>
        
            {item}
          </Text>
      </TouchableOpacity>
     ))}
     
      
    


     

     
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:30,
    paddingVertical:40,
    backgroundColor: '#121015'
  },
  title: {
    color:'#fff',
    fontWeight: 'bold' ,
    fontSize: 25,

  },
  input:{
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding:15,
    borderRadius: 10,
    marginTop: 20
  },
  button: {
    backgroundColor: '#A37CF7',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  buttonTask:{
    backgroundColor:'#1F1E25',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  textTask:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
})