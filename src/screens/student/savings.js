import React from 'react'
import { StyleSheet,TouchableOpacity, Text, View ,FlatList,ActivityIndicator} from 'react-native';
import { pagestyles } from '../../styles/pagesStyles';
import { COLORS } from '../../constants';
import { Item } from '../../components/saving/Item';
import { useGetStudentFundQuery } from '../../store/apiSlice';
export function Savings ({navigation}){
  //const studentId = useSelector((state) => state.auth.user.id);
const studentId = 6314434; 
    const { data, isLoading, error } = useGetStudentFundQuery(studentId);
    if (isLoading) {
      return <ActivityIndicator />;
    }
    if (error) {
      return <Text>Error{error.error}</Text>;
    }
  
    const SavingPots = data.data;

    return (
        <View style={pagestyles.container}>
        
      
       
       
        <View >
     
        <FlatList 
        data={SavingPots}
        numColumns={1}
        renderItem={(saving)=>(
       <Item  data={saving}/>
        )}/>
        <TouchableOpacity>
        <View style={styles.btn2}>
        <Text>Add Pots</Text>
        </View>
                
        </TouchableOpacity>
       
      
        </View>
        </View>

    )
  }


    
  const styles = StyleSheet.create({
    btnImage:{
      height: 28,
      width: 28,
      
      paddingBottom:30
    },
    btn2:{
      padding:10,
      margin:15,
      alignItems:'center',
      backgroundColor:COLORS.secondarygreen
    }
    
   
  });
      