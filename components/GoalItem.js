import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//delete goal when goal item touched
const GoalItem = (props) => {
  return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.uid)}>
        <View style={styles.listItem}> 
         <Text style={styles.list}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      marginVertical: 5,
      backgroundColor: 'aliceblue',
      borderColor: 'white',
      borderWidth:1,
    },
    list: {
      color: 'grey',
      fontWeight: 'bold',
      fontSize: 25,
  },
});

export default GoalItem;