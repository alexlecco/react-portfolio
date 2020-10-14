import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Experience({ data, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      {data.experience.map(job =>
        job.description ? (
          <Text key={job.description} style={styles.sectionItem}>
            • {job.description}
          </Text>
        ) : (
          <View key={job.company}>
            <Text style={styles.sectionItem}>• {job.company}</Text>
            {job.projects.map(project => (
              <Text
                key={project.client}
                style={{ marginLeft: 20, marginBottom: 12 }}
              >
                • {project.client}, {project.time}: {project.description}
              </Text>
            ))}
          </View>
        )
      )}
    </View>
  );
}

export default Experience;
