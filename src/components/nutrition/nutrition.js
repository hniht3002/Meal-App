import { View } from "react-native";
import CustomText from "../text/CustomText";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function Nutrition({name, hasNutrition}) {
    return ( 
        <View style={{flexDirection: "row", gap: 3, alignItems: "center"}}>
            <CustomText style={{color: "#c4c4c4", fontSize: 14}}>{name}</CustomText>
            {hasNutrition ? 
            <AntDesign name="checkcircle" size={12} color="green" /> :
            <FontAwesome name="times-circle" size={14} color="red" />
            }
        </View>
     );
}

export default Nutrition;