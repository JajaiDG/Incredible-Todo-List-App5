import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';

function ToDoList ({ tasks }) {
    return (
        <ScrollView style={styles.listContainer}>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <Text style={styles.task}>{task}</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
});

export default ToDoList;
