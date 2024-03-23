import { StyleSheet, View, ScrollView } from "react-native";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { MEALS as meals } from "../data/models/dummy-data";
import Meal from "../components/meals/Meal";
import CustomText from "../components/text/CustomText";
function Favourite() {
    const favMeal = useSelector(state => state.favMealsReducer.el)
    let favList = meals.filter((m, index) => {
        return favMeal.includes(m.id)
    })
    return ( <Layout pageName="Favourite">

                <View style={styles.wrapper}>
                    <View style = {{flex: 1}}>
                        <ScrollView contentContainerStyle = {favMeal.length > 3 ? styles.listWrapper : [styles.listWrapper, {justifyContent: "flex-start"}]}>
                        {favList.length == 0 ? 
                            <CustomText style={{textAlign: "center"}}>Empty</CustomText> : 
                            
                            favList.map((m, index) => {return (<Meal key={index} meal={m} isFavoured = {favMeal.includes(m.id)}/>)})
                        }
                        </ScrollView>
                    </View>
                </View>
        
    </Layout> );
}

export default Favourite;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        gap: 30,
        marginTop: 30,
    },
    listWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap",
        paddingHorizontal: 20,
        justifyContent: "center",
        paddingBottom: 30
    }, 
})