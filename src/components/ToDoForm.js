import React from 'react'; 
import { View, TextInput, Button, StyleSheet } from 'react-native'; 

const ToDoForm = ({ onAddTask }) => {
    // Use useState hook to manage the local state of the input field
    const [taskText, setTaskText] = React.useState('');

    const handleAddTask = () => {
        // Call onAddTask with taskText as an argument
        onAddTask(taskText);
        setTaskText(''); // Clear the input field after adding the task
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)} // Update taskText state as the user types
                value={taskText} // Display the current value of taskText
            />
            <Button
                title="Add Task"
                onPress={handleAddTask} // Call handleAddTask when the button is pressed
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,

    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoForm; 
