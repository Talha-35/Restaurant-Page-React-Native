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
    marginTop: 15,
    fontSize: 17,
    // fontWeight  :"bold",
    marginVertical: 10,
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
    backgroundColor: '#dac1a0',
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
    backgroundColor: 'blue',
    borderRadius: 10,
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
  touchText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
});
export const first = StyleSheet.create({
  container: {},
  text1: {},
});
export const second = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {},
});
export const rest = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection : "row"
  },
  text1: {
      paddingLeft : 15,
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
