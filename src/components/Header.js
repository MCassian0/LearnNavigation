import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default class Header extends Component{
    render(){
        return(
            <View style={{ width:"100%",height:"auto", backgroundColor:"#2F97F3", flexDirection:"row", alignItems:"center", padding:8}}>
             
            <TouchableOpacity onPress={this.props.voltar}
            style={{marginRight:"auto",padding:8}}>
            <MaterialIcons  name= "arrow-back"   color="#FBFBFB" size={25}/> 
            </TouchableOpacity>
            
            <Text style={{color: "#FBFBFB", fontSize:18}}>{this.props.titulo}</Text>
            
            <TouchableOpacity style={{marginLeft:"auto", padding:8}}>
            <MaterialIcons  name= "search" color="#FBFBFB" size={25}/>
            </TouchableOpacity>
            </View>
        );
    }
}