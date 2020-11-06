import React from 'react'
import {TouchableOpacity, Image, Text, View } from 'react-native'

import {sec} from '../Styles'

const SecondRestaurant = (props) => {
    return (
        <TouchableOpacity>
            <Image 
            style={sec.image}
            source= {{uri : props.adam.image}}
            />
            <Text style={sec.text1}>{props.adam.name}</Text>
            
        </TouchableOpacity>
    )
}

export default SecondRestaurant ;


