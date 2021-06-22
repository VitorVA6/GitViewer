import React from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native'

export default props=>{
    
    
    return(
        <View style={{flex:1, backgroundColor:'#1c1c1c'}}>
            
            <View style={{padding:20}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image 
                        source={{uri: props.usuario.avatar_url}}
                        style = {{
                            width: 100, 
                            height:100, 
                            borderRadius:50,
                            marginBottom: 25,
                            marginTop: 10,
                            borderWidth:2,
                            borderColor:'#fff'
                        }}                    
                    />
                </View>
                <View style = {{marginTop:10, marginBottom:10}}>
                    <Text style = {{fontSize:22, color:'#fff', fontWeight:'bold'}}>{props.usuario.name}</Text>
                    <Text style={{color:'#fff'}}>{props.usuario.login}</Text> 
                    <Text style={{color:'#fff'}}>{props.usuario.location}</Text> 
                </View>
            </View>  
            <View style={{
                flexDirection:'row', 
                width:'100%', 
                backgroundColor:'#363636', 
                height:'18%', 
                marginTop:10, 
                marginBottom:10}}>   
                
                <TouchableOpacity 
                    style = {{width:'33%', justifyContent:'center', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate(props.seguidor)}}
                > 
                    <Text style={{fontSize:30, fontWeight:'bold', color:'#fff'}}>{props.usuario.followers}</Text>
                    <Text style={{color:'#fff'}}>Seguidores</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    style = {{width:'33%', justifyContent:'center', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate(props.seguindo)}}
                >
                    <Text style={{fontSize:30, fontWeight:'bold', color:'#fff'}}>{props.usuario.following}</Text>
                    <Text style={{color:'#fff'}}>Seguindo</Text>
                </TouchableOpacity>
            
            
                <TouchableOpacity 
                    style = {{width:'33%', justifyContent:'center', alignItems:'center'}}
                    onPress={()=>{props.navigation.navigate(props.repo)}}
                    >
                    <Text style={{fontSize:30, fontWeight:'bold', color:'#fff'}}>{props.usuario.public_repos}</Text>
                    <Text style={{color:'#fff'}}>Repos</Text>
                </TouchableOpacity>
                
            </View>
            <View style ={{padding:20}}>
                <Text style = {{fontSize:22, fontWeight:'bold', color:'#fff'}}>BIO</Text>
                <Text style={{color:'#fff'}}>{props.usuario.bio}</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{props.navigation.goBack()}}
                style={{
                    position:'absolute',
                    right: 30,
                    top: 15
                }}
            >
                <Text style={{color:'#fff'}}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}