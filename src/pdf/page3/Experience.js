import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Experience({ data, styles }) {
  const getDescription = description =>
    data.language === "english" ? description.en : description.es;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      {data.experience.map((job, index) =>
        job.description ? (
          <Text key={index} style={styles.sectionItem}>
            • {getDescription(job.description)}
          </Text>
        ) : (
          <View key={job.company}>
            <Text style={styles.sectionItem}>• {job.company}</Text>
            {job.projects.map(project => (
              <Text
                key={project.client}
                style={{ marginLeft: 20, marginBottom: 12 }}
              >
                • {project.client}, {project.time}:{" "}
                {getDescription(project.description)}
              </Text>
            ))}
          </View>
        )
      )}
    </View>
  );
}

export default Experience;
