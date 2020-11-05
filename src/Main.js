import React from 'react'
import { StyleSheet, Text, View } from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' ;

import {AnaFirst,AnaSecond, First ,Second} from './pages'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Restaurant() {
    return (
        <Stack.Navigator
        initialRouteName = 'FirstPage'
        screenOptions={{headerShown : false}}
        >
        <Stack.Screen  name='FirstPage' component={First}/>
        <Stack.Screen  name='SecondPage' component={Second} />
    </Stack.Navigator>
    )
}
function Anasayfa() {
    return (
        <Stack.Navigator
        initialRouteName = 'FirstPage'
        screenOptions={{headerShown : false}}
        
        >
        <Stack.Screen  name='AnaFirstPage' component={AnaFirst}/>
        <Stack.Screen  name='AnaSecondPage' component={AnaSecond} />
    </Stack.Navigator>
    )
}


const Main = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Ana Sayfa') {
                        iconName = "gratipay"
                    } else if (route.name === 'Restaurant Page') {
                        iconName = "cutlery"
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })
            }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
                <Tab.Screen name='Ana Sayfa' component={Anasayfa} options={null} />
                <Tab.Screen name='Restaurant Page' component={Restaurant} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})

