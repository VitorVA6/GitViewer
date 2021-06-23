import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './screens/Login'
import MainScreen from './screens/Main'
import RepoScreen from './screens/Repos'
import FollowerScreen from './screens/Followers'
import FollowingScreen from './screens/Following'

const Stack = createStackNavigator()  


export default props =>{
    const [user, setUser] = useState([])
    const updateUser = (arr)=>{
        setUser(arr)
    }
    return(
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}> 
            <Stack.Screen name="LoginScreen">
            {   
                props =>(
                    <LoginScreen {...props} nextScreen="MainScreen" funcao={updateUser}/>
                )
            }
            </Stack.Screen>
            <Stack.Screen name="MainScreen">
            {
                props=>(
                    <MainScreen 
                        {...props} 
                        usuario={user} 
                        repo="RepoScreen" 
                        seguidor="FollowerScreen" 
                        seguindo="FollowingScreen"/>
                )
            }
            </Stack.Screen>
            <Stack.Screen name="RepoScreen">
            {
                props=>(
                    <RepoScreen {...props} usuario={user}/>
                )
            }
            </Stack.Screen>
            <Stack.Screen name="FollowerScreen">
            {
                props=>(
                    <FollowerScreen {...props} usuario={user} funcao={updateUser}/>
                )
            }
            </Stack.Screen>
            <Stack.Screen name="FollowingScreen">
            {
                props=>(
                    <FollowingScreen {...props} usuario={user} funcao={updateUser}/>
                )
            }
            </Stack.Screen>
        </Stack.Navigator>
    )
}

