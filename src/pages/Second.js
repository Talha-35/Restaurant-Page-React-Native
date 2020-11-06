import React from 'react';
import {TouchableOpacity, Text, View ,Image, Dimensions} from 'react-native';

import {second} from '../Styles';

const Second = (props) => {

  const myName = props.route.params.name;
  const myDesc = props.route.params.desc;
  const myCity = props.route.params.city;
  const myAdress = props.route.params.adress;
  const myPhone = props.route.params.phone;
  const myImage = props.route.params.image;

  return (
    <View style={second.container}>
      <Text style={second.text1}>Restaurant : {myName}</Text>
      <Image 
            style={second.image}
            source= {{uri : myImage}}
            />
      <Text style={second.text2}>Details : {myDesc}</Text>  
      <Text style={second.text3}>City :  {myCity}</Text>  
      <Text style={second.text4}>Adress : {myAdress}</Text>  
      <Text style={second.text5}>Telephone : {myPhone}</Text>  
  

      <TouchableOpacity 
      onPress = {() => props.navigation.goBack()}
      style={second.touch}
      >
          <Text style={second.touchText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Second};
