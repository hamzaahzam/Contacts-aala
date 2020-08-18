import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hamza',
    phone: '03076232309',
    DOB: '05/07/96',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ahzam',
    phone: '03156232323',
    DOB: '05/07/9',


  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Usman',
    phone: '03016232376',
    DOB: '05/07/99',

  },
];

const Item = ({ title, phone }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{phone}</Text>

  </View>
);

const Add = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  phone={item.phone}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        //keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Add;
