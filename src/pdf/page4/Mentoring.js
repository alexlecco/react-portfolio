import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Mentoring({ data, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Mentoring Experience</Text>
      {data.mentoring.map(course => (
        <Text key={course} style={styles.sectionItem}>
          • {course}
        </Text>
      ))}
    </View>
  );
}

export default Mentoring;
