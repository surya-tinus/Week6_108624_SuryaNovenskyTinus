import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CustomTextInput, NIMInput } from "./inputs"

export default function Index() {

  const [name, setName] = useState("");

  const handleChangeMyName = (value: string) => {
    setName(value);
  }

  const [NIM, setNIM] = useState("")

  const handleChangeMyNIM = (value: string) => {
    setNIM(value);
  }

  return (
    <View style={styles.container}>
      <Text>{name} - {NIM}</Text>
      <CustomTextInput input={name} onChange={handleChangeMyName} />
      <NIMInput input={NIM} onChange={handleChangeMyNIM}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  }
})