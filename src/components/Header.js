import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Header=({headerText})=>{

    return(
        <View style={styles.ViewStyle}>
         <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:20
    },

    ViewStyle:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        backgroundColor:'#F8F8F8',
        borderBottomWidth:1,
        borderBottomColor:'gray',
    }
})

export {Header};