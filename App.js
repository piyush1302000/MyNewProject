import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native'
import {HomeScreen} from './screens/HomeScreen'
import {welcomeScreen} from './screens/WelcomeScreen'
import {LoginScreen} from './screens/LoginScreen'
import {LoadingScreen} from './screens/LoadingScreen'
import {StockScreen} from './screens/StockScreen'
import {SalesScreen} from './screens/SalesScreen'
import {CustomerScreen} from './screens/CustomerScreen'
import {FormScren} from './screens/FormScreen'
import {CheckOutScreen} from './screens/CheckOutScreen'
import {VendorScreen} from './screens/VendorScreen'
import {VendorCheckScreen} from './screens/VendorCheckScreen'
import {LinearGradient} from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as firebase from 'firebase'
import {firebaseConfig} from './config/config'
import { Header } from 'react-native-elements';
firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const GradientHeader1 = props => (
  <View style={{backgroundColor: '#eee'}}>
      <LinearGradient  
         colors={['#a13388', '#10356c']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}>
        <Header {...props} />
         </LinearGradient>
  </View>
)
const GradientHeader2 = props => (
  <View style={{backgroundColor: '#eee'}}>
      <LinearGradient  
         colors={['#f2fcfe', '#1c92d2']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}>
        <Header {...props} />
         </LinearGradient>
  </View>
)
const GradientHeader3 = props => (
  <View style={{backgroundColor: '#eee'}}>
      <LinearGradient  
         colors={['#36d1dc', '#5b86e5']}
         style={{flex: 1}}
         start={{x: 0, y: 0}}
         end={{x: 1, y: 0}}>
        <Header {...props} />
         </LinearGradient>
  </View>
)

function Homes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Home',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='home' size={24} color={tabInfo.focused ? "#006600" : "8e8e93"} />
          )
        },
      }} />
      <Tab.Screen name="Stocks" component={StockScreen} options={{
        title: 'Stocks',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='barchart' size={24} color={tabInfo.focused ? "#006600" : "8e8e93"} />
          )
        },
      }} />
      <Tab.Screen name="Sales" component={SalesScreen} options={{
        title: 'Sales',
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name='linechart' size={24} color={tabInfo.focused ? "#006600" : "8e8e93"} />
          )
        },
      }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} options={{
            title: 'Loading...',
            headerLeft: () => null,
            headerTitleAlign: 'center',
            headerTintColor: '#fff'
        }} />
        <Stack.Screen name='welcome'  component={welcomeScreen} options={{
            title: 'Welcome',
            headerLeft: () => null,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            header: props => <GradientHeader1 {...props} />,
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }}  />
        <Stack.Screen name='Login'  component={LoginScreen} options={{
            title: 'LogIn & SignUp',
            headerLeft: () => null,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            header: props => <GradientHeader2 {...props} />,
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }}  />
        <Stack.Screen name="Moto Marvel" component={Homes} options={{
            headerLeft: () => null,
            headerTitleAlign: 'center',
            header: props => <GradientHeader3 {...props} />,
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        }} />
        <Stack.Screen name='Customer' component={CustomerScreen} options={{
          title: 'Motor Parts',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='Form' component={FormScren} options={{
          title: 'Form',
          headerTitleAlign: 'center',
        }}  />
        <Stack.Screen name='CheckOut' component={CheckOutScreen} options={{
          title: 'Thank You',
          headerTitleAlign: 'center',
        }}  />
        <Stack.Screen name='Vendor' component={VendorScreen} options={{
          title: 'Motor Parts',
          headerTitleAlign: 'center',
        }}   />
        <Stack.Screen name='VendorCheckOut' component={VendorCheckScreen} options={{
          title: 'Thank You',
          headerTitleAlign: 'center',
        }}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
