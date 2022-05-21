import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Display({ image }) {


  return (

    <View style={styles.details}>
        
          <Image style={styles.image} source={image} />
        
    </View>
  );
}


const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:30,
    paddingRight:30,
    padding:20,
  },
  like: {
    height: 70,
    widht: 60,

  },
  show:{
      flex:1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      },
  image: {
    height: '100%',
    width: '100%'
  }
})