import { StyleSheet, Text, View } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItem: {
    color: "white",
  },
});
