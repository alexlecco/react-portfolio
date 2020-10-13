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
        <Presentation data={data} />
        <Profile data={data} />
        <Goals data={data} />
        <Studies data={data} />
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 30
  }
})

export default PdfStructure
