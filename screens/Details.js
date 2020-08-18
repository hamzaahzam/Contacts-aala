import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,Image,SafeAreaView,FlatList} from 'react-native';
const DATA = [
    {
      id: '1',
      name: 'Hamza Ahzam',
      phone: '03076232309',
      DOB: '05/07/96',
    },
    {
      id: '2',
      name: 'Ahzam',
      phone: '03156232323',
      DOB: '05/07/9',
  
  
    },
    {
      id: '3',
      name: 'Usman Ahmad Raza',
      phone: '03016232376',
      DOB: '05/07/99',
  
    },
  ];
  

const Details = ({navigation,name}) => {
    const renderItem = ({ item }) => (
        <Item name={item.name}  />
      ); 
     const Item = ({ name }) => (
     <View style={styles.item}>
     <Text style={styles.name}>{name}</Text>
       </View>
      );
  return (
      <SafeAreaView>
          <View style={{marginLeft:10,marginTop:10}}>
              <Text onPress={()=> navigation.goBack()} style={{fontSize:30}}>
              ✕
              </Text>
          </View>
    <View style={{alignItems:'center'}}>
      <Image style={styles.usrimg} source={require('../assets/User.png')}/>
    </View>
    <View>
    <FlatList
        data={DATA}
        renderItem={renderItem}
        //keyExtractor={item => item.id}
      />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderColor:'#bab6ab'}}> 
        <View style={{marginLeft:40,alignItems:'center',marginTop:8,marginBottom:8}}>
            <Image style={styles.iconimg} source={require('../assets/Phon.png')}/>
            <Text style={styles.icontext}>
                Call
            </Text>
        </View>
        <View style={{alignItems:'center',marginTop:8,marginBottom:8}}> 
        <Image style={styles.iconimg} source={require('../assets/Text.png')}/>
            <Text style={styles.icontext}>
                Text
            </Text>
        </View> 
        <View style={{marginRight:40,alignItems:'center',marginTop:8,marginBottom:8}}>
        <Image style={styles.iconimg} source={require('../assets/Video.png')}/>
            
            <Text style={styles.icontext}>
                Video
            </Text>
        </View>
    </View>


    <View style={{borderBottomWidth:1,borderColor: '#bab6ab'}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            <Image style={{height:35,width:35,resizeMode:'contain',marginTop:15,marginBottom:15}} source={require('../assets/Phon.png')}/>
            <View style={{marginLeft:20,marginTop:15,marginBottom:15}}>
                <Text style={{fontSize:26}}>
                    03076232377
                </Text>
                <Text>
                    Mobile
                </Text>
            </View>
        </View>
    </View>

    <View style={{flexDirection:'row'}}>
        <Image style={{height:40,width:40,resizeMode:'contain',marginTop:15,marginBottom:15}} source={require('../assets/DOB.png')}/>
        <Text style={{fontSize:25,marginTop:15,marginBottom:15}}>
            05-07-96
        </Text>
    </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
    usrimg:{
        marginTop:40,
        height:120,
        width:120,
        resizeMode:'contain',
        marginBottom:40
    },
    name:{
        fontSize:25,
        marginBottom:20
    },
    iconimg:{
        height:25,
        width:25,
        resizeMode:'contain'
    },
    icontext:{
        fontSize:20,
        color:'#1692D5',
        marginTop:5
    }
});