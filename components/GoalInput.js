import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState("");
  const goalInputHandler = enteredText => {
    setGoal(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          style={styles.input}
          placeholder="Add your goal"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => {
                props.addGoal(goal);
                setGoal("");
              }}
              // Use arrow function to pass the 'goal' data to props
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
