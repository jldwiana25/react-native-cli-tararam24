import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/judul';
export default class App extends Component {
  render() {
    return (
        <View>
            <Judul Judul="BIODATA"/>
            <Judul Judul="LOGIN"/>
            <Judul Judul="FORM"/>
            <Text>Nama : Joyse Maydossiming </Text>
            <Text>Kelas : XI RPL 1 </Text>
            <Text>No : 17 </Text>
        </View>
            );
    }
}