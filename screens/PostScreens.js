import React from "react";
import {createStacjNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens"

const Stack = createStackNavigator();
const StackNavigator = () => {
    return(
        <Stack.Navigator
             intitialRouteNmae="Home"
             screenOptions={{
                headerShown:false
             }}
            >
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="PostScreen" component={PostScreen} />
            </Stack.Navigator>   
        ); 
        renderItem = ({item: post}) => {
            return <PostCard post={post} navigation={this.props.navigation} />;
        }  
};

export default StackNavigator;
