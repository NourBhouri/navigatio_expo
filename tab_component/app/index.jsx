import { Link, router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  TextInput,
} from "react-native";

export default function HomeScreen() {
  const [userName, setUserName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Enter your username"
      />
      {
        <Link href="/details" asChild>
          <Pressable>
            <Text style={styles.link}>View details</Text>
          </Pressable>
        </Link>
      }
      <Button
        title="View details"
        onPress={() => {
          router.push({ pathname: "/(tabs)", params: { userName } });
          setUserName("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
