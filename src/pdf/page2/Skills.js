import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Skills({data, styles}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      {data.skills.map(skill => {
        return(
          <View style={styles.sectionItem}>
            <Text key={skill} style={styles.sectionSubtitle}>• {skill.name}</Text>
            {skill.list.map(tech => (
              <Text style={styles.sectionSubitem}>{tech}</Text>
            ))}
          </View>
        )
      })}
    </View>
  )
}

export default Skills
