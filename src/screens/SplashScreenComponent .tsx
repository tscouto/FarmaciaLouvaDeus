import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Impede que a SplashScreen desapareça automaticamente

const SplashScreenComponent = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current; // Inicializa a opacidade

  useEffect(() => {
    const prepare = async () => {
      // Exibe a SplashScreen
      await SplashScreen.hideAsync();

      // Começa a animação após a tela estar oculta
      Animated.timing(opacity, {
        toValue: 1,
        duration: 10000, // Duração da animação de entrada (10 segundos)
        useNativeDriver: true,
      }).start();

      // Espera mais 2 segundos após a animação
      setTimeout(() => {
        navigation.replace('Login'); // Navega para a tela de login
      }, 12000); // Total de 10000ms (animação) + 2000ms (exibição adicional)
    };

    prepare();
  }, [navigation]);

  return (
    <View
      style={styles.container}
    >
      <Animated.View style={{ opacity }}>
        <Image
          source={require('../../assets/iconelouvaDeus2.png')} // Certifique-se do caminho
          style={{ width: 200, height: 200, resizeMode: 'contain' }} // Ajuste o tamanho conforme necessário
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreenComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefff2',
    }
})
