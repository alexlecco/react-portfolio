import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Profile({ data, styles, t }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("profile.title")}</Text>
      <Text>{`${t("profile.imA")} ${data.profile}`}</Text>
    </View>
  );
}

export default Profile;
