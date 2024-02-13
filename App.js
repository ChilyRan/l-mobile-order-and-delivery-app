import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import RestuarantScreen from "./screen/RestuarantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screen/BasketScreen";
import Test from "./screen/Test";
import PreparingOrderScreen from "./screen/PreparingOrderScreen";
import DeliveryScreen from "./screen/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestuarantScreen} />
          <Stack.Screen name="Test" component={Test} options={{ presentation: "modal" }} />
          <Stack.Screen name="Basket" component={BasketScreen}
            // options={{ presentation: "modal", }}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />

          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
