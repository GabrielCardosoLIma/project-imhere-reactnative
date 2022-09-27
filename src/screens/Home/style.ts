import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 18,
  },
  Input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 4,
    color: "#fff",
    fontSize: 14,
    padding: 16,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  Form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 34,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 18,
  },
  TitleList: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 42,
    marginBottom: 16,
    fontFamily: 'Roboto_700Bold'
  }
});
