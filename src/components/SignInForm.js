import React, { useState, useEffect } from 'react';
import {Text,StyleSheet,TouchableOpacity, TextInput,View} from 'react-native';
import {Card,CardSection} from '../components/Index';
import firebase from 'firebase';
import ShowScreen from '../components/ShowScreen';

var i=0;
const queries={};
var fixtures=[];

const SignInForm=()=>{
    const[qval,setqval]=useState('');

    const RenderingState=()=>{
        queries[i]=qval;
        //console.log(queries);
        
        setqval('');
        i=i+1;
    }

    const ShowQueries=()=>{
        //console.log(queries);
        for (let input in queries){
            console.log(queries[input]);
        }
    }

    return(
        <Card>
        <CardSection>
        
        <TextInput
            style={styles.TextInputStyle}
            autoCorrect={false}
            autoCapitalize="none"
            value={qval}
            onChangeText={setqval}
            placeholder="Enter your Query!!!"
        />
        <TouchableOpacity style={styles.queryButtonStyle} onPress={()=>RenderingState()}>
          <Text style={styles.queryButtonTextStyle}>Submit</Text>
        </TouchableOpacity>
        </CardSection>
        <CardSection>
            <TouchableOpacity style={styles.ButtonStyle} onPress={()=>firebase.auth().signOut()}>
              <Text style={styles.ButtonTextStyle}>Log Out</Text> 
            </TouchableOpacity>
        </CardSection>

        <CardSection>
            <TouchableOpacity style={styles.ButtonStyle} onPress={()=>ShowScreen({queries})} >
              <Text style={styles.ButtonTextStyle}>Show Queries</Text>  
            </TouchableOpacity>
        </CardSection>
       
        </Card>
    )
}

const styles=StyleSheet.create({
    ButtonStyle:{
        backgroundColor:'#fff',
        borderColor:'blue',
        borderRadius:3,
        borderWidth:1.5,
        flex:1,
        marginLeft:5,
        marginRight:5
      },
      ButtonTextStyle:{
        alignSelf:'center',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        color:'blue'
      },
      TextInputStyle:{
        fontSize:20,
        flex:3
      },
      queryButtonStyle:{
          flex:1,
          borderRadius:10,
          borderWidth:2,
          margin:2
      },
      queryButtonTextStyle:{
          alignSelf:"center",
          marginTop:10,
          marginBottom:10,
          fontSize:17
      }

})
export default SignInForm