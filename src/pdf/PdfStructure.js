import React from 'react'
import {
  Page,
  Text,
  Document,
} from "@react-pdf/renderer";

const PdfStructure = ({data}) => {
  return (
    <Document
      author="Alex Villecco"
      subject="Resume of Alex"
      title="Alex Villecco resume"
    >
      <Page>
        <Text>Hi! i'm {data.name}</Text>
        <Text>I live in Tucumán, Argentina</Text>
        <Text>I'm 30 years old</Text>
        <Text>my phone: +54 381 153844535</Text>
        <Text>my email:​ alexlecco24@gmail.com</Text>
      </Page>
    </Document>
  )
}

export default PdfStructure
