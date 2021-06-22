import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image} from 'react-native'

export default props=>{
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        ()=>{
            fetch(`http://api.github.com/users/${props.usuario.login}/followers`)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json))
                .catch(()=>(alert('Erro ao carregar dados do github')))
                .finally(()=>setCarregando(false))
        }, [])
    
    return(
        <View style={{flex:1, backgroundColor:'#1c1c1c'}}>
            <View 
                style={{flexDirection:'row', 
                    paddingTop:20, 
                    paddingBottom:20, 
                    padding:5, 
                    backgroundColor:'#363636', 
                    width:'100%', 
                    alignItems:'center'}}>
                <TouchableOpacity 
                    style={{width:'15%', alignItems:'center', justifyContent:'center', marginRight:15}}
                    onPress={()=>props.navigation.goBack()}
                >
                    <Text style={{color:'#fff'}}>Voltar</Text>
                </TouchableOpacity>
                <View style={{width:'80%', justifyContent:'center', paddingLeft:25}}>
                    <Text style={{color:'#fff', fontSize:22}}>{props.usuario.followers} Seguidores</Text>
                </View>
            </View>
            {carregando?<ActivityIndicator/>:(
            <FlatList
                data={dados}
                keyExtractor={({id}, index)=>id}
                renderItem={({item})=>(                    
                    <View 
                        style = {{padding:20, 
                            backgroundColor:'#1c1c1c', 
                            borderBottomWidth: 1, 
                            borderBottomColor:'#363636',
                            flexDirection:'row',
                            alignItems:'center'}}>
                        <Image 
                            source={{uri: item.avatar_url}}
                            style = {{
                            width: 70, 
                            height:70, 
                            borderRadius:35,
                            borderWidth:2,
                            borderColor:'#fff',
                            marginRight:30
                        }}                    
                        />
                        <Text style={{fontSize:18, fontWeight:'bold', color: '#fff'}}>{item.login}</Text>
                        
                    </View>
                    
                )}
            />
            )}
        </View>
    )
}