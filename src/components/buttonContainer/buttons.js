import React from "react";
import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,FlatList,LogBox 
} from "react-native";
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead']);
import {  SIZES, FONTS, icons } from "../../constants"

export const Buttons = (props) => {
  console.disableYellowBox = true;

  return (
  
      <View style={styles.firstRow}>
      <FlatList
      data={props.data}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      numColumns={3} // Set the number of columns to 3
      style={{ marginTop: SIZES.padding * 2 }}
  />
      </View>
  
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  btnContainer: {
    justifyContent: "flex-start",
  },
  firstRow: {
    flexDirection: "row",
    margin: 7,
    marginLeft: 5,
width:'100%',
alignItems:'center',
    justifyContent: "center",
  },
btnImage:{
  height: '60%',
  width: '35%',
  paddingBottom:30
},


btnTxt:  { textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4,paddingTop:5, }
,btn:{
  height: 90,
width: 85,
marginBottom: 0,
borderRadius: 20,

alignItems: 'center',
justifyContent: 'center'
}
});



function renderItem  ({ item }){

return (
<TouchableOpacity
  style={{ marginBottom: SIZES.padding * 2,  alignItems: 'center' }}

      onPress={item.onpress}
  >
     

      <View
          style={[styles.btn,{backgroundColor:item.backgroundColor}]}  >
      <Image
      source={item.icon}
      resizeMode="contain"
      style={[styles.btnImage,{tintColor: item.color,}]}
  />

<Text style={styles.btnTxt}>{item.description}</Text>
      </View>
  </TouchableOpacity>
)

  
  
}