import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";
const favMealSlice = createSlice({
    name: "favMeals",
    initialState: {el: []},
    reducers: {
        toggle: (state, action) => {
            if(!state.el.includes(action.payload)) {
                state.el.push(action.payload)
            } else{
                state.el = state.el.filter(function(item) {
                    return item !== action.payload
                })
            }
        }
    }
})

const getInitialOrientation = () => {
    const { height, width } = Dimensions.get("window");
    return height > width ? true : false; 
  };
const orientationSlice = createSlice({
    name: "orientation",
    initialState : {isPortrait: getInitialOrientation()},
    reducers: {
        updateIsPortrait: (state, action) => {
            state.isPortrait = action.payload
        }
    }
})

const rootReducers = combineReducers({
   favMealsReducer: favMealSlice.reducer,
   orientationReducer: orientationSlice.reducer
})


export const {toggle} = favMealSlice.actions;
export const {updateIsPortrait} = orientationSlice.actions
export default rootReducers;