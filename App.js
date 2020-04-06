import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import {Header, Spinner, CardSection, Card} from './src/components/Index';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';
import SignInForm from './src/components/SignInForm';

const App=()=>{
  const [loggedIn,setLog]=useState(null);

  useEffect(()=>{
    try{
    firebase.initializeApp({
      apiKey: "AIzaSyDhwnz4UdLHqdPv8gaUhk2HoG_2aRhCix4",
      authDomain: "authentication-c3222.firebaseapp.com",
      databaseURL: "https://authentication-c3222.firebaseio.com",
      projectId: "authentication-c3222",
      storageBucket: "authentication-c3222.appspot.com",
      messagingSenderId: "166957038829",
      appId: "1:166957038829:web:27d82324d401bd85c260e4",
      measurementId: "G-5H987R0TS6"
    });
  }catch(err){
    console.log(err)
  }
  },[]);

  let firebaseAppDefined=false;

  setInterval(()=>{
    if(!firebaseAppDefined){
      if(firebase.app()){
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            setLog(true);
          }else{
            setLog(false);
          }
        })

        firebaseAppDefined=true
      }
    }
  },100)

  const RenderContent=()=> {

    switch(loggedIn){
      case true:
        return (
          <SignInForm/>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={{alignSelf:"center", marginBottom:200}}>
          <Spinner size="large"/>
          </View>
        )
    }
  }

  return (
  <View>
    <Header headerText="Authentication"/>
    <RenderContent />
  </View>
  )

}

const styles=StyleSheet.create({
})

export default App;