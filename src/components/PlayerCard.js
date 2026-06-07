import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// PlayerCard rediseñada: 2 columnas, número en fila superior (no absolute)
export default function PlayerCard({ player }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.emojiBox}>
          <Text style={styles.emoji}>{player.emoji || player.nombre.charAt(0)}</Text>
        </View>
        <View style={styles.numBoxInline}>
          <Text style={styles.numText}>#{player.numero}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{player.nombre}</Text>
        <Text style={styles.position}>{player.posicion || player.position || ''}</Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = '48%';

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    // layout vertical: topRow then body
    flexDirection: 'column',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  emojiBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 16 },
  numBoxInline: {
    backgroundColor: '#0033A0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  numText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
  },
  body: {
    width: '100%',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  club: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  position: {
    fontSize: 11,
    color: '#0033A0',
    fontWeight: '700',
  },
});
