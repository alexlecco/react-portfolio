import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Languages({ data, styles, t }) {
  const getLanguage = language =>
    data.language === "english" ? language.en : language.es;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("languages.title")}</Text>
      {data.languages.map((language, index) => (
        <Text key={index} style={styles.sectionItem}>
          • {getLanguage(language)}
        </Text>
      ))}
    </View>
  );
}

export default Languages;
