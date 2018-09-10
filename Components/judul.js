import React, {Component} from 'react';
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
