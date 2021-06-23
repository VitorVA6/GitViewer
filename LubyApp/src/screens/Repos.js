import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default props=>{
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        ()=>{
            fetch(`http://api.github.com/users/${props.usuario.login}/repos`)
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
                    padding:10, 
                    backgroundColor:'#363636', 
                    width:'100%',
                    justifyContent:'center'}}>
                <TouchableOpacity 
                    style={{width:'15%', alignItems:'center', justifyContent:'center', marginRight:15}}
                    onPress={()=>props.navigation.goBack()}
                >
                    <Icon name="arrow-back-outline" size={30} color='#fff'/>
                </TouchableOpacity>
                <View style={{width:'80%', justifyContent:'center', paddingLeft:25}}>
                    <Text style={{color:'#fff', fontSize:22}}>{props.usuario.public_repos} Repositórios</Text>
                </View>
            </View>
            {carregando?<ActivityIndicator/>:(
            <FlatList
                data={dados}
                keyExtractor={({id}, index)=>id}
                renderItem={({item})=>(                    
                    <View 
                        style = {{ 
                            backgroundColor:'#1c1c1c', 
                            borderBottomWidth: 1, 
                            borderBottomColor:'#363636', 
                            paddingBottom:30,
                            paddingTop:30}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={{width:8, 
                                backgroundColor:'#ffd700', 
                                marginRight:10, 
                                borderTopRightRadius:4,
                                borderBottomRightRadius:4,
                                height:30
                                }}
                            />
                            <Text style={{fontSize:18, fontWeight:'bold', color: '#fff'}}>{item.name}</Text>
                        </View>
                        <Text style={{color: '#fff', marginLeft:20}}>{item.description}</Text>
                        <View style={{flexDirection:'row', marginLeft:20, marginTop:10, alignItems:'center'}}>
                            <Icon name="star-outline" size={15} color='#ffd700'/>
                            <Text style={{color: '#fff', marginLeft:5}}>{item.stargazers_count}</Text>
                        </View>
                    </View>
                    
                )}
            />
            )}
        </View>
    )
}