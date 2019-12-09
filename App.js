/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import PostList from './src/screens/PostList';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
/*const App = () => {
  return ( 
  
    <View>
      <Text>Hola</Text>
    </View>
  ); 
};*/

const navigator = createStackNavigator({
  posts: PostList
  }, {
  initialRouteName: "posts",
  }
);  

const Navegador = createAppContainer(navigator); 

const styles = StyleSheet.create({});

export default App = () => {
  return(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Navegador/>
    </Provider>
  );
};
