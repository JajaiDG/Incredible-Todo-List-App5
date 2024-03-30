import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
    const currentDate = new Date().toLocaleDateString();
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    const toggleEasterEgg = () => {
        setShowEasterEgg(!showEasterEgg);
    };

    return (
        <MainLayout style={styles.container}>
            <Text style={styles.appName}>Incredible To Do List App</Text>
            <Pressable onPress={toggleEasterEgg} style={styles.pressable}>
                <Text style={styles.name}>Jairo De Guzman</Text>
            </Pressable>
            {showEasterEgg && <Text style={styles.easterEgg}>Awesome Easter Egg 🥚</Text>}
            <Text style={styles.date}>{currentDate}</Text>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        color: '#1E90FF', 
        textDecorationLine: 'underline', 
    },
    pressable: {
        marginBottom: 20,
        paddingVertical: 10,
    },
    easterEgg: {
        marginTop: 20,
        color: 'blue',
        fontSize: 16,
        fontStyle: 'italic', 
    },
    date: {
        fontSize: 16,
        color: '#696969',
        marginTop: 20,
    },
});

export default AboutScreen;

