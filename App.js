import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

registerUser = {email, password,confirmPassword, first_name,last_name} => {
  if(password==confirmPassword)(
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      Alert.alert("User registered!");
    })
    .catch(error => {
      Alert.alert(error.message);
    })
  else{
      Alert.alert("Passwords don't match!");
    }
  )
}

signIn = async (email, password) => {
  firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    this.props.navigation.replace("Dashboard");
  })
  .catch(error => {
    Alert.alert(error.message);
  });
};