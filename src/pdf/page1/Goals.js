import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Goals({ data, styles, t }) {
  const getGoalText = goal => (data.language === "english" ? goal.en : goal.es);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("goals.title")}</Text>
      {data.goals.map((goal, index) => {
        return (
          <Text key={index} style={styles.sectionItem}>
            • {getGoalText(goal)}
          </Text>
        );
      })}
    </View>
  );
}

export default Goals;
