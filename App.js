/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer,  } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from 'react';
import type {Node} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './Assets/Components/Card';
import Page1 from "./Assets/screens/Page1";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const MainScreen=({navigation})=>{
  return(
    <View style={styles.Container}>
    <Text style={styles.Text}>"ScrollView"-Scroll between 'Cards'</Text>
<ScrollView style={styles.ScrollView}>
 <Card></Card>
 {/* todo:improve looks** */}
 <View style={styles.Divider}></View>
 <Card></Card>
 <Card></Card>
 <Card></Card> 
   </ScrollView>
   <Pressable>
     <Button style={{marginTop:10}} title='Button' onPress={()=> navigation.navigate('Page1')}>

     </Button>
   </Pressable>
 </View>
  )
}
const Stack= createNativeStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Home" component={MainScreen} />
               <Stack.Screen name="Page1" component={Page1} />  
                </Stack.Navigator>
            </NavigationContainer>
)};

const styles = StyleSheet.create({
Container:{
  flex:1,
  backgroundColor:'darkgrey',
  alignContent:'center',


},
ScrollView:{
  flex:1,
  maxHeight:'70%',
  marginLeft:20,
  marginRight:20,
  marginBottom:20,
  backgroundColor:'ghostwhite',
  borderWidth:5,
  borderColor:'lightslategrey',
  borderRadius:10,
  // marginTop:70,
  // marginBottom:30,
  alignContent:'center',
},
Text:{
  marginTop:70,
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
},
Button:{
  maxWidth:'50%',
},
Card:{
  width:'100%',
  height:80,
},
Divider:{
  width:'100%',
  height:2,

}
});

export default App;
