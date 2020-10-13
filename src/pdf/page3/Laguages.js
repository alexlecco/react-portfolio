import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Laguages({data, styles}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Languages</Text>
      {data.languages.map(language => (
        <Text key={language} style={styles.sectionItem}>• {language}</Text>
      ))}
    </View>
  )
}

export default Laguages
