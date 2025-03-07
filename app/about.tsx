import { useRouter } from "expo-router";

import { Button, Text, View } from "react-native";


export default function AboutScreen(){
    const router = useRouter()
    return(
        <>
            <View>
                <Text>Página Sobre</Text>
                <Button
                    title="Voltar"
                    onPress={()=> router.back()}
                
                
                />
            </View>
        
        </>
        
    )
}