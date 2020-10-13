import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Goals({data}) {
  return (
    <View>
      <Text>Professional Goals</Text>
      {data.goals.map(goal => (
        <Text>{goal}</Text>
      ))}
    </View>
  )
}

export default Goals