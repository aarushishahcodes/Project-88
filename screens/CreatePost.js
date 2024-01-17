import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Post</Text>
            </View>
        )
    }
}

return {
    <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea} />

        <View style = {styles.appTitle}>
            <View style = {styles.appIcon}><
            <Image  
                source = {require("../assets/logo.png")}
                style = {styles.iconImage}

                ><</Image>

                </View>

                <Text style = {styles.appTitleText}>New Post </Text>
                </View>

</View>
<View style = {styles.fieldsContainer}>
<ScrollView>
<Image
source = {preview_iamges{this.state.previewImage}}
style = {styles.previewImage}
></Image>
</View>            }

<View style = {{height:
    RFValue(this.state.dropdownHeight) }}></View>

<DropDownPicker

    items = {{
        { label: "Image 1", value: "image_1"},
        { label: "Image 2", value: "image_2"},
        { label: "Image 3", value: "image_3"},
        { label: "Image 4", value: "image_4"},
        { label: "Image 5", value: "image_5"},
        { label: "Image 6", value: "image_6"},
        { label: "Image 7", value: "image_7"},
    }}

    defaultValue = {this.state.previewImage}

    containerStyle= {{
        height: 40,
        borderRadius: 20,
        marginBottom: 10
    }}

    enOpen = {() => {
        this.setState ({ dropdownHeight: 170 });
    }}

    enClose {() => {
        this.setState({ downdownHeight: 40 });
    }}

    style={{ backgroundColor: "transparent" 
    itemStyle = {{
        justifyContent: "flex-start}}
    }}

    dropDownStyle = {{ backgroundColor: "#2a2a2a"

    labelStyle = {{
        color: "white"
    }}

    arrowStyle={{
        color: "white"
    }}

    onChangeItem={item =>
    this.setState({

    })}

}}
/>

</View>

<TextInput
style={styles.inputFont}

onChangetext={caption => this.setState ({caption})

placeholder={"Caption"}
placeholderTextColor = "white"

/>

</ScrollView>

</View>

<View style = {{flex: 0.08}}/>

</View>
};

async addPost() {
    if(
    this.state.caption
    ) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.displayName,
            created_on: new Date(),
            author_uid: firebase.auth()/currentUser.uid,
            profile_image: this.state.profile_image,
            likes: 0
        };

        await firebase
            .database()
            .ref(
                "/posts/" + 
                Math.random()
                    .toString(36)
                    .slice(2)
            )
            .set(postData)
            .then(function (snapshot) {} );
            this.props.setUpdateToTrue();
            this.props.navigation.navigate("Feed";
            ) 
            } else {
                alert.alert(
                    "Error",
                    "All fields are required!",
                    [{text: "OK", onPress: () => console.log("OK Pressed") }],
                    {cancelable: false}
                );
            }

            
    }
}

constructor(props) {
    super(props);
    this.state ={
        light_theme: true,
        post_id: this.props.post.key,
        post_data: this.props.post.value
    };
}