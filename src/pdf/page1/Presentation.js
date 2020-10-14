import React from "react";
import { View, Text, Image, Link } from "@react-pdf/renderer";

const getSocialNetwork = (network, styles) => {
  return network.name !== "gmail" ? (
    <View style={{ flex: 1, flexDirection: "row" }} key={network.name}>
      <View style={styles.image}>
        <Image src={network.icon} />
      </View>
      <Link style={{ color: "#37aef7" }}>{network.url}</Link>
    </View>
  ) : null;
};

const getAge = birthday => {
  const formattedBirthday = new Date(birthday.year, birthday.month, birthday.day);
  const diff_ms = Date.now() - formattedBirthday.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

function Presentation({ data, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.documentTitle}>
        Hi! i'm <Text style={{ color: "#811ADA" }}>{data.name}</Text>
      </Text>
      <Text>{`I live in ${data.city}, ${data.country}`}</Text>
      <Text>{`I'm ${getAge(data.birthday)} years old`}</Text>
      <Text>{`my phone: ${data.phone}`}</Text>
      <Text>
        my email:​ <Link style={{ color: "#37aef7" }}>{data.email}</Link>
      </Text>
      <Text style={{ fontWeight: 500, marginBottom: 5, marginTop: 10 }}>
        ...get to know me a bit more
      </Text>
      {data.social.map(network => getSocialNetwork(network, styles))}
    </View>
  );
}

export default Presentation;
