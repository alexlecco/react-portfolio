import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Profile({data, styles}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Professional Profile</Text>
      <Text>I'm a {data.profile}</Text>
    </View>
  )
}

export default Profile
