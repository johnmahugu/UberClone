import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base'; 
import styles from './SearchBoxSteyle';

export const SearchBox = () => {
    return (
        <View style={styles.searchBox}>
            <Text style={styles.label}>PICK UP</Text>
            <InputGroup>
                <input style={styles.inputSearch} placeholder="Choose your pick up location"/>
            </InputGroup>
        </View>
    )
}

export default SearchBox;