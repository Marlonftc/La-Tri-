import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native';
import PlayerCard from '../components/PlayerCard';
import HighlightCard from '../components/HighlightCard';
import players from '../data/players';
import highlights from '../data/highlights';

// HomeScreen principal: encabezado, datos básicos, convocados y destacados
export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { key: 'home', label: 'Home' },
    { key: 'espana', label: 'España' },
    { key: 'about', label: 'Acerca de ' },
  ];

  const handleAlentar = () => {
    Alert.alert('Alentar a la tri');
  
   
  };

  // Agrupar por 'categoria' (campo presente en src/data/players.js)
  const grouped = players.reduce((acc, p) => {
    const key = p.categoria || p.posicion || 'Otros';
    (acc[key] = acc[key] || []).push(p);
    return acc;
  }, {});

  return (
    <View style={[styles.root, { paddingTop: StatusBar.currentHeight || 24 }]}> 
      <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
        {activeTab === 'home' ? (
          <>
            {/* Encabezado con logo y títulos */}
            <View style={styles.headerBox}>
              <Text style={styles.title}>Segundo Lugar</Text>
              <Image source={require('../../assets/Argentina.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>Selección Argentina de Fútbol</Text>
              <Text style={styles.subtitle}>La Albiceleste</Text>
            </View>

            {/* Información básica */}
            <View style={styles.infoBox}>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Confederación: </Text>CONMEBOL</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Entrenador: </Text>L.Scaloni</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Capitan: </Text>L.Messi</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Estadio: </Text>Estadio Monumental</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Apodo: </Text>La Albiceleste</Text>

            </View>

            <View style={{ height: 36 }} />
          </>
        ) : activeTab === 'espana' ? (
          <>
            {/* Encabezado con logo y títulos */}
            <View style={styles.headerBox}>
              <Text style={styles.title}>Campeona del Mundo</Text>
              <Image source={require('../../assets/España.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>Selección España de Fútbol</Text>
              <Text style={styles.subtitle}>La Roja</Text>
            </View>

            {/* Información básica */}
            <View style={styles.infoBox}>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Confederación: </Text>UEFA</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Entrenador: </Text>L. de la Fuente</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Estadio: </Text>Santiago Bernabéu</Text>
              <Text style={styles.infoItem}><Text style={styles.infoLabel}>Apodo: </Text>La Roja</Text>

            </View>

            <View style={{ height: 36 }} />
          </>
            
        ) : (
          <View style={styles.contentCard}>
            <Text style={styles.sectionTitle}>Acerca de</Text>
            <Text style={styles.contentText}>Marlon Tituaña</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.navItem, isActive && styles.navItemActive]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.navText, isActive && styles.navTextActive]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scroll: {
    flex: 1,
  },
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 90,
    backgroundColor: '#F8F8F8',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingTop: 8,
    paddingBottom: 50,
    paddingHorizontal: 10,
    marginBottom: 0,
    position: 'relative',
  },
  navItem: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  navItemActive: {
    backgroundColor: '#f3f3f3',
  },
  navText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 14,
  },
  navTextActive: {
    color: '#a00000',
    fontWeight: '700',
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
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  contentText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
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
