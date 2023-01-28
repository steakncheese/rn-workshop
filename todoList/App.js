import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Detail from "./src/screens/Detail";
import PantryNav from "./src/screens/MyPantry/_PantryNav";
import PlanNav from "./src/screens/PlanDinner/_PlanNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Recipe Nav"
        options={{ headerShown: false }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipe") {
              iconName = focused ? "restaurant" : "restaurant";
            } else if (route.name === "Account") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Plan Meal") {
              iconName = focused ? "calendar" : "calendar";
            } else if (route.name === "Pantry") {
              iconName = focused ? "fast-food" : "fast-food";
            } else if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#D3FAD9",
          tabBarInactiveTintColor: "#47c053",
          tabBarStyle: { backgroundColor: "#333333", height: "8%" },
          tabBarLabelStyle: { fontSize: 12, height: 25, marginTop: -10 },
        })}
      >
        <Tab.Screen name="Account">
          {(props) => <AccountNav {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Plan Meal">
          {(props) => <PlanNav {...props} recipeList={selectedRecipesList} />}
        </Tab.Screen>
        <Tab.Screen name="Home">{(props) => <Home {...props} />}</Tab.Screen>
        <Tab.Screen name="Recipe">
          {(props) => (
            <RecipeNav
              {...props}
              ingredientList={ingredientList}
              selectedRecipesList={selectedRecipesList}
              setSelectedRecipesList={setSelectedRecipesList}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Pantry">
          {(props) => (
            <PantryNav
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
