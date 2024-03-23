import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import CustomText from "../text/CustomText";
import { Icon } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/reducer/reducer";

function Meal({meal, isFavoured = true}) {
    const navigation = useNavigation();
    
    const dispatch = useDispatch()
    return ( 
        <Pressable onPress={() => {navigation.navigate("MealDetail", {meal: meal, isFavoured: isFavoured})}}>
            <View style = {styles.wrapper}>
                <View style = {styles.imageWrapper}> 
                    <Image source={{ uri: `${meal.imageUrl}`,}} style={styles.image}></Image>
                </View>
                <View style={styles.mealTitle}>
                    <CustomText style={styles.title} numberOfLines = {2}>{meal.title}</CustomText>
                </View>
                <View style={{flex:1, flexDirection: "row", paddingHorizontal: 8, alignItems: "center", gap: 10}}>
                    <Pressable onPress={() => {dispatch(toggle(meal.id))}}style = {{paddingHorizontal: 10}}>
                        <View>
                            {isFavoured ? <AntDesign name="heart" size={24} color={"red"} /> : <AntDesign name="hearto" size={24} color={"black"} />}
                        </View>
                    </Pressable>
                    <View style = {{flex: 1, flexDirection: "row", gap:3, alignItems: "center",}}>
                        <AntDesign name="clockcircleo" size={16} color="#c4c4c4" />
                        <CustomText style={{color: "#c4c4c4", fontSize: 12}}>{meal.duration} mins</CustomText>
                    </View>
                </View>
            </View>
        </Pressable> 
    );
}

export default Meal;
const styles = StyleSheet.create({
    wrapper: {
        width: 150,
        height: 210,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        flexDirection: "column",fontWeight: "500",
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 5,

        elevation: 3,
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 999,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%"
    },
    mealTitle: {
        height: 44
    },
    title: {
        fontWeight: "bold",
        textAlign: "center"
    }
})