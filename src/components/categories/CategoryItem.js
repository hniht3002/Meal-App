import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomText from "../text/CustomText";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../../data/models/dummy-data";
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
function CategoryItem({category}) {
    const navigation = useNavigation()
    const categoryId = category.id
    const isPortrait = useSelector(state => state.orientationReducer.isPortrait);

    const handleNavigate = () => {
        const meals = MEALS.filter((m) => {return m.categoryIds.includes(categoryId)})
        navigation.navigate("MealList", {category: category.title, meals: meals})
    }
    return ( 
        <Pressable style={isPortrait ? [styles.wrapper, {borderLeftColor: `${category.color}`, borderBottomColor: `${category.color}`}] 
                                    : [styles.wrapper, {borderLeftColor: `${category.color}`, borderBottomColor: `${category.color}`, width: "40%"}]} 
                    onPress={handleNavigate}>
            <MaterialIcons name="food-bank" size={30} color={`${category.color}`} />
            <CustomText style={styles.text}>{category.title}</CustomText>
        </Pressable>
     );
}

export default CategoryItem;

const styles = StyleSheet.create({
    wrapper: {
        width: "75%",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderLeftWidth: 5,
        borderBottomWidth: 1,
        elevation: 5,
        backgroundColor: "white",
        alignItems: "center", 
        flexDirection: "row",
        gap: 10
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#171717"
    }
})