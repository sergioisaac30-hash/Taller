import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#245266",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  platform: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  age: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
});  