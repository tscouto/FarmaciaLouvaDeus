// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import Header from './Header'; // Verifique se o caminho está correto
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const MovementListScreen = ({ navigation, route }) => {
//   const [movements, setMovements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovements = async () => {
//       try {
//         const response = await fetch(`${process.env.EXPO_PUBLIC_API_IP}/movements`);
//         if (!response.ok) throw new Error('Erro ao carregar as movimentações.');
        
//         const data = await response.json();
//         setMovements(data);
//       } catch (err) {
//         setError(err.message);
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovements();

//     if (route.params?.newMovement) {
//       setMovements((prevMovements) => [...prevMovements, route.params.newMovement]);
//     }
//   }, [route.params?.newMovement]);

//   const renderMovement = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.label}>Origem:</Text>
//       <Text style={styles.value}>{item.origem?.nome || 'Não especificado'}</Text>

//       <Text style={styles.label}>Destino:</Text>
//       <Text style={styles.value}>{item.destino?.nome || 'Não especificado'}</Text>

//       <Text style={styles.label}>Produto:</Text>
//       <Text style={styles.value}>{item.produto?.nome || 'Não especificado'}</Text>

//       <Text style={styles.label}>Quantidade:</Text>
//       <Text style={styles.value}>{item.quantity}</Text>

//       <Text style={styles.label}>Status:</Text>
//       <Text style={styles.value}>{item.status}</Text>
//     </View>
//   );

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('user');
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Header userName="Usuário" onLogout={handleLogout} />

//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => navigation.navigate('Movement')}
//       >
//         <Text style={styles.addButtonText}>Adicionar Nova Movimentação</Text>
//       </TouchableOpacity>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00796b" />
//       ) : error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : (
//         <FlatList
//           data={movements}
//           keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
//           renderItem={renderMovement}
//           contentContainerStyle={styles.list}
//           ListEmptyComponent={
//             <Text style={styles.emptyMessage}>Nenhuma movimentação encontrada.</Text>
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     paddingTop: 80,
//   },
//   addButton: {
//     backgroundColor: '#00796b',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   card: {
//     backgroundColor: '#e0f2f1',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#00796b',
//   },
//   label: {
//     fontWeight: 'bold',
//     color: '#00796b',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 14,
//     color: '#616161',
//     marginBottom: 10,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   emptyMessage: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#616161',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
// });

// export default MovementListScreen;


import React, { useEffect, useState } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, 
  StyleSheet, ActivityIndicator 
} from 'react-native';
import Header from './Header'; // Verifique se o caminho está correto
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovementListScreen = ({ navigation, route }) => {
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar as movimentações do servidor
  const fetchMovements = async () => {
    setLoading(true); // Exibe o loader enquanto carrega
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_IP}/movements`);
      if (!response.ok) throw new Error('Erro ao carregar as movimentações.');

      const data = await response.json();
      setMovements(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Listener para recarregar a lista quando a tela ganhar foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchMovements);
    return unsubscribe; // Remove o listener ao desmontar o componente
  }, [navigation]);

  // Atualiza a lista se uma nova movimentação for adicionada
  useEffect(() => {
    if (route.params?.newMovement) {
      setMovements((prevMovements) => [...prevMovements, route.params.newMovement]);
    }
  }, [route.params?.newMovement]);

  // Função de logout
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login'); // Redireciona para a tela de login
  };

  // Função para renderizar cada movimentação
  const renderMovement = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Origem:</Text>
      <Text style={styles.value}>{item.origem?.nome || 'Não especificado'}</Text>

      <Text style={styles.label}>Destino:</Text>
      <Text style={styles.value}>{item.destino?.nome || 'Não especificado'}</Text>

      <Text style={styles.label}>Produto:</Text>
      <Text style={styles.value}>{item.produto?.nome || 'Não especificado'}</Text>

      <Text style={styles.label}>Quantidade:</Text>
      <Text style={styles.value}>{item.quantity}</Text>

      <Text style={styles.label}>Status:</Text>
      <Text style={styles.value}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header userName="Usuário" onLogout={handleLogout} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Movement')}
      >
        <Text style={styles.addButtonText}>Adicionar Nova Movimentação</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#00796b" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={movements}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovement}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>Nenhuma movimentação encontrada.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 80,
  },
  addButton: {
    backgroundColor: '#2bc96d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#e0f2f1',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2bc96d',
  },
  label: {
    fontWeight: 'bold',
    color: '#2bc96d',
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: '#616161',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#616161',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default MovementListScreen;
