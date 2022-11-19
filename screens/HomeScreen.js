import React from 'react'
import {View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Button} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/auth'
import {LinearGradient} from 'expo-linear-gradient'

export const HomeScreen = ({navigation}) => {

    onSignOut = async () => {
        try{
            await firebase.auth().signOut()
            this.props.navigation.navigate('welcomeScreen')
        }catch(error)
        {
            alert('Unable to Sign Out Right Now!')
        }
    }

        return(
            <View style={{flex: 1}}>
            <View style={{flex: 0.4}}>
            <LinearGradient  
            colors={['#36d1dc', '#5b86e5']}
            style={{flex: 1, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, justifyContent: 'flex-end'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            >
            <Text style={{fontSize: 30, textAlign: 'left', color: '#fff', fontWeight: '500', marginLeft: 20}}>Moto Marvel</Text>
            <Text style={{fontSize: 15, textAlign: 'left', color: '#fff', marginLeft: 20, marginBottom: 40}}>Repair It!</Text>
           </LinearGradient>
           </View>
           <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity style={{marginTop: 80}} onPress={() => navigation.navigate('Customer')}>
           <LinearGradient  
            colors={['#56ab2f', '#a8e063']}
            style={{width: 250, borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 60}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            >
            <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>Customer</Text> 
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Vendor')}>
            <LinearGradient  
            colors={['#56ab2f', '#a8e063']}
            style={{width: 250, borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 60, marginTop: 30}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            >
            <Text style={{fontSize: 20, color: '#fff', fontWeight: '800'}}>Vendor</Text> 
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSignOut}>
            <LinearGradient  
            colors={['#36d1dc', '#5b86e5']}
            style={{width: 150, borderRadius: 5, justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 90}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            >
            <Text style={{fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: '600'}}>Log Out</Text>
           </LinearGradient>
            </TouchableOpacity>
           </View>
           </View>
        )
    }