import React from "react";
import {View, Text, Image} from 'react-native'
import {HomeScreen} from './HomeScreen'

export class VendorCheckScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            access: false
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({access: true})
        },4900);
    }

    render(){

        if(!this.state.access){
          return <MainView />;
     }
      return(
         <View style={{flex: 1}}>
            <HomeScreen />
         </View>
      )}
    }

    class MainView extends React.Component{

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/animation.gif')} style={{height: 250, width: 250}} />
            <Text style={{fontSize: 22, fontWeight: '600', color: '#fff', marginTop: 50}} >The Motor Part has</Text>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#fff', marginTop: 5}} >been added to the Store!</Text>
            </View>
        )
    }
}