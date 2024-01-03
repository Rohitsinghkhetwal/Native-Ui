import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import MapScreen from './src/MapScreen';
import SaveScreen from './src/SaveScreen';
import SettingScreen from './src/SettingScreen';
import InfoScreen from './src/InfoScreen';

import HomeScreen_active from './src/icons/home-active.png';
import HomeIcon from './src/icons/home.png';
import Saved_Active from './src/icons/saved-active.png';
import Saved_Icon from './src/icons/saved.png';
import setting_Active from './src/icons/settings-active.png';
import Settings_Icon from './src/icons/settings.png';
import Compass from './src/icons/compass.png';
import Compass_active from './src/icons/compass-active.png';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home_Stack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='initial' component={HomeScreen}/>
      <Stack.Screen name='Info' component={InfoScreen}/>

    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route}) => ({
        headerShown: false,
        tabBarIcon: ({ focused}) => {
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? HomeScreen_active : HomeIcon; 
          }else if(route.name === "Map"){
            iconName = focused ? Compass_active : Compass;
          } else if(route.name === "Saved") {
            iconName = focused ? Saved_Active : Saved_Icon;
          } else if(route.name === "Settings") {
            iconName = focused ? setting_Active : Settings_Icon;
          }  
          return (
            <Image source={iconName} resizeMode='contain' style={styles.TabIcons}/>
          )
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          padding : 5,
          backgroundColor: "black",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30
        }

      })}>
        <Tab.Screen name="Home" component={Home_Stack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SaveScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  TabIcons: {
    width: 25,


  }
});
