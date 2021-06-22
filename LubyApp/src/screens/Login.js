import React, {Component, useState} from 'react'
import { View, TextInput, Button, ActivityIndicator, Text} from 'react-native'

export default class Login extends Component {

    state = {
        nome: '',
        dados: [],
        carregando: true 
    }
    
    getDataFromApi = async ()=>{
        await fetch(`http://api.github.com/users/${this.state.nome}`)
            .then((resp)=>resp.json())
            .then((json)=>this.setState({dados: json}))
            .catch(()=>(console.warn('Erro ao carregar dados do github')))
            .finally(()=>{
                this.setState({carregando: false})
                if(this.state.dados.login == undefined){
                    console.warn("Usuário não encontrado")
                }else{                    
                    this.props.funcao(this.state.dados)
                    this.props.navigation.navigate(this.props.nextScreen)
                }
            })       
        
    }
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TextInput
                    placeholder='Digite seu nome'
                    value = {this.state.nome}
                    onChangeText = {nome => this.setState({nome})}
                />
                <Button 
                    title = "Autenticar"
                    onPress={()=>{this.getDataFromApi()}}
                />
            </View>
        )}
}