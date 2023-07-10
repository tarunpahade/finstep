import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export const Profile = ({ kids,ProfikleChange }) => {
  const [selectedChildId, setSelectedChildId] = useState(kids[0].userId);

  const handleChildPress = (childId) => {
    
    setSelectedChildId(childId);
    ProfikleChange(childId);
  };

  return (
    <View
      style={{
        width: '80%',
borderWidth:1/2,
borderRadius:10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        flexDirection: 'row',
      }}
    >
      {kids.map((x) => {
        const isChildSelected = selectedChildId === x.userId;

        return (
          <TouchableOpacity
            key={x.userId}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginHorizontal: 5,
              backgroundColor: isChildSelected ? '#fff' : '#fff',
            }}
            onPress={() => handleChildPress(x.userId)}
          >
            <Image
              source={require('../../assets/icons/teen.png')}
              style={{
                width: 40,
                height: 40,
                opacity: isChildSelected ? 1 : 0.4,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: isChildSelected ? '#000' : '#888',
              }}
            >
              {x.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

