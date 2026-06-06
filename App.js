import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// App principal: muestra una Splash por 3 segundos y luego la Home
export default function App() {
  // Estado para controlar si se muestra la Splash
  const [showSplash, setShowSplash] = useState(true);

  // Efecto que oculta la Splash después de 3 segundos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  // Mostrar Splash o Home según el estado
  return showSplash ? <Splash /> : <Home />;
}

// Componente Splash: fondo con los colores de Ecuador y logo
function Splash() {
  return (
    <View style={styles.splashContainer}>
      {/* Tres franjas de color: amarillo, azul, rojo */}
      <View style={styles.stripes}>
        <View style={styles.yellow} />
        <View style={styles.blue} />
        <View style={styles.red} />
      </View>

      {/* Contenido centrado encima de las franjas */}
      <View style={styles.splashContent}>
        <Image source={require('./assets/logo-ecuador.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.splashText}>Ecuador - La Tri</Text>
      </View>
    </View>
  );
}

// Componente Home: muestra la información y el botón con alerta
function Home() {
  const handlePress = () => {
    Alert.alert('¡Vamos Ecuador, sí se puede!');
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Selección Ecuatoriana de Fútbol</Text>
      <Image source={require('./assets/logo-ecuador.png')} style={styles.logoHome} resizeMode="contain" />

      <View style={styles.infoList}>
        <Text style={styles.infoItem}><Text style={styles.infoLabel}>Confederación: </Text>CONMEBOL</Text>
        <Text style={styles.infoItem}><Text style={styles.infoLabel}>Entrenador actual: </Text>Sebastián Beccacece</Text>
        <Text style={styles.infoItem}><Text style={styles.infoLabel}>Estadio: </Text>Estadio Rodrigo Paz Delgado (Quito)</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Alentar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  // Splash
  splashContainer: {
    flex: 1,
  },
  stripes: {
    flex: 1,
  },
  yellow: {
    flex: 2,
    backgroundColor: '#FFD100', // amarillo Ecuador
  },
  blue: {
    flex: 1,
    backgroundColor: '#0033A0', // azul
  },
  red: {
    flex: 1,
    backgroundColor: '#CE1126', // rojo
  },
  splashContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 12,
  },
  splashText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },

  // Home
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  homeTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  logoHome: {
    width: 140,
    height: 140,
    marginBottom: 16,
  },
  infoList: {
    width: '100%',
    marginBottom: 20,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#222',
  },
  infoLabel: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#0033A0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
