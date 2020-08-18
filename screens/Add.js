import React from 'react';
import {View,Text,SafeAreaView,StyleSheet,TextInput,Image} from 'react-native';
 const Add = ({navigation}) => {
   return(
     <SafeAreaView>
     <View style={styles.Topbar} >
     <Text style={{fontSize:30, marginLeft:20}} onPress={() => navigation.goBack()}>
     ✕ 
     </Text>
     <Text style={{fontSize:26}}>
       Create Contact
     </Text>
     <Text style={{fontSize:20,marginRight:20, color:'#1692D5'}}>
       Save
     </Text>
     </View>
     
     <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',marginTop:90}}>
       <Image style={styles.nameimg} source={require('../assets/Name.png')}/>
       <TextInput
       placeholder="Enter Your Name"
       style={styles.nameinput}
       />
     </View>
     <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',marginTop:20}}>
       <Image style={styles.nameimg} source={require('../assets/Phon.png')}/>
       <TextInput
       placeholder="Enter Your Phone number"
       keyboardType="numeric"
       style={styles.nameinput}
       />
     </View>
     <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center',marginTop:20}}>
       <Image style={styles.nameimg} source={require('../assets/DOB.png')}/>
       <TextInput
       placeholder="Enter Your Date of Birth"
       style={styles.nameinput}
       />
     </View>

     </SafeAreaView>
   );
 }
 const styles = StyleSheet.create({
  Topbar:{
    height:70,
    shadowColor:'black',
    shadowRadius:5,
    elevation:2,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  nameinput:{
    
    height: 50,
    width:300,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft:10,
    borderRadius:7
  },
  nameimg:{
    height:20,
    width:20,
    resizeMode:'contain'
  }
});
 export default Add;