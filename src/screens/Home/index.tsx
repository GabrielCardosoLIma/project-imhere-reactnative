import React, { useState } from 'react'
import { Alert, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Participant } from "../components/Participant";
import { styles } from "./style";

export function Home() {
  // Array
  // const Participantes = ['Eu']

  const [Participantes, setParticipantes] = useState<string[]>([])
  const [ParticipanteName, setParticipanteName] = useState('')

  function handleParticipantaAdd() {
    if(Participantes.includes('Gcardoso')){
      return Alert.alert('Participante existente', 'Já existe um participante com esse nome.')
    }
    // Participantes.push('Ana')
    // console.log(Participantes);
    // setParicipantes(['Ana'])
    // ['Eu'] => ['Ana']
    // prevState = conteudo atual do estado
    setParticipantes(prevState => [...prevState, ParticipanteName])
    // ['Eu'] => ['Eu', 'Ana']
    setParticipanteName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name} ?`, [
      {
        text:'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log(`Você clicou no botão para remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.Form}>
        <TextInput
          style={styles.Input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          // keyboardType="numeric"
          onChangeText={setParticipanteName}
          value={ParticipanteName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantaAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {Participantes.map(paricipant =>(
        <Participant
          key={paricipant}
          name={paricipant}
          onRemove={() => handleParticipantRemove(paricipant)}
        />
      ))}
      </ScrollView>
    </View>
  );
}
