import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

interface CustomProps {
    input: string;
    onChange: (val: string) => void;
}

const CustomTextInput = ({
    input,
    onChange
}: CustomProps) => {
    console.log(input);
    return (
        <View>
            <Text>Input: {input}</Text>
            <TextInput
            placeholder="Type something..."
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

export default CustomTextInput;