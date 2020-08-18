import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,Image,TouchableOpacity} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'Hamza Ahzam',
    phone: '03076232309',
    DOB: '05/07/96',
  },
  {
    id: '2',
    title: 'Ahzam',
    phone: '03156232323',
    DOB: '05/07/9',


  },
  {
    id: '3',
    title: 'Usman Ahmad Raza',
    phone: '03016232376',
    DOB: '05/07/99',

  },
];

const Item = ({ title,props }) => (
  <View style={styles.item}>
    <Image style={styles.img}  source={require('../assets/User.png')}/>
    <Text style={styles.title} onPress={ () => this.navigation.navigate('Details')}>{title}</Text>
  </View>
);

const LogIn = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{fontSize:30,color:'#1692D5'}}>
          Contacts
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        //keyExtractor={item => item.id}
      />
    <TouchableOpacity style={styles.btn} onPress={ ()=> navigation.navigate('Add')}> 
      <Text style={{fontSize:34,color:'white'}}>
        +
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  item: {
    flexDirection:'row',
    padding: 10,
    alignItems:'center',
    
  },
  title: {
    fontSize: 18,
    marginLeft:20,
  },
  img:{
height: 40,
resizeMode:'contain',
width:40
  },
  btn:{
    backgroundColor:'#1692D5',
    height:65,
    width:65,
    borderRadius:100,
    position:'absolute',
    bottom:20,
    right:20,
    shadowColor:'black',
    shadowRadius:5,
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    height:70,
    top:0,
    shadowColor:'black',
    shadowRadius:5,
    elevation:2,
    justifyContent:'center',
    alignItems:'center',
    
  }
});

export default LogIn;
