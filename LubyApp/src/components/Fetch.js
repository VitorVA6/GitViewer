import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, ActivityIndicator} from 'react-native'

export default props=>{
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        ()=>{
            fetch('http://api.github.com/users/vitorva6')
                .then((resp)=>resp.json())
                .then((json)=>setDados(json))
                .catch(()=>(alert('Erro ao carregar dados do github')))
                .finally(()=>setCarregando(false))
        }, [])
    
    return(
        <View>
            {
                carregando? <ActivityIndicator/>: 
                (   <>
                    <Text>{dados.login}</Text>
                    <Text>{dados.name}</Text>
                    <Text>{dados.email}</Text>
                    <Text>{dados.location}</Text>
                    <Text>{dados.bio}</Text>
                    <Text>{dados.followers}</Text>
                    <Text>{dados.following}</Text>
                    <Text>{dados.public_repos}</Text>
                    </>
                )
            }
        </View>
    )
}