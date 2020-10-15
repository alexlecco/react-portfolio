import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Skills({ data, styles, t }) {
  const getSkill = skill => (data.language === "english" ? skill.en : skill.es);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t("skills.title")}</Text>
      <View style={styles.midSectionContainer}>
        {data.skills.map((skill, skillIndex) => {
          return (
            <View style={styles.midSection} key={skillIndex}>
              <Text style={styles.sectionSubtitle}>• {getSkill(skill.name)}</Text>
              {skill.list.map((tech, techIndex) => (
                <Text style={styles.sectionSubitem} key={techIndex}>
                  • {tech}
                </Text>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Skills;
