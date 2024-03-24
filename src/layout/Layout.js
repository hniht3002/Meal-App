import { View, StyleSheet, StatusBar, Dimensions } from "react-native";
import Header from "./Header"
import CustomText from "../components/text/CustomText";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsPortrait} from "../redux/reducer/reducer";
import { MaterialIcons } from '@expo/vector-icons';


function Layout({children, pageName, hidePageName = false}) {
    const dispatch = useDispatch();    
    const isPortrait = useSelector(state => state.orientationReducer.isPortrait);

    useEffect(() => {
      const handleOrientationChange = () => {
        const isPortrait = Dimensions.get('window').height > Dimensions.get('window').width;
        dispatch(updateIsPortrait(isPortrait));
      };
  
      const handler = Dimensions.addEventListener('change', handleOrientationChange);
  
      return () => {
        handler.remove()
      };
    }, [dispatch]);
    
    return(
        <View style={styles.layoutWrapper}>
            <StatusBar></StatusBar>
            <Header />
            {!hidePageName && 
            <View style = {{justifyContent: "center", flexDirection: "row", alignItems: "center", gap: 20}}>
                <MaterialIcons name="restaurant-menu" size={24} color={"black"} />
                <CustomText style={isPortrait ? styles.title : [styles.title, {paddingVertical: 10}]}>{pageName}</CustomText>
                <MaterialIcons name="restaurant-menu" size={24} color={"black"} />
            </View>}
            {children}
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({  
    layoutWrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 10,
        paddingBottom: 10
    },
})