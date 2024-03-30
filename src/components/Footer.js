import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Incredible ToDo List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#eee',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#333',
  },
});

export default Footer;
