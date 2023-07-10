import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function SendNotifications() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
console.log(expoPushToken);
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
  
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


}

export async function schedulePushNotification(taskTitle,userToken) {


 console.log(taskTitle)
//  await Notifications.scheduleNotificationAsync({
//     content: {
//       title:   `${taskTitle}  📬`,
//       body: 'Parent added a task for you',
//       data: { data: 'goes here' },
//     },
//     trigger: null
//   })    ExponentPushToken[zFHBKXInOlqhDVWx_mHw0Y]

sendNotificationToUser(userToken,taskTitle)
}


export const sendNotificationToUser = async (userPushToken,task) => {
  const message = {
    to: userPushToken,
    sound: 'default',
    title:  `${task}  📬`,
    body: 'Parent added a task for you',
    data: { anyData: 'optional' }, // Optional data payload
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  }).then((docs,err)=>{
console.log(docs,err);
    console.log('Notification sent successfully!');
  })

 
};

export async function registerForPushNotificationsAsync() {
  let token;
console.log('hii');
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  
}