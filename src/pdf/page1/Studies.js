import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Studies({data}) {
  return (
    <View>
      <Text>My studies</Text>
      <Text>{data.studies}</Text>
    </View>
  )
}

export default Studies
