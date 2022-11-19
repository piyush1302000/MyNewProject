import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export const CustomerScreen = ({navigation}) => {

    state = {
        names: [
           {'name': 'Engine', 'id': 1},
           {'name': 'Transmission', 'id': 2},
           {'name': 'Battery', 'id': 3},
           {'name': 'Alternator', 'id': 4},
           {'name': 'Radiator', 'id': 5},
           {'name': 'Front Axle', 'id': 6},
           {'name': 'Front Steering', 'id': 7},
           {'name': 'Suspension', 'id': 8},
           {'name': 'Brakes', 'id': 9},
           {'name': 'Catalytic Converter', 'id': 10},
           {'name': 'Fuel Tank', 'id': 11},
           {'name': 'Rear Axle', 'id': 12},
           {'name': 'Rear Suspension', 'id': 13},
           {'name': 'Tailpipe', 'id': 14},
           {'name': 'Muffler', 'id': 15}
        ]
     }

        return(
            <View style={{flex: 1, paddingTop: 10}}>
                <ScrollView style={{paddingTop: 10}}>
                {
                    this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Form', {text: item.name})}>
                        <Text style={{fontSize: 17, fontWeight: '500'}}>{item.name}</Text>
                        </TouchableOpacity>
                     </View>
                  ))
                }
                </ScrollView>
            </View>
        )
     }

const styles = StyleSheet.create ({
    item: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 30,
       margin: 2,
       borderColor: '#2a4944',
       borderWidth: 1,
       backgroundColor: '#d2f7f1'
    }
 })