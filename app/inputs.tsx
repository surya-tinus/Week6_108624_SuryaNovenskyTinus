import { View, Text, TextInput } from "react-native";

interface CustomProps {
  input: string;
  onChange: (val: string) => void;
}

export const NIMInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 200 }}>
      <Text>NIM</Text>
      <TextInput
        placeholder="Type NIM..."
        value={input}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 8,
          borderRadius: 8,
        }}
        onChangeText={onChange}
        keyboardType="numeric"
      />
    </View>
  );
};

export const CustomTextInput = ({ input, onChange }: CustomProps) => {
  return (
    <View style={{ width: 200 }}>
      <Text>Name</Text>
      <TextInput
        placeholder="Type name..."
        value={input}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 8,
          borderRadius: 8,
        }}
        onChangeText={onChange}
      />
    </View>
  );
};