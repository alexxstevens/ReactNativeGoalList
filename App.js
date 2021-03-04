import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, {uid: Math.random().toString(), value: goalTitle}]);}
    //OR
    //setCourseGoals([...courseGoals, enteredGoal]);
  
    const removeGoalHandler = (goalId) => {
      console.log("in handler");
      setCourseGoals((currentGoals) => {
        console.log(currentGoals.filter((goal)=> goal.uid !== goalId));
        return currentGoals.filter((goal) => goal.uid !== goalId);
      });
    };

    return (
      <View style={styles.screen}>
        <GoalInput onAddGoal = {addGoalHandler} />
        <FlatList 
          keyExtractor={(item, index) => item.uid}
          data={courseGoals} 
          renderItem={(itemData) => (
            <GoalItem 
            //id={itemData.item.uid} - NOT WORKING
              onDelete={removeGoalHandler.bind(this, itemData.item.uid)}
              title={itemData.item.value}
            />
        )}
        /> 


      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
