import { View, TextInput, Image, StyleSheet } from 'react-native';
import React from 'react';

const Custominput = ({ value, onChangeText, placeholder, icon, type }) => {
    return (
        <View style={styles.Container}>
            <Image source={icon} style={styles.icon} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={type === 'password'}
                placeholderTextColor="#888" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: '85%',
        height: 50,
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10, 
        paddingRight: 10, 
    },
    icon: {
        width: 24,
        height: 24,
    },
    input: {
        flex: 1,
        marginLeft: 10, 
        height: '100%', 
        paddingVertical: 0, 
        paddingHorizontal: 5, 
    },
});

export default Custominput;
