import React from "react";
import { CreateStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return {
        <Stack.TabNavigator 
        initialRouteName = "Home"
        screenOptions = {{
            headerShown: false
        }}>

        <Stack.Screen name = "Home" component = {TabNavigator} />
        <Stack.Screen name = "PostScreen" component = {PostScreen} />
        </Stack.Navigator?

    }
}

export default StackNavigator;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () = {
    return {
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {StackNavigator} />
            <Drawer.Screen name = "Profile" component = {Profile} />

    }
}

export default DrawerNavigator;

renderItem = ({ iteam: post }) => {
    return = PostCase post = (post) navigation=(this.props.navigation) />;}


    fetchUser = () => {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", (snapshot) => {
                theme = snapshot.val().current_theme
                this.setState({light_theme: theme === "light"})
            })

            postCardLight: {
                margin: RFValue(20),
                backgroundColor: "#eaeaea",
                borderRadius: RFValue(20)
            },

            authorNameText: {
                color: "white"
                fontSize: RFValue(20)
            },
            authorNameTextLight: {
                color: "black",
                fontSize: RFValue(20)
            },
    }