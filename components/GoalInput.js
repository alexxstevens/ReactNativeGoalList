import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet } from 'react-native';

//user inout for new goal
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText)=> {
    setEnteredGoal(enteredText);
  };
  //add new goal
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
        <Button style={styles.buttonAdd} title="ADD"
        onPress={props.onAddGoal.bind(this, enteredGoal)}
        color="#B0C4DE"
        />
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
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10,
    fontSize: 20,
  },
})


export default GoalInput;