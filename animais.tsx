import { StatusBar, Text, View, Image, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React,{useEffect,useState} from "react";

export default function Animais() {

  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/animais') // Substitua pela URL do seu servidor
      .then((response) => response.json())
      .then((data) => setAnimais(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <View style={styles.container} >
      <Link href={'/menu'} style={styles.btnVoltar}>
      <Button title="Voltar"/>
    </Link>
        <TextInput placeholder="Search..." style={styles.input} />
        <Text>Enciclopédia Selvagem - Animais em Geral</Text>
        <Image source={require('@/assets/images/pata.png')} />
        <View>
      {animais.map((animal) => (
        <Text key={animal._id}>{animal.nome_animal}</Text>
      ))}
    </View>
        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}

