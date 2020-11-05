import React from 'react'
import { TouchableOpacity, Text, View , Image ,Dimensions} from 'react-native'

import {ana} from '../Styles'

const AnaFirst = (props) => {

    const onData = () => props.navigation.navigate('AnaSecondPage')

    return (
        <View style={ana.container}>
            <Text style={ana.text1}>Avrupanın En Meşhur Restaurantları</Text>
            <Image
            style={ana.image}
            source = {{uri : 'https://img-s1.onedio.com/id-5408b30fac0ca4566295910c/rev-0/w-900/h-690/f-jpg/s-231182628be3f13c0e6b4665bdad9ce38ad2afbb.jpg'}}
            />
            <Text style={ana.text2}>Avrupanın En Meşhur Restaurantlarını görüntülemek ve araştırma yapmak istiyor iseniz...
            Hazırlamış olduğumuz bu uygulama sayesinde bir 'TIK' ile bütün restaurantların adres ve detay bilgilerine ulaşabileceksiniz.</Text>
            <Text style={ana.text3}>Detayları incelemek için.</Text>
            <TouchableOpacity onPress={onData}>
                <Text style={ana.text4}>Restaurant Photo</Text>
            </TouchableOpacity>
        </View>
    )
}

export {AnaFirst} ;


