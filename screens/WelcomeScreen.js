import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import CustomButton from '../components/CustomButton'
import {LinearGradient} from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'

export const welcomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <LinearGradient  
        colors={['#a13388', '#10356c']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
          <View style={{flex: 1,alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
            <Image source={require('../assets/final.jpg')} style={{height: 200, width: 200, borderRadius: 100}} />
            <Text style={{fontWeight: '200', fontSize: 50, color: '#fff', marginTop: 20}}>Moto Marvel</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <CustomButton onPress={() => navigation.navigate('Login')}>
              <Icon name="user" size={28} style={{left: 20, position: 'absolute'}} color={'#a13388'} />
              <Text style={{fontSize: 20, color: '#10356c', textAlign: 'center'}}>Log in</Text>
            </CustomButton>
          </View>
        </LinearGradient>  
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
     flex: 1,
  },
});