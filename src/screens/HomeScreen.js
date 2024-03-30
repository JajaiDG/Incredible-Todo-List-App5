import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, ScrollView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
    // State to hold the list of tasks
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    // Function to add a new task to the list
    const addTask = (taskText) => {
        setTasks(currentTasks => [...currentTasks, taskText]);
    };

    return (
        <MainLayout style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>My Tasks</Text>
                <ToDoList tasks={tasks} style={styles.list} />
                <ToDoForm onAddTask={addTask} style={styles.form} />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                        color="white"
                    />
                </View>
            </ScrollView>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: '600',
        color: '#333',
        marginBottom: 24,
    },
    list: {
        marginBottom: 20,
    },
    form: {
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 1,
        paddingHorizontal: 5,
        borderRadius: 20, 
        width: 200,
        alignSelf: 'center',
        elevation: 2,
    },
});

export default HomeScreen;
