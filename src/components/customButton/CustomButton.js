import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "../text/CustomText";

function CustomButton({onPress, children, bg}) {
    
    return ( 
        <View style={styles.wrapper}>
            <Pressable onPress={onPress} style = {bg ? [styles.pressableWrapper, styles.bg] : [styles.pressableWrapper, styles.border]}>
                <CustomText style={bg ? [styles.text] : [styles.text, styles.textbg]}>{children}</CustomText>
            </Pressable> 
        </View>
    );
}

export default CustomButton;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pressableWrapper: {
        padding: 10,
        width: "80%",
        borderRadius: 10
    }, 
    bg: {
        backgroundColor: "#ff0810",
    },
    border: {
        borderWidth: 2,
        borderColor: "#ff0810"
    },
    text: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 16,
        textAlign: "center"
    },
    textbg: {
        color: "#ff0810"
    }
})