import React from 'react'
import { View, Text, Image, Link } from "@react-pdf/renderer";

const getSocialNetwork = (network, styles) => {
  return(
    network.name !== 'gmail' ?
      <View style={{flex: 1, flexDirection: 'row'}} key={network.name}>
        <View
          style={styles.image}
        >
          <Image src={network.icon} />
        </View>
        <Link style={{color: '#37aef7'}}>{network.url}</Link>
      </View>
    :
      null
  )
}

function Presentation({data, styles}) {
  return (
    <View style={styles.section}>
      <Text style={styles.documentTitle}>Hi! i'm <Text style={{color: '#811ADA'}}>{data.name}</Text></Text>
      <Text>I live in Tucumán, Argentina</Text>
      <Text>I'm 31 years old</Text>
      <Text>my phone: +54 381 153844535</Text>
      <Text>my email:​ <Link style={{color: '#37aef7'}}>alexlecco24@gmail.com</Link></Text>
      <Text style={{ fontWeight: 500, marginBottom: 5, marginTop: 10  }}>...get to know me a bit more</Text>
      {data.social.map(network => (
        getSocialNetwork(network, styles)
      ))}
    </View>
  )
}

export default Presentation
