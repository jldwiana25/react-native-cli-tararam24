import React, {Component} from 'C:/Users/Julia/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {Text, StyleSheet} from 'react-native';

export default class Judul extends Component{
    render(){
        return (
            <Text style={styles.salon}>BIODATA</Text>
        );
    }
}
const styles = StyleSheet.create({
    salon:{
        color: 'white',
        backgroundColor: 'grey',
        fontSize: 30,
    }
});
