import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'

export const blackstyles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 0
      },
      ProfileImage: {
        width: 55,
        height: 55,
        borderRadius: 40
      },
      ProfileImageNotification: {
        height: 12,
        width: 12,
        backgroundColor: '#4853ef',
        borderRadius: 6,
        position: 'absolute',
        right: 6,
        borderWidth: 2,
        borderColor: '#000'
      },
      AddUser: {
        height: 140,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c0c0c',
        borderRadius: 10,
        marginRight: 14
      },
      AddUserIconbg: {
        width: 70,
        height: 70,
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center'
      },
      PanelHandle: {
        height: 6,
        width: 50,
        backgroundColor: '#666',
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 6
      },
      PanelItemContainer: {
        borderWidth: 0.4,
        borderColor: '#666',
        padding: 14,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor:COLORS.lightpurple
      },
      PanelImage: {
        width: 30,
        height: 30,
        backgroundColor: '#000',
        borderRadius: 40
      },
      PanelButton: {
        padding:14,
        width: 200,
        justifyContent: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 10
      },
      PanelButtonText: {
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center'
      }

})