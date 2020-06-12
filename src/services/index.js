import messaging from '@react-native-firebase/messaging';

export const login = (email, password) => {
  return fetch('https://bbnb-booking.now.sh/api/users/signIn', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(response => {
      // Si un code erreur a été détecté on déclenche une erreur
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};

export async function requestFcmUserPermission() {
  const {AuthorizationStatus} = messaging;
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;
  return enabled;
}

export async function registerFcm() {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();
  // Get and return the token
  const token = await messaging().getToken();
  console.log('device token', token);
  return token;
}
