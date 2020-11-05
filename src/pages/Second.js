import React from 'react';
import {TouchableOpacity, Text, View ,StyleSheet, Dimensions} from 'react-native';

import {second} from '../Styles';

const Second = (props) => {

  const myName = props.route.params.name;
  const myData = props.route.params.data;

  return (
    <View style={second.container}>
      <Text style={second.text1}>{myName}</Text>
      <Text style={second.text1}>{myData}</Text>  

      <TouchableOpacity 
      onPress = {() => props.navigation.goBack()}
      style={{backgroundColor : 'blue' ,borderRadius : 10,position :"absolute" ,left : 150 , bottom : 2}}
      >
          <Text style={{color : 'white' ,textAlign : "center" ,fontSize : 25 ,padding : 10  }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Second};
