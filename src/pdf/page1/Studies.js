import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Studies({ data, styles, t }) {
  const getStudies = studies =>
    data.language === "english" ? studies.en : studies.es;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("studies.title")}</Text>
      <Text>{getStudies(data.studies)}</Text>
    </View>
  );
}

export default Studies;
