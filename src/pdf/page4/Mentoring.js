import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Mentoring({ data, styles, t }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("mentoring.title")}</Text>
      {data.mentoring.map(course => (
        <Text key={course} style={styles.sectionItem}>
          • {course}
        </Text>
      ))}
    </View>
  );
}

export default Mentoring;
