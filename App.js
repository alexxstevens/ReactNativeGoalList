import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //default goals
  const [courseGoals, setCourseGoals] = useState([]);

  //header
  const theHead = useState("Create a Goal List")
  //info
  const theInfo = useState("Add your goals below. Touch a goal to delete.")

  const addGoalHandler = goalTitle => {
    //assign random id number to goal (uid)
    setCourseGoals(currentGoals => [...courseGoals, {uid: Math.random().toString(), value: goalTitle}]);}
    
    //OR
    //setCourseGoals([...courseGoals, enteredGoal]);
  
    //delete a goal when touched
    const removeGoalHandler = (goalId) => {
      console.log("in handler");
      setCourseGoals((currentGoals) => {
        console.log(currentGoals.filter((goal)=> goal.uid !== goalId));
        return currentGoals.filter((goal) => goal.uid !== goalId);
      });
    };

    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          {/* //top header */}
          <Text style={styles.head}>
            {theHead}
          </Text>
            <Text style={styles.info}>
            {theInfo}
          </Text>
        </View>
        <GoalInput onAddGoal = {addGoalHandler} />
        {/* display goal list */}
        <FlatList 
          keyExtractor={(item, index) => item.uid}
          data={courseGoals} 
          renderItem={(itemData) => (
            <GoalItem 
            //id={itemData.item.uid} - NOT WORKING
              //delete matching goal 
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
    paddingTop: 70,
    padding: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  header: {
    padding: 15,
    backgroundColor: 'lightblue',
  },
  head: {
    fontSize: 40,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold',

  },
  info: {
    color: 'mintcream',
    fontStyle: 'italic',
    fontSize: 20,
  },
});
