import React from "react";
import { View, Text } from "@react-pdf/renderer";

function Experience({ data, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Work Experience</Text>
      {data.experience.map(job =>
        job.description ? (
          <Text key={job} style={styles.sectionItem}>
            • {job.description}
          </Text>
        ) : (
          <View>
            <Text key={job} style={styles.sectionItem}>
              • {job.company}
            </Text>
            {job.projects.map(project => (
              <Text style={{ marginLeft: 20, marginBottom: 12 }}>
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
