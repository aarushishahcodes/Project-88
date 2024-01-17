const { SafeAreaView, FlatList } = require("react-native")

return {
    <View style = {styles.container}>
    <SafeAreaView style = {styles.droidSafeArea}>
        <View style = {styles.appTitle}> 
            <Image 
                source = {require("../assets/logo.png")}
                style = {styles.iconImage}
                ><</Image>
            </View>
            <View style = {styles.appTitleTextContainer}>
            <Text style = {styles.appTitleText> Spectagram</Text>}
            </View>
            <View style = {styles.cardContainer}>
            <FlatList
                keyExtractor - {this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}
            />
            </View>

    </View>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.0,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(20),
    },
    cardContainer: {
        flex: 0.05
    }
    }
});