import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import styles from "../styles/GameDetailStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;
  const [wishlist, setWishlist] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.platform}>{game.platform}</Text>
        <Text style={styles.gender}>{game.gender}</Text>
        <Text style={styles.price}>${game.price}</Text>
        <Text style={styles.age}>{game.ageRating}</Text>
        <Text style={styles.description}>{game.description}</Text>
      </View>

      <Button
        title={wishlist ? "REMOVE" : "ADD"}
        onPress={() => setWishlist(!wishlist)}
        color="#8ec5ff"
      />
      <Button title="BACK" onPress={() => navigation.goBack()} color="#cad5e2" />
    </SafeAreaView>
  );
};

export default GameDetailScreen;