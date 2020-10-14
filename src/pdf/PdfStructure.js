import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import Presentation from "./page1/Presentation";
import Profile from "./page1/Profile";
import Goals from "./page1/Goals";
import Studies from "./page1/Studies";
import Skills from "./page2/Skills";
import Laguages from "./page3/Laguages";
import Experience from "./page3/Experience";
import Mentoring from "./page4/Mentoring";

const PdfStructure = ({ data }) => {
  return (
    <Document
      author='Alex Villecco'
      subject='Resume of Alex'
      title='Alex Villecco resume'
    >
      <Page style={styles.page}>
        <Presentation data={data} styles={styles} />
        <Profile data={data} styles={styles} />
        <Goals data={data} styles={styles} />
        <Studies data={data} styles={styles} />
      </Page>

      <Page style={styles.page}>
        <Skills data={data} styles={styles} />
      </Page>

      <Page style={styles.page}>
        <Laguages data={data} styles={styles} />
        <Experience data={data} styles={styles} />
      </Page>

      <Page style={styles.pageTop}>
        <Mentoring data={data} styles={styles} />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  documentTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  page: {
    flex: 1,
    justifyContent: "space-around",
    padding: 60,
    color: "#8D8F8D",
    fontSize: 15,
  },
  pageTop: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 60,
    color: "#8D8F8D",
    fontSize: 15,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  midSectionContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  midSection: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "50%",
    height: 200,
    paddingRight: 20,
  },
  sectionTitle: {
    color: "#FF006B",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  sectionItem: {
    marginBottom: 10,
  },
  sectionSubitem: {
    marginBottom: 5,
    paddingLeft: 7,
  },
  sectionSubtitle: {
    color: "#811ADA",
    marginBottom: 10,
  },
  image: {
    width: "20",
    backgroundColor: "grey",
    marginRight: 5,
  },
});

export default PdfStructure;
