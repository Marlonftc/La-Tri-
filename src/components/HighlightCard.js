import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// HighlightCard compacto: pensado para 2 columnas (48% width)
export default function HighlightCard({ item }) {
  const bg = item.bg || '#0033A0';
  const isLightBg = String(bg).toLowerCase() === '#ffd100' || String(bg).toLowerCase() === 'yellow';
  const textColor = isLightBg ? '#111' : '#ff71d7';

  return (
    <View style={[styles.card, { backgroundColor: bg }]}
      accessible
      accessibilityRole="summary">
      <Text style={[styles.value, { color: textColor }]} numberOfLines={1} ellipsizeMode="tail">{item.value}</Text>
      <Text style={[styles.label, { color: textColor }]} numberOfLines={2} ellipsizeMode="tail">{item.label}</Text>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = width >= 420 ? '48%' : '48%';

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: 78,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
});
