import React from 'react';
import { View, Text, FlatList ,Image,TouchableOpacity} from 'react-native';
import { COLORS } from '../../constants';

const CoursePage = ({navigation}) => {
  const chapters = [
    { id: 1, name: 'Chapter 1' },
    { id: 2, name: 'Chapter 2' },
    { id: 3, name: 'Chapter 3' },
    { id: 4, name: 'Chapter 4' },
 
  ];
  
  const renderItem = ({ item }) => {
 
    function navigateToCourseDetails() {
      navigation.navigate("Courses Details", { data: item });
    }  
    return (
      <View
        style={{
         
        alignItems: 'center',
        justifyContent: 'center',
          marginVertical: 5,
          borderRadius: 15,
          width:'45%',
          height:170,
          marginTop:5

        }}
      >
      <TouchableOpacity onPress={navigateToCourseDetails} style={{width:'100%'}}>
          <View style={{  position:'relative', borderTopStartRadius: 15,borderTopRightRadius:15,backgroundColor:COLORS.gray,width:'100%',alignItems:'center',justifyContent:'flex-end'}}>
      <Image
      source={require("../../assets/images/course1.png")}
      style={{
        width: "100%",
        height: '70%',

        aspectRatio: 1,
    
      }}
    />
    </View>
<View style={{alignItems:'center',backgroundColor:COLORS.gray,width:'100%',borderBottomEndRadius:15,borderBottomStartRadius:15,justifyContent:'space-between',padding:5}}>
<Text style={{ fontSize: 14, fontWeight: 'bold',marginBottom:9,color:'#000' }}>{item.name}</Text>
<Text style={{ fontSize: 12,color:'#fff' }}>Start Now</Text>

</View>
</TouchableOpacity>
      </View>
     
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 5,alignItems:'center',backgroundColor:'#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20,color:'#000' }}>
       Level 1 ⛳
      </Text>
      <FlatList
        data={chapters}
        renderItem={renderItem}
        numColumns={2}
        style={{width:'85%',marginHorizontal:'7.5%',height:'80%',paddingVertical:5}}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CoursePage;
