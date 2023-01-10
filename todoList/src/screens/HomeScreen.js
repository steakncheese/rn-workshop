import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import chefGreg from "../img/chef-greg.png";

const HomeScreen = () => {
  return (
    <View style={styles.containerHome}>
      <Image
        source={chefGreg}
        resizeMode="cover"
        style={{
          width: 300,
          height: 300,
          borderColor: "#379540",
          borderRadius: 30,
          borderWidth: 10,
          // borderStartWidth: 10,
          marginTop: 60,
          padding: 0,
        }}
      ></Image>
      <View style={styles.parentView}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Chef Greg: </Text>
          <Text>
            I'm looking for a chef to join my crew and help create amazing meals
            for our guests. No experience required in creating delicious dishes.
            Just bring your creativity and flair to the table.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentView: {
    width: "85%",
    marginTop: 40,
    marginHorizontal: 10,
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3FAD9",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
