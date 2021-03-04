import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet } from 'react-native';




const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText)=> {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, {uid: Math.random().toString(), value: goalTitle}]);
    //ORs
    //setCourseGoals([...courseGoals, enteredGoal]);
  }
  return(
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goals" 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD HERE"
        onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
);
};


const styles = StyleSheet.create({
  inputContainer: {
    padding: 30, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center"},
  input: {
    width: "80%",
    borderBottomColor: "black", 
    borderWidth: 1, 
    padding: 10
  },
})


export default GoalInput;