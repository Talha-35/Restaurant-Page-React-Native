import {StyleSheet, Dimensions} from 'react-native';

export const ana = StyleSheet.create({
  container: {},
  text1: {
    margin: 5,
    backgroundColor: '#1a1a1a',
    color: '#dedede',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 25,
    fontSize: 17,
    // fontWeight  :"bold",
    marginBottom: 5,
    textAlign: 'justify',
    marginHorizontal: 15,
    color: '#b30000',
  },
  text22: {
    marginTop: 15,
    fontSize: 17,
    // fontWeight  :"bold",
    marginVertical: 5,
    textAlign: 'justify',
    marginHorizontal: 15,
    color: '#b30000',
  },
  text3: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b30000',
  },
  text4: {
    marginTop: 45,
    backgroundColor: '#bd7b00',
    color : '#1a1a1a',
    marginHorizontal: 90,
    padding: 5,
    borderRadius: 7,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    borderRadius: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
});
export const anaSecond = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    backgroundColor: '#262626',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 17,
    // fontWeight  :"bold",
    marginVertical: 10,
    textAlign: 'justify',
    marginHorizontal: 15,
    color: '#b30000',
  },
  touch: {
    backgroundColor: '#f0cc00',
    borderRadius: 10,
    position: 'absolute',
    left: 110,
    bottom: 2,
  },
  touchText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 35,
    paddingVertical: 5,
  },
});
export const first = StyleSheet.create({
  container: {},
  text1: {},
});
export const second = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    marginTop: 10,
  },
  text1: {
    backgroundColor: '#404040',
    fontSize: 25,
    marginVertical: 10,
    fontWeight :"bold",
    padding : 5,
    color : 'white'
  },
  text2: {
    // backgroundColor : 'red',
    fontSize: 18,
    textAlign: 'justify',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  text3: {
    fontSize: 18,
    marginVertical: 5,
  },
  text4: {
    fontSize: 18,
    marginVertical: 5,
  },
  text5: {
    fontSize: 18,
    marginVertical: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  touch: {
    backgroundColor: '#404040',
    borderRadius: 10,
    position: 'absolute',
    left: 110,
    bottom: 10,
  },
  touchText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 35,
    paddingVertical: 5,
 
  },
});
export const rest = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  text1: {
    paddingLeft: 15,
    fontSize: 18,
  },
});
export const sec = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 5,
  },
  text1: {
    backgroundColor: '#dedede',
    fontSize: 23,
    textAlign: 'center',
    padding: 5,
  },
});
