import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import CustomButton from '../components/CustomButton'
import Icon from 'react-native-vector-icons/AntDesign'

const windowWidth = Dimensions.get('window').width

export const FormScren = ({navigation, route}) => {

  const name = route.params.text
  
  constructor()
  {
    this.state={
      name:'',
      email:'',
      password:'',
    }
  }

      return(
        <LinearGradient  
                 colors={['#000000', '#434343']}
                 style={{flex: 1}}
                 start={{x: 0, y: 0}}
                 end={{x: 0, y: 1}}
                 >
            <View style={{flex: 1, alignItems: 'center', marginTop: 80}}>
             <TextInput
               placeholder="Enter Name"
               placeholderTextColor="#434343"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth: 1, borderColor: 'skyblue', margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, color: '#fff', textAlign: 'center'}}
             />
             {name == 'Others'?
             <TextInput
             placeholder="Enter Product Name"
             placeholderTextColor="#434343"
             onChangeText={(text)=>{this.setState({name:text})}}
             style={{borderWidth: 1, borderColor: 'skyblue', margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, color: '#fff', textAlign: 'center'}}
             />:
            <TextInput
             placeholder={name}
             placeholderTextColor="#fff"
             editable={false}
             onChangeText={(text)=>{this.setState({name:text})}}
            style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
            />
             }
             <TextInput
               placeholder="Enter Address"
               placeholderTextColor="#434343"
               multiline={true}
               scrollEnabled={true}
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 60, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
             <TextInput
               placeholder="Phone Number"
               placeholderTextColor="#434343"
               keyboardType="numeric"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
             <TextInput
               placeholder="Enter Pin"
               placeholderTextColor="#434343"
               keyboardType="numeric"
               onChangeText={(number)=>{this.setState({name:number})}}
               style={{borderWidth:1,borderColor: 'skyblue',margin:17, height: 40, width: windowWidth - 60, borderRadius: 10, textAlign: 'center', color: '#fff'}}
             />
           <CustomButton style={{width: windowWidth - 50, backgroundColor: '#434343', marginTop: 25}} onPress={() => navigation.navigate('CheckOut')} >
             <Text style={{color: '#fff', fontSize: 20}}>Submit</Text>
           </CustomButton>  
      </View>
      </LinearGradient>
      )
    }   