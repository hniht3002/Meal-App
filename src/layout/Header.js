import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import CustomText from "../components/text/CustomText";
import { useSelector } from "react-redux";

function Header() {
    const navigation = useNavigation()
    const favMeal = useSelector(state => state.favMealsReducer.el)
    return ( <View style = {styles.header}> 
                <Pressable onPress={() => {navigation.goBack()}}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>

                <View>
                    <CustomText style={styles.text}>Welcome, Thinh</CustomText>
                </View>

                <Pressable onPress={() => {navigation.navigate("Favourite")}} style={{padding: 5}}>
                    <AntDesign name="hearto" size={24} color="black" />
                    <CustomText style={styles.favQuantity}>{favMeal.length}</CustomText>
                </Pressable>
            </View> 
    );
}

export default Header;
const styles = StyleSheet.create({
    header: {
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    }, 
    text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    favQuantity: {
        position: "absolute",
        top: 0,
        right: -5,
        width: 20,
        height: 20,
        backgroundColor: "red",
        borderRadius: 99,
        textAlign: "center",
        color: "white"
    }
})