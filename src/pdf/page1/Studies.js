import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Studies({data, styles}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>My studies</Text>
      <Text>{data.studies}</Text>
    </View>
  )
}

export default Studies
