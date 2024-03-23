import CategoryList from "./CategoryList";
import Favourite from "./Favourite";
import MealDetail from "./MealDetail";
import MealList from "./MealList";

const screens = [
                {name: "CategoryList", component: CategoryList}, 
                {name: "MealList", component: MealList},
                {name: "Favourite", component: Favourite},
                {name: "MealDetail", component: MealDetail}
            ]

export default screens;