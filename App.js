

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Dislay from './Display';

export default function App() {
  const [image, setImage] = useState();
  function fone() {
    setImage(require("./assets/lejone1.jpg"))
  }
  function ftwo() {
    setImage(require('./assets/lejone2.jpg'))
  }
  function ftree() {
    setImage(require('./assets/lejone3.jpg'))
  }
  function ffour() {
    setImage(require('./assets/lejone4.jpg'))
  }
  function ffive() {
    setImage(require('./assets/lejone5.jpg'))
  }
  function fsix() {
    setImage(require('./assets/lejone6.jpg'))
  }
  function fseven() {
    setImage(require('./assets/lejone7.jpg'))
  }
  function feight() {
    setImage(require('./assets/lejone8.jpg'))
  }
  function fnine() {
    setImage(require('./assets/lejone9.jpg'))
  }
  return (
    <View style={styles.container}>

      <View style={{ width: '100%', height: '60%' }}>
        <Dislay image={image} />

      </View>


      <View style={styles.life}>
        <TouchableOpacity onPress={fone}>
          <Image style={styles.image} source={require('./assets/lejone1.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ftwo}>
          <Image style={styles.image} source={require('./assets/lejone2.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ftree}>
          <Image style={styles.image} source={require('./assets/lejone3.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={ffour}>
          <Image style={styles.image} source={require('./assets/lejone4.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={ffive}>
          <Image style={styles.image} source={require('./assets/lejone5.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={fsix}>
          <Image style={styles.image} source={require('./assets/lejone6.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={fseven}>
          <Image style={styles.image} source={require('./assets/lejone7.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={feight}>
          <Image style={styles.image} source={require('./assets/lejone8.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={fnine}>
          <Image style={styles.image} source={require('./assets/lejone9.jpg')}></Image>
          <Text style={styles.Text}></Text>
        </TouchableOpacity >
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  life: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    height: 100,
    width: '98%',
    backgroundColor: 'blue',
    padding: 10


  },

  Text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'red'
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 5,
    backgroundColor: 'blue',

  }
})
