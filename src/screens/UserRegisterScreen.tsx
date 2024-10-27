// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import axios from 'axios';

// const UserRegisterScreen = () => {
//   const [profile, setProfile] = useState('motorista'); // Estado para controlar o tipo de perfil
//   const [name, setName] = useState('');
//   const [document, setDocument] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async () => {
//     // Validação básica
//     if (password !== confirmPassword) {
//       Alert.alert('Erro', 'As senhas não coincidem');
//       return;
//     }
//     if (!name || !document || !address || !email || !password) {
//       Alert.alert('Erro', 'Preencha todos os campos');
//       return;
//     }

//     // Dados para enviar na requisição
//     const userData = {
//       profile,
//       name,
//       document,
//       full_address: address, // Corrigido para "full_address"
//       email,
//       password,
//     };

//     try {
//       // Enviando a requisição POST para o endpoint correto
//       const response = await axios.post(process.env.EXPO_PUBLIC_API_IP +'/register', userData);

//       // Tratamento de sucesso
//       Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
//       console.log(response.data); // Exibir a resposta no console para debug
//     } catch (error) {
//       // Tratamento de erro
//       Alert.alert('Erro', 'Não foi possível cadastrar o usuário. Tente novamente.');
//       console.error(error); // Exibir o erro no console para debug
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Criar Usuário</Text>

//       {/* Picker para escolher o perfil */}
//       <View style={styles.pickerContainer}>
//         <TouchableOpacity onPress={() => setProfile('motorista')} style={[styles.iconButton, profile === 'motorista' && styles.selected]}>
//           <Icon name="motorcycle" size={30} color={profile === 'motorista' ? '#FFF' : '#000'} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setProfile('filial')} style={[styles.iconButton, profile === 'filial' && styles.selected]}>
//           <Icon name="store" size={30} color={profile === 'filial' ? '#FFF' : '#000'} />
//         </TouchableOpacity>
//       </View>

//       {/* Campos de formulário */}
//       <TextInput
//         style={styles.input}
//         placeholder="Nome completo"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder={profile === 'motorista' ? 'CPF' : 'CNPJ'}
//         value={document}
//         onChangeText={setDocument}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Endereço Completo"
//         value={address}
//         onChangeText={setAddress}
//       />

//       {/* Seção de dados de login */}
//       <Text style={styles.sectionTitle}>Dados de login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirme a senha"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />

//       {/* Botão de cadastro */}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Cadastrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   pickerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   iconButton: {
//     borderWidth: 2,
//     borderColor: '#DDD',
//     borderRadius: 10,
//     padding: 10,
//   },
//   selected: {
//     backgroundColor: '#2C8C8C', // Cor similar à tela de login/home
//     borderColor: '#2C8C8C',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     backgroundColor: '#F0F0F0',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#2C8C8C', // Cor do botão
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default UserRegisterScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; // Importando a máscara

const UserRegisterScreen = () => {
  const [profile, setProfile] = useState('motorista');
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleProfileChange = (newProfile) => {
    setProfile(newProfile);
    setDocument(''); // Limpa o campo do documento
  };


  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }
    if (!name || !document || !address || !email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const userData = {
      profile,
      name,
      document,
      full_address: address,
      email,
      password,
    };

    try {
      const response = await axios.post(
        process.env.EXPO_PUBLIC_API_IP + '/register',
        userData
      );

      setTimeout(() => {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        console.log(response.data);
        navigation.navigate('Home');
      }, 2000);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível cadastrar o usuário. Tente novamente.'
      );
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Criar Usuário</Text>

          <View style={styles.pickerContainer}>
            <TouchableOpacity
              onPress={() => handleProfileChange('motorista')}
              style={[
                styles.iconButton,
                profile === 'motorista' && styles.selected,
              ]}
            >
              <Icon
                name="motorcycle"
                size={30}
                color={profile === 'motorista' ? '#FFF' : '#000'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleProfileChange('filial')}
              style={[
                styles.iconButton,
                profile === 'filial' && styles.selected,
              ]}
            >
              <Icon
                name="store"
                size={30}
                color={profile === 'filial' ? '#FFF' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />

          {/* Campo com máscara dinâmica */}
          <TextInputMask
            type={profile === 'motorista' ? 'cpf' : 'cnpj'}
            value={document}
            onChangeText={setDocument}
            style={styles.input}
            placeholder={profile === 'motorista' ? 'CPF' : 'CNPJ'}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Endereço Completo"
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.sectionTitle}>Dados de login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    borderWidth: 2,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
  },
  selected: {
    backgroundColor: '#2C8C8C',
    borderColor: '#2C8C8C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#2C8C8C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserRegisterScreen;

