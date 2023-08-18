import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem : {
    opacity: 0.5,
  },
  goalItem: {
    color: "white",
    padding: 8,
  },
});

/** 
 * object destructuring
 * style={({pressed}) => } is the same as style={(item) => item.pressed}
 *  **/
