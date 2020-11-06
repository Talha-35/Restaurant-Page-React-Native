import React from 'react'
import {TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import {rest} from '../Styles'

const RestaurantItem = (props) => {
    
    return (
        
        <TouchableOpacity 
        onPress = {props.onData}    
        style={[
            rest.container ,         
            {backgroundColor : props.food.color == undefined ? 'black' : props.food.color}
            ]}>
                <Icon name={'gratipay'} size={30} color={'red'} style={{marginLeft : 3}} />

            <Text  style={[
                rest.text1, 
                {color : props.food.color == undefined ? 'white' : 'black'}
            ]}>{props.food.name}</Text>
            
        </TouchableOpacity>

    )
}

export default RestaurantItem ;


