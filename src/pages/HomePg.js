import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Modal, Image} from 'react-native';
import Header from '../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomePg extends Component {

    state = {
        modalVisible:false,
        listaItemCardSelecionado:[]
    }

  card = [  
    {
      icone: <FontAwesome5 name="concierge-bell" size={50} color="#2F97F3"/>,
      nome: 'Restaurants',
     listaItem:[{
         imagem:"https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg",         titulo:"Gramercy tavern",
         descricao1:"42 E 20th ST",
         descricao2:"228",
     }, 
       
     {
        imagem:"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/comidas-tipicas-capa2019.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"https://ibis.accor.com/editorial/imagerie/article/comida-mineira-pratos-tipicos-de-cada-regiao-do-brasil-358a_660x440.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"https://ibis.accor.com/editorial/imagerie/article/comida-mineira-pratos-tipicos-de-cada-regiao-do-brasil-358a_660x440.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"http://kinghorse.com.br/wp-content/uploads/2016/11/comida-caipira.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"http://kinghorse.com.br/wp-content/uploads/2016/11/comida-caipira.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"https://eurodicas.com.br/wp-content/uploads/2021/04/comidas-tipicas-de-portugal-sardinha.jpg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
    {
        imagem:"https://gourmetjr.com.br/wp-content/uploads/2018/03/JPEG-image-B6230B799E47-1_1170x600_acf_cropped_490x292_acf_cropped-1280x720.jpeg",
        titulo:"Gramercy tavern",
        descricao1:"42 E 20th ST",
        descricao2:"228",
    },
              ] 
    },
    {
      icone: <FontAwesome5 name="hotel" size={50} color="#2F97F3"/> , 
      nome: 'Hotels',

    },
    {   
    icone: <Entypo name="drink" size={50} color="#2F97F3"/>,
      nome: 'NightLife',
    },

    {
     icone: <MaterialCommunityIcons name="shopping-outline" size={50} color="#2F97F3"/>,
      nome: 'Shopping',
    },
    {  
        icone:<FontAwesome name="ticket" size={50} color="#2F97F3"/>,
      nome: 'Culture',
    },

    {
      icone:  <FontAwesome name="heart-o" size={50} color="#2F97F3"/>,
      nome: 'popular',
    },

  ];
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <Header titulo="Browse categories" />
        <Modal visible={this.state.modalVisible}>
        <View style={{flex: 1, backgroundColor: '#ddd'}}>
            
            <Header titulo="Browse categories" voltar={()=>{
                this.setState({modalVisible:false})
            }}/>


              <FlatList data={this.card[0].listaItem} renderItem={({item})=>{
                  return(
                <View style={{flex:1, backgroundColor:'#ddd'}}>

              <View style={{backgroundColor:"#FFFFFF", flexDirection:"row"}} >
          
             <TouchableOpacity style={{padding:15, borderBottomWidth:0.5, width:"100%", height:"auto", flexDirection:"row"}}>
                <View style={{width:100,height:"100%",}}>
                <Image  source={{uri: item.imagem}} style={{width:"100%" , height:"100%",borderRadius:5}}  />
                </View>

                <View>
                    <Text style={{color:"black", fontSize:20,fontWeight:"bold"}}> {item.titulo} </Text>

                <View style={{flexDirection:"row",  }}>
                    <Text style={{color:"#ddd", padding:5}}>{item.descricao1}</Text>
                    <Text style={{color:"#ddd",padding:5}}>{item.descricao2}</Text>

                </View>

                </View>
             </TouchableOpacity>
                  
            </View>
                </View>
                  );
                }}/>
              
            </View>

        </Modal>
        <View style={{padding: 8, flex: 1}}>
          <FlatList
            data={this.card}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginHorizontal: '2.5%',
                    backgroundColor: '#FFFFFF',
                    width: '45%',
                    height: 'auto',
                    elevation: 3,
                    borderRadius: 3,
                    marginTop: 20,
                    paddingVertical: 30,
                    alignItems: 'center',
                  }} onPress={()=>{
                      return(this.setState({modalVisible:true, listaItemCardSelecionado:item.listaItem}));
                  }}>
                  {item.icone}
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {item.nome}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
