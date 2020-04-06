import React from 'react';
import {Text,View, FlatList,StyleSheet} from 'react-native';
import {Card} from '../components/Index';
import { CardSection } from './CardSection';

const ShowScreen=({queries})=>{
    console.log(queries);
    let fixtures=[];
    //print quries in JSX
    Object.keys(queries).map(function(Key,Index){ 
        fixtures=[...fixtures,queries[Key]]
    })

        { fixtures.map((item, key)=>(
            <Text key={key}> { item } </Text>)
            )}
    

        // <View style={styles.ViewStyle}>
        //     <FlatList
        //     data={Object.keys(queries)}
        //     renderItem={({item})=>{
        //         console.log(queries[item])
        //     }}
        //     />
        // </View>
    
}

const styles=StyleSheet.create({
    ViewStyle:{
        height:60,
        borderColor:'red',
        borderWidth:10
    }
})

export default ShowScreen;