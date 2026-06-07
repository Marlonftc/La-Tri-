import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native';
import PlayerCard from '../components/PlayerCard';
import HighlightCard from '../components/HighlightCard';
import players from '../data/players';
import highlights from '../data/highlights';

// HomeScreen principal: encabezado, datos básicos, convocados y destacados
export default function HomeScreen() {
  const handleAlentar = () => {
    Alert.alert('¡Vamos Ecuador, sí se puede!');
  };

  // Agrupar por 'categoria' (campo presente en src/data/players.js)
  const grouped = players.reduce((acc, p) => {
    const key = p.categoria || p.posicion || 'Otros';
    (acc[key] = acc[key] || []).push(p);
    return acc;
  }, {});

  return (
    <View style={[styles.root, { paddingTop: StatusBar.currentHeight || 24 }]}> 
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado con logo y títulos */}
        <View style={styles.headerBox}>
          <Image source={require('../../assets/logo-ecuador.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Selección Ecuatoriana de Fútbol</Text>
          <Text style={styles.subtitle}>La Tri</Text>
        </View>

        {/* Información básica */}
        <View style={styles.infoBox}>
          <Text style={styles.infoItem}><Text style={styles.infoLabel}>Confederación: </Text>CONMEBOL</Text>
          <Text style={styles.infoItem}><Text style={styles.infoLabel}>Entrenador: </Text>Sebastián Beccacece</Text>
          <Text style={styles.infoItem}><Text style={styles.infoLabel}>Estadio: </Text>Estadio Rodrigo Paz Delgado (Quito)</Text>
          <Text style={styles.infoItem}><Text style={styles.infoLabel}>Apodo: </Text>La Tri</Text>
        </View>

        {/* Botón interactivo pequeño y elegante */}
        <TouchableOpacity style={styles.cheerButton} onPress={handleAlentar} activeOpacity={0.85}>
          <Text style={styles.cheerText}>Alentar a La Tri</Text>
        </TouchableOpacity>

        {/* Datos destacados en 2 columnas */}
        <Text style={styles.sectionTitle}>Datos destacados</Text>
        <View style={styles.highlightsRow}>
          {highlights.map((h) => (
            <HighlightCard key={h.id} item={h} />
          ))}
        </View>

        {/* Convocados */}
        <Text style={styles.sectionTitle}>Convocados de La Tri</Text>
        {/* Mostrar por sección en orden: Arqueros, Defensas, Mediocampistas, Delanteros */}
        {['Arqueros', 'Defensas', 'Mediocampistas', 'Delanteros'].map((section) => (
          grouped[section] ? (
            <View key={section} style={styles.positionSection}>
              <Text style={styles.positionTitle}>{section}</Text>
              <View style={styles.playersRow}>
                {grouped[section].map((p) => (
                  <PlayerCard key={p.id} player={p} />
                ))}
              </View>
            </View>
          ) : null
        ))}

        {/* Espacio final */}
        <View style={{ height: 36 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#F8F8F8',
  },
  headerBox: {
    alignItems: 'center',
    marginBottom: 14,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
    paddingHorizontal: 12,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  infoItem: {
    fontSize: 15,
    marginBottom: 6,
  },
  infoLabel: {
    fontWeight: '700',
  },
  cheerButton: {
    backgroundColor: '#0033A0',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 14,
  },
  cheerText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: 0.6,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 8,
  },
  highlightsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  positionSection: {
    marginBottom: 12,
  },
  positionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0033A0',
    marginBottom: 8,
  },
  playersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
