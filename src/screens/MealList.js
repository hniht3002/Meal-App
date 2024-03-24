import { View, ScrollView, Text, StyleSheet } from "react-native";
import Layout from "../layout/Layout";
import { useRoute } from "@react-navigation/native";
import CustomText from "../components/text/CustomText";
import Meal from "../components/meals/Meal";
import { useSelector } from "react-redux";
function MealList() {
    const route = useRoute()
    const meals = route.params.meals;
    const category = route.params.category
    const favMeal = useSelector(state => state.favMealsReducer.el)
    const isPortrait = useSelector(state => state.orientationReducer.isPortrait);

    return ( 
        <Layout pageName={category}>
            <View style={isPortrait ? styles.wrapper : [styles.wrapper, {marginTop: 0}]}>
                <View style = {{flex: 1}}>
                    <ScrollView contentContainerStyle = {meals.length > 3 ? 
                                                        styles.listWrapper : 
                                                        [styles.listWrapper, {justifyContent: "flex-start"}]}> 
                        {meals.map((m, index) => {
                            return (<Meal key={index} meal={m} isFavoured = {favMeal.includes(m.id)}/>)
                        })}
                    </ScrollView>
                </View>
            </View>
        </Layout>
     );
}

export default MealList;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        gap: 30,
        marginTop: 30,
    },
    listWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 20,
        paddingBottom: 30, 
    }, 
})