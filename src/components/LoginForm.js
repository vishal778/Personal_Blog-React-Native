import React, { useState } from 'react';
import {Card, CardSection} from '../components/Index';
import {TextInput,Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Spinner} from './Spinner';

const LoginForm=()=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoad]=useState(false);

    const onButtonPress=()=>{

        setError('');
        setLoad(true);
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(onLoginSuccess())
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(onLoginSuccess())
            .catch((err)=>{
                //console.log(err.message);
                {onLoginFail(err.message)}
            })
        })
    }

    const RenderButton=()=>{
        if(loading){
            return <Spinner size="small"/>
        }

        return(
            <TouchableOpacity style={styles.ButtonStyle} onPress={onButtonPress}>
                <Text style={styles.ButtonTextStyle}>Log In</Text> 
            </TouchableOpacity>
        )
    }

    const onLoginSuccess=()=>{
        setEmail('');
        setPassword('');
        setLoad(false);
        setError('');
    }

    const onLoginFail=(err)=>{
        console.log(err)
        setError(err)
        setLoad(false)
    }
    
    return (
        <Card>
            <CardSection>
                <Text style={styles.TextStyle}>Email</Text>
                <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                placeholder="user@gmail.com"
                onChangeText={setEmail}
                style={styles.TextInputStyle}
                />
            </CardSection>

            <CardSection>
                <Text style={styles.TextStyle}>Password</Text>
                <TextInput
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.TextInputStyle}
                value={password}
                placeholder="user_password"
                onChangeText={setPassword}
                />
            </CardSection>

            {error?<Text style={styles.errorStyle}>{error}</Text>:null}

            <CardSection>
                <RenderButton />
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
      TextStyle:{
          flex:1,
          fontSize:20,
          alignSelf:"center",
          paddingLeft:10
      },
      TextInputStyle:{
          flex:2,
          fontSize:20
      },
      errorStyle:{
          fontSize:20,
          alignSelf:'center',
          color:'red'
      }

})

export default LoginForm;