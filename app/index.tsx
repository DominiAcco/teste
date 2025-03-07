
import { Button, Text, View , StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function Index() {

 


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
     
     /> 

     <TouchableOpacity
      activeOpacity={0.5}
      style={style.button}
     
     >
      <Text style={style.buttonText}>Adicionar</Text>
     </TouchableOpacity>
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
  }
})