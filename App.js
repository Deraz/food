import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/Screens/HomeScreen';
import RestaurantScreen from "./src/Screens/RestaurantScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant:RestaurantScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurants",
    },
  }
);

export default createAppContainer(navigator);

/* 
Client ID
jPYo0tgCP9If38vn_0aeKA

API Key
hmW6P4GaUMN-z7QOoBZJwAaAsATSxgEumso5kTy1JHYR5gmj9LhWhiPgaNco-4cjI7khqR4GNddNiffETxxFNCwOC-AVBdxDe3FD1UUjegStC2JIfGIqHTv-iCfwYHYx
*/