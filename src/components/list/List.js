import { StyleSheet, View } from "react-native";
import CustomText from "../text/CustomText";

function List({type, title, list}) {
    return ( 
        <View>
            <View style = {styles.wrapper}>
                <CustomText style={styles.title}>{title}</CustomText>
                <View style = {styles.list}>
                    {list.map((ingredient, index) => {
                        return <CustomText key={index}>{type === "order" ? index + 1 + ". " : "•"} {ingredient}</CustomText>
                    })}
                </View>
            </View>
        </View>
     );
}

export default List;
const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10
    }, 
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    list: {
        paddingLeft: 15,
        flexDirection: "column",
        gap: 3
    }
})