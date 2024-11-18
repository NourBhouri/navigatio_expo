import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs, useLocalSearchParams } from "expo-router";

export default function TabLayout() {
  const { userName } = useLocalSearchParams();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
        initialParams={{ userName }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-details"
              size={28}
              color={color}
            />
          ),
        }}
        initialParams={{ userName }}
      />
    </Tabs>
  );
}
