import React from 'react'
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import Presentation from './page1/Presentation';
import Profile from './page1/Profile';
import Goals from './page1/Goals';
import Studies from './page1/Studies';

const PdfStructure = ({data}) => {
  return (
    <Document
      author="Alex Villecco"
      subject="Resume of Alex"
      title="Alex Villecco resume"
    >
      <Page style={styles.page}>
        <Presentation data={data} styles={styles} />
        <Profile data={data} styles={styles} />
        <Goals data={data} styles={styles} />
        <Studies data={data} styles={styles} />
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  documentTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  page: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 60,
    color: '#8D8F8D',
    fontSize: 15
  },
  section: {
    marginTop: 20,
    marginBottom: 20
  },
  sectionTitle: {
    color: '#FF006B',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  sectionItem: {
    marginBottom: 3
  },
  image: {
    width: '20',
    backgroundColor: 'grey',
    marginRight: 5
  }
})

export default PdfStructure
