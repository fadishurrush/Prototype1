import React, { useState } from 'react';
import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Alert,
  } from 'react-native';

const Card=()=>{   
    const [FontWeight,setFontWeight] = useState('normal')
    const changeFontWeight = ()=>{
        if(FontWeight==='normal'){
            setFontWeight('bold')
            Alert.alert("Font change alert","font is now normal",[{text:"ok",onPress:()=> console.log("ok Pressed")}])
        }else{
            setFontWeight('normal')
            Alert.alert("Font change alert","font is now bold",[{text:"ok",onPress:()=> console.log("ok Pressed")}])
        }
      
            
        
    }
    return(
    <View styles={styles.Container}>
        <View style={styles.row}>
        <View style={styles.ImageInnerContainer}>
        <Text style={styles.Text}>Card</Text>
        <Image source={require('../../images/scream.png')}></Image>
        </View>
         <View style={styles.InnerContainer}>
            <Text style={{fontWeight:FontWeight}}>Name: 'name'</Text>
            <Text style={{fontWeight:FontWeight}}>BD: 'BD'</Text>
            <Text style={{fontWeight:FontWeight}}>example: 'example'</Text>
            <Text style={{fontWeight:FontWeight}}>example: 'example'</Text>
            <Text style={{fontWeight:FontWeight}}>example: 'example'</Text>
             <Pressable>
                <Button title='press to change fontweight' onPress={()=>changeFontWeight()}>

                </Button> 
            </Pressable>
        </View> 
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        borderWidth:5,
        // justifyContent:'flex-start',
        flexDirection:'row',
        margin:10,
        backgroundcolor:'lightcyan',
        
    },
    Text:{
        fontWeight:'bold',

    },
    InnerContainer:{
        flex:1,
        backgroundcolor:'lightcyan',
        // borderWidth:1,
        borderRadius:10,
        maxWidth:'70%', 
    }, 
     ImageInnerContainer:{
        backgroundcolor:'lightcyan',
        // borderWidth:1,
        borderRadius:10,
        maxWidth:'40%', 
    },
    row:{
        flexDirection:'row',
      
    },
})

export default Card;