import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';

// SplashScreen con animaciones: fade + scale para logo, aparición de texto
export default function SplashScreen({ onFinish }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.6)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const stripesTranslate = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    // Animaciones en paralelo: fondo/ franjas entran, logo hace fade+scale, texto aparece después
    Animated.parallel([
      Animated.timing(stripesTranslate, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Llamar onFinish después de ~3s
    const timeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [opacity, scale, textOpacity, stripesTranslate, onFinish]);

  return (
    <View style={styles.container}>
      {/* Franjas de color con suave entrada desde abajo */}
      <Animated.View style={[styles.stripes, { transform: [{ translateY: stripesTranslate }] }]}>
        <View style={styles.yellow} />
        <View style={styles.blue} />
        <View style={styles.red} />
      </Animated.View>

      {/* Contenido centrado sobre las franjas */}
      <View style={styles.content} pointerEvents="none">
        <Animated.Image
          source={require('../../assets/cne.png')}
          style={[styles.logo, { opacity: opacity, transform: [{ scale: scale }] }]}
          resizeMode="contain"
        />

        <Animated.Text style={[styles.title, { opacity: textOpacity }]}>Bienvenido/a</Animated.Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stripes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  yellow: {
    flex: 2,
    backgroundColor: '#eeff00',
  },
  blue: {
    flex: 1,
    backgroundColor: '#040539',
  },
  red: {
    flex: 1,
    backgroundColor: '#ff0505',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  logo: {
    width: Math.min(width * 0.6, 260),
    height: Math.min(height * 0.35, 260),
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0033A0',
    letterSpacing: 1,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
  },
});
