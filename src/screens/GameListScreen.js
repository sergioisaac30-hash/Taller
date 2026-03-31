import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { gamesData } from "../Data/gamesd";
import styles from "../styles/GameListStyles";

const GameListScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGames(gamesData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("GameDetail", { game: item })}
            >
              <Text style={styles.text}>
                🎮 <Text style={styles.boldText}>{item.title}</Text> - {item.platform} ({item.gender})
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default GameListScreen;