import React from 'react'
import { View, Text, Image } from "@react-pdf/renderer";

const getSocialNetwork = network => {
  return(
    network.name !== 'gmail' ?
      <View style={{flex: 1, flexDirection: 'row'}} key={network.name}>
        <Image src={`"${network.icon}"`} />
        <Text>{network.url}</Text>
      </View>
    :
      null
  )
}

function Presentation({data}) {
  return (
    <View>
      <Text>Hi! i'm {data.name}</Text>
      <Text>I live in Tucumán, Argentina</Text>
      <Text>I'm 30 years old</Text>
      <Text>my phone: +54 381 153844535</Text>
      <Text>my email:​ alexlecco24@gmail.com</Text>
      <Text>...get to know me a bit more</Text>
      {data.social.map(network => (
        getSocialNetwork(network)
      ))}
    </View>
  )
}

export default Presentation
