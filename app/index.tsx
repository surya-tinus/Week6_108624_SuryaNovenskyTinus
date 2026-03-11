import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomTextInput from "./CustomTextInput";

export default function Index() {

  const [name, setName] = useState("");

  const handleChangeMyName = (value: string) => {
    setName(value);
  }

  return (
    <View style={styles.container}>
      <Text>{name} - 00000108624</Text>
      <CustomTextInput input={name} onChange={handleChangeMyName} />
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