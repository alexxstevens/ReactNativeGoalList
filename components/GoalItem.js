import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoalItem = (props) => {
  return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.uid)}>
        <View style={styles.listItem}> 
         <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'lightblue',
      borderColor: 'grey',
      borderWidth:1,
  },
});

export default GoalItem;