import { ScrollView, Text, View, StyleSheet } from "react-native";
import Layout from "../layout/Layout";
import {CATEGORIES as categories} from "../data/models/dummy-data"
import CategoryItem from "../components/categories/CategoryItem";
function CategoryList() {

    return ( 
        <Layout pageName = "Category">
            <View style={{flex: 1, paddingBottom: 30}}>
                <ScrollView contentContainerStyle={styles.categorylist}>
                    {categories.map((element, index) => {
                      return <CategoryItem key={index} category = {element} />
                    })}
                </ScrollView>
            </View>
        </Layout>
     );
}

export default CategoryList;

const styles = StyleSheet.create({
    categorylist: {
        paddingTop: 20,
        gap: 20, 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
})