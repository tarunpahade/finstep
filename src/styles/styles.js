import React from 'react'
import { StyleSheet } from 'react-native'

export const globastyles=StyleSheet.create({
  //navbar
  navbar: {
    
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  navbtn: {
    width: 30,
    height: 30,
 
  },
  profile: {
    width: 30,
    height: 30,
 
    borderRadius:100
  },
  navContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    width:80
  },
  //navbar end


    full:{
        width:'100%'
        ,flex:1,
        height:'100%',
        backgroundColor:'red'
      },
      container: {
       
        alignItems: "flex-start",
      
      },
      notificationNav:{
        marginTop:60,
        flexDirection:'row',
        width:'50%',
        justifyContent:'space-between',
        alignItems:'center'
        ,margin:20
      },
      bgText:{
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:2,
        
      },
      
      notificationContainer:{
        marginTop:32,
      height:'100%',
    marginLeft:12
    },
    
        
})