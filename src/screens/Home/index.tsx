import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from '../components/Participant'
import { styles } from './style';
 
export function Home() {

    function handleParticipantaAdd(){
        console.log('Você clicou no botão para adicionar')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.Form}>
        <TextInput 
            style={styles.Input}
            placeholder="Nome do participante"
            placeholderTextColor='#6B6B6B'
            // keyboardType=""
        />
        <TouchableOpacity 
            style={styles.button}
            onPress={handleParticipantaAdd}
            >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        </View>
        <Participant name='William'/>
        <Participant name='Gabriel Cardoso'/>
        <Participant name='Theo trouxa'/>
    </View>
  );
}
