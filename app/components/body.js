import { StyleSheet, View, Image, Text, ImageBackground, Dimensions } from 'react-native';
import Profiles from '../../assets/Profiles';
import Themes from '../../assets/Themes/themes';
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
    return (
        <View>
            <ImageBackground source={Profiles.woman.image}
             style={styles.image} 
             imageStyle={styles.imageStyle}>
                <Text style={[styles.text, {fontSize: 32}]}>{Profiles.woman.name}</Text> 
                <Text style={styles.text}>{Profiles.woman.caption}</Text> 
            </ImageBackground>
            <View style={styles.shadow}>
                <Text style={[styles.text, {fontSize: 32}]}>My hottest take</Text>
                <View style={styles.shadowIcons}>
                    <Image source={Icons.player.dark}
                    style={{width: windowWidth * 0.13, height: windowHeight * 0.06}}></Image>
                    <Image source={Icons.audioWave.dark}
                    style={{width: windowWidth * 0.65, height: windowHeight * 0.055}}></Image> 
                 </View>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1/1.1,
        justifyContent: "space-between",
        margin:18,
        padding:18,
    },
    imageStyle: {
        borderRadius: 8,
    },
    text: {
        padding: 8,
        color: "white",
        fontFamily: 'Sydney',
    },
    shadow: {
        color: "red",
        backgroundColor: Themes.dark.shadows, 
        backgroundColor: "black",
        padding: 8,
        margin: 20,
        height: windowHeight * 0.15,
        borderRadius: 20,
    },
    shadowIcons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
    }

});

export default Body;