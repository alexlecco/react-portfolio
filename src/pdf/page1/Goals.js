import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Goals({ data, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Professional Goals</Text>
      {data.goals.map(goal => (
        <Text key={goal} style={styles.sectionItem}>
          • {goal}
        </Text>
      ))}
    </View>
  );
}

export default Goals;
