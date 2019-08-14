import React, { useState } from "react";
import { StyleSheet, View, Button, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setAddModal(false);
  };

  const deleteGoal = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        visible={addModal}
        addGoal={addGoalHandler}
        cancel={() => setAddModal(false)}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        style={{ height: "30%" }}
        renderItem={itemData => (
          // itemData will return an object contain index, item, separators
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={deleteGoal}
          />
        )}
      />
      <Button
        style={styles.addButton}
        title="Add Goal"
        onPress={() => setAddModal(true)}
      />
      {/* ScrollView render ALL element, not good a lot of data. Use FlatList instead. */}
      {/* <ScrollView style={{ height: "30%" }}>
        {courseGoals.map((goal, index) => (
          <View style={styles.listItem} key={index}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50
  },
  addButton: {
    justifyContent: "flex-end"
  }
});
