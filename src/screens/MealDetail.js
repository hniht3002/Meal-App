import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Layout from "../layout/Layout";
import { useRoute } from "@react-navigation/native";
import CustomText from "../components/text/CustomText";
import { AntDesign } from '@expo/vector-icons';
import List from "../components/list/List";
import CustomButton from "../components/customButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/reducer/reducer";
import Nutrition from "../components/nutrition/nutrition";

function MealDetail() {
    const route = useRoute()
    const meal = route.params.meal
    const favMeal = useSelector(state => state.favMealsReducer.el)
    const dispatch = useDispatch()
    String.prototype.capitalizeTheFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
    const isPortrait = useSelector(state => state.orientationReducer.isPortrait)

    return ( 
        <Layout pageName={"Meal Detail"} hidePageName={true}>
            {isPortrait ? 
            <>
                <View style = {styles.imageWrapper}>
                    <Image source={{uri: `${meal.imageUrl}`}} style={styles.img}/>
                </View>

                <View style={styles.mealWrapper}>
                    <ScrollView>
                        <CustomText style={styles.mealTitle}>{meal.title}</CustomText>

                        <View style = {{flex: 1, columnGap: 30, rowGap: 8, flexDirection: "row", alignItems: "center", flexWrap: "wrap",}}>
                            <Nutrition name="Gluten Free" hasNutrition={meal.isGlutenFree} />
                            <Nutrition name="Lactose Free" hasNutrition={meal.isLactoseFree} />
                            <Nutrition name="Vegan" hasNutrition={meal.isVegan} />
                            <Nutrition name="Vegetarian" hasNutrition={meal.isVegetarian} />
                            
                        </View> 

                        <View style = {{flex: 1, justifyContent: "space-between", gap: 10, flexDirection: "row", alignItems: "center", paddingTop: 10}}>
                            <View style = {{flexDirection: "row", gap: 10}}>
                                <CustomText style={{color: "#2b2b2b"}}>{meal.affordability.capitalizeTheFirstLetter()}</CustomText>
                                <CustomText style={{color: "#2b2b2b"}}>{meal.complexity.capitalizeTheFirstLetter()}</CustomText>
                            </View>
                            <View style={{flexDirection: "row", gap: 3, alignItems: "center"}}>
                                <AntDesign name="clockcircleo" size={16} color="#2b2b2b" />
                                <CustomText style={{color: "#2b2b2b", fontSize: 14}}>{meal.duration} mins</CustomText>
                            </View>
                        </View> 

                        <List title={"Ingredients"} list={meal.ingredients} />
                        <List type="order" title="Steps" list={meal.steps} />

                        <View style = {styles.button}>
                            
                            {favMeal.includes(meal.id) ? 
                                <CustomButton bg = {false} onPress={() => {dispatch(toggle(meal.id))}}> Remove from Favourite</CustomButton> : 
                                <CustomButton bg = {true} onPress={() => {dispatch(toggle(meal.id))}}>Add to Favourite</CustomButton>
                            }
                        </View>
                    </ScrollView>
                </View>
            </> : 
        
        <View style = {{flex: 1, paddingHorizontal: 50, width: "100%"}}>
            <ScrollView>
                <View style = {{width: "100%", height: 250}}>
                    <Image source={{uri: `${meal.imageUrl}`}} style={[styles.img, {objectFit: "contain"}]}/>
                </View>

                <View style={[styles.mealWrapper, {paddingBottom: 0}]}>
                    <CustomText style={styles.mealTitle}>{meal.title}</CustomText>

                    <View style = {{flex: 1, columnGap: 30, rowGap: 8, flexDirection: "row", alignItems: "center", flexWrap: "wrap",}}>
                        <Nutrition name="Gluten Free" hasNutrition={meal.isGlutenFree} />
                        <Nutrition name="Lactose Free" hasNutrition={meal.isLactoseFree} />
                        <Nutrition name="Vegan" hasNutrition={meal.isVegan} />
                        <Nutrition name="Vegetarian" hasNutrition={meal.isVegetarian} />
                        
                    </View> 

                    <View style = {{flex: 1, justifyContent: "space-between", gap: 10, flexDirection: "row", alignItems: "center", paddingTop: 10}}>
                        <View style = {{flexDirection: "row", gap: 10}}>
                            <CustomText style={{color: "#2b2b2b"}}>{meal.affordability.capitalizeTheFirstLetter()}</CustomText>
                            <CustomText style={{color: "#2b2b2b"}}>{meal.complexity.capitalizeTheFirstLetter()}</CustomText>
                        </View>
                        <View style={{flexDirection: "row", gap: 3, alignItems: "center"}}>
                            <AntDesign name="clockcircleo" size={16} color="#2b2b2b" />
                            <CustomText style={{color: "#2b2b2b", fontSize: 14}}>{meal.duration} mins</CustomText>
                        </View>
                    </View> 

                    <List title={"Ingredients"} list={meal.ingredients} />
                    <List type="order" title="Steps" list={meal.steps} />

                    <View style = {styles.button}>
                        
                        {favMeal.includes(meal.id) ? 
                            <CustomButton bg = {false} onPress={() => {dispatch(toggle(meal.id))}}> Remove from Favourite</CustomButton> : 
                            <CustomButton bg = {true} onPress={() => {dispatch(toggle(meal.id))}}>Add to Favourite</CustomButton>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
        }
        </Layout>
    );
}

export default MealDetail;
const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }, 
    imageWrapper: {
        width: "100%",
        height: "35%"
    },
    mealWrapper: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 30,
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    mealTitle: {
        fontWeight: "bold",
        fontSize: 25,
        paddingBottom: 10,
        paddingTop: 10
    }, 
    mealDes: {
        paddingTop: 10
    },
    mealDesTitle: {
        fontWeight: "bold",
        fontSize: 20,
    },
    mealOrderList: {
        paddingLeft: 10
    },
    button: {
        paddingTop: 15,
        paddingBottom: 30
    }
})