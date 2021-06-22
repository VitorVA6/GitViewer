import React, {Component} from 'react'
import { View, TextInput, Text, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

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
            <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#1c1c1c'}}>
                <Image 
                    source={require('../image/25231.png')}
                    style = {{
                        width: 100, 
                        height:100, 
                        borderRadius:50,
                        marginBottom: 25,
                        marginTop: 10,
                    }}                    
                    />
                <TextInput
                    style={{backgroundColor:'#fff', 
                        width:'90%', 
                        padding:12,
                        borderRadius:12,
                        margin:10,
                        fontSize:18
                    }}
                    placeholder='Usuário'
                    value = {this.state.nome}
                    onChangeText = {nome => this.setState({nome})}
                />
                <TouchableOpacity 
                    onPress={()=>{this.getDataFromApi()}}
                    style={{flexDirection:'row', 
                        backgroundColor:'#ffd700', 
                        alignItems:'center',
                        width:'90%',
                        padding:10,
                        justifyContent:'center',
                        borderRadius:12
                    }}> 
                    <Text style={{fontSize:20, marginRight:5}}>ENTRAR</Text>
                    <Icon name="arrow-forward-outline" size={30} color='black'/>
                </TouchableOpacity>
            </View>
        )}
}