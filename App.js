import React, {Component} from 'C:/Users/Julia/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/judul';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
    <Judul/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.tararam}>TARARAM 24</Text>
        <Image style={styles.ukuran}
          source={require('./gambar/mee.jpg')}
        />
        <Text style={styles.instructions}>Nama      : Julia Dwiana</Text>
        <Text style={styles.instructions}>Kelas     : X RPL 2</Text>
        <Text style={styles.instructions}>No Absen  : 24</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  tararam: {
    fontSize :20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  ukuran:{
    width: 200,
    height:200,
  },
});
