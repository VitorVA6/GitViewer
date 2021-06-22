import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Navegador from './Navigator'

export default ()=> (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <Navegador/>
        </NavigationContainer>
    </SafeAreaView>    
)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 20
    }  
})