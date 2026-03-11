import { View, Text, TextInput } from "react-native";

interface CustomProps {
    input: string;
    onChange: (val: string) => void;
}

const NIMInput = ({
    input,
    onChange
}: CustomProps) => {
    console.log(input);
    return (
        <View style={{width: 200}}> 
        <Text>NIM</Text>
        <TextInput
        placeholder="Type something..."
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