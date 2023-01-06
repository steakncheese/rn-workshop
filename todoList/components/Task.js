import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default Task;
