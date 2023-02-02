import { StyleSheet, View, Text, Image, Dimensions, Platform } from "react-native";
import Icons from "../../assets/Icons";



const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.headerIcons} source={Icons.menu.dark}/>
            <Text style={styles.title}>ensom</Text>
            <Image style={styles.headerIcons} source={Icons.moon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerIcons: {
        height: Platform.OS === 'ios' ? 41 : 54,
        width: Platform.OS === 'ios' ? 41 : 54,

    },
    title: {
        fontFamily: "SydneyBold",
        fontSize: 32,
        color: "white",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 13,
       alignItems: "center",
    },
});

export default Header; 

