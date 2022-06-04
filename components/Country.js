import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View style={styles.countryCenter}>
          <Text style={styles.countryName}>{country?.name?.common}</Text>
          <Image
              source={{ uri: country?.flags?.png }}
              style={{ width: 200, height: 200 }}
          />
    </View>
  )
};

const styles = StyleSheet.create({
    countryName: {
        color: 'red'
    },
    countryCenter: {
        paddingLeft: '25%',
    }
});