import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import "react-native-gesture-handler";

import HoraireScreen from "./Screens/NavebarScreens/HoraireScreen";


import ProfileScreen from "./Screens/DrawerScreens/ProfileScreen";
import ActualiteScreen from "./Screens/DrawerScreens/ActualiteScreen";
import SettingsScreen from "./Screens/DrawerScreens/SettingsScreen";
import HelpSupport from "./Screens/DrawerScreens/HelpSupport";




import Logout from "./Screens/SecondaryScreens/Logout";

import Screens from "./Component/Navigation/Screens";

const MainDrawer = createDrawerNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer.Navigator
        initialRouteName="Accueil"
        drawerStyle={{
          backgroundColor: "#6AC4C8",
          width: "80%",
        }}
        drawerContentOptions={{
          activeTintColor: "#fff",
          activeBackgroundColor: "#1A938C",
          inactiveTintColor: "#fff",
          labelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          itemStyle: {
            marginVertical: 10,
          },
        }}
      >
        <MainDrawer.Screen
          name="Accueil"
          component={Screens}
          options={{
            drawerIcon: () => <Octicons name="home" size={25} color={"#fff"} />,
          }}
        />
        <MainDrawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="user" size={25} color={"#fff"} />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Actualités"
          component={ActualiteScreen}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="newspaper"
                size={25}
                color={"#fff"}
              />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Paramétre"
          component={SettingsScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome name="cog" size={25} color={"#fff"} />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Help | Support"
          component={HelpSupport}
          options={{
            drawerIcon: () => (
              <FontAwesome name="support" size={25} color="#fff" />
            ),
          }}
        />
        <MainDrawer.Screen
          name="Deconnextion"
          component={Logout}
          options={{
            drawerIcon: () => (
              <FontAwesome name="sign-out" size={25} color={"#fff"} />
            ),
          }}
        />
      </MainDrawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  opendrawer: {
    marginLeft: 15,
    marginRight: 15,
  },
});
