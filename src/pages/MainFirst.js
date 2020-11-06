import React from 'react'
import { TouchableOpacity, Text, View , Image ,Dimensions} from 'react-native'

import {ana} from '../Styles'

const MainFirst = (props) => {

    const onData = () => props.navigation.navigate('MainSecondPage')

    return (
        <View style={ana.container}>
            <Text style={ana.text1}>Europe's Most Famous Restaurants</Text>
            <Image
            style={ana.image}
            source = {{uri : 'https://img-s1.onedio.com/id-5408b30fac0ca4566295910c/rev-0/w-900/h-690/f-jpg/s-231182628be3f13c0e6b4665bdad9ce38ad2afbb.jpg'}}
            />
            <Text style={ana.text2}>If you want to view and do research on Europe's Most Famous Restaurants ...</Text>
            <Text style={ana.text22}>With this application we have prepared, you will be able to access the address and detail information of all restaurants with a 'CLICK'.</Text>
            <Text style={ana.text3}>Go to the next page to review the details.</Text>
            <TouchableOpacity onPress={onData}>
                <Text style={ana.text4}>Click for Photos</Text>
            </TouchableOpacity>
        </View>
    )
}

export {MainFirst} ;


