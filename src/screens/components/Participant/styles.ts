import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  Name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
});
