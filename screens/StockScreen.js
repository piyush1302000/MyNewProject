import React from "react";
import {View, Text, Dimensions} from 'react-native'
import {BarChart} from 'react-native-chart-kit'
import { ScreenWidth } from "react-native-elements/dist/helpers";
import Icon from 'react-native-vector-icons/AntDesign'

const barData = {
    labels: ['Engine', 'Battery', 'Muffler', 'Tailpipe', 'Radiator', 'Brakes'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

const chartConfig={
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#42275a',
    backgroundGradientTo: '#734b6d',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  }

  export class StockScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, marginTop: 100}}>
            <BarChart
            style={{marginTop: 30,  borderRadius: 16}}
            data={barData}
            width={ScreenWidth-1}
            height={500}
            yAxisLabel={''}
            chartConfig={chartConfig}
        />
        </View>
        )
    }
  }

