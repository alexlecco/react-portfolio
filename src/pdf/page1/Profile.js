import React from 'react'
import { View, Text } from "@react-pdf/renderer";

function Profile({data}) {
  return (
    <View>
      <Text>Professional Profile</Text>
      <Text>I'm a {data.profile}</Text>
    </View>
  )
}

export default Profile
