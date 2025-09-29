import React, { useState } from 'react';
import { analisarTexto } from './utils/analisadorTexto';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleAnalisar = () => {
    const res = analisarTexto(texto);
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔍 Analisador de Texto</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma palavra ou frase"
        placeholderTextColor="#999"
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity style={styles.botao} onPress={handleAnalisar}>
        <Text style={styles.botaoTexto}>Analisar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.card}>
          <Text style={styles.resultadoTitulo}>Resultado</Text>
          <View style={styles.linha}>
            <Text style={styles.label}>Vogais:</Text>
            <Text style={styles.valor}>{resultado.numVogais}</Text>
          </View>
          <View style={styles.linha}>
            <Text style={styles.label}>Consoantes:</Text>
            <Text style={styles.valor}>{resultado.numConsoantes}</Text>
          </View>
          <Text style={styles.label}>Palíndromos:</Text>
          {resultado.palindromos.length > 0 ? (
            <FlatList
              data={resultado.palindromos}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.palindromo}>• {item}</Text>
              )}
            />
          ) : (
            <Text style={styles.semPalindromo}>Nenhum encontrado</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#4CAF50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 14,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#1E1E1E',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
  },
  resultadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4CAF50',
    textAlign: 'center',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#DDD',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  palindromo: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#FFB300',
    marginTop: 4,
  },
  semPalindromo: {
    fontSize: 15,
    color: '#888',
    marginTop: 4,
  },
});
